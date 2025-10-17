import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail, Lock, ArrowLeft, User } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { Logo } from "@/components/Logo";
import { z } from "zod";
import type { Session, User as SupabaseUser } from "@supabase/supabase-js";

// Schema de validação
const loginSchema = z.object({
  email: z.string().trim().email({ message: "Email inválido" }),
  password: z.string().min(6, { message: "Senha deve ter no mínimo 6 caracteres" }),
});

const signupSchema = z.object({
  fullName: z.string().trim().min(2, { message: "Nome deve ter no mínimo 2 caracteres" }).max(100),
  email: z.string().trim().email({ message: "Email inválido" }),
  password: z.string().min(6, { message: "Senha deve ter no mínimo 6 caracteres" }),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "As senhas não coincidem",
  path: ["confirmPassword"],
});

export default function Login() {
  const [isSignup, setIsSignup] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<SupabaseUser | null>(null);
  const navigate = useNavigate();

  // Verificar se usuário já está autenticado
  useEffect(() => {
    // Setup auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, currentSession) => {
        setSession(currentSession);
        setUser(currentSession?.user ?? null);
        
        // Redirecionar usuário autenticado para a home
        if (currentSession?.user) {
          navigate("/");
        }
      }
    );

    // Check for existing session
    supabase.auth.getSession().then(({ data: { session: currentSession } }) => {
      setSession(currentSession);
      setUser(currentSession?.user ?? null);
      
      if (currentSession?.user) {
        navigate("/");
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Validar dados
      const validatedData = loginSchema.parse({ email, password });

      const { error } = await supabase.auth.signInWithPassword({
        email: validatedData.email,
        password: validatedData.password,
      });

      if (error) {
        if (error.message.includes("Invalid login credentials")) {
          throw new Error("Email ou senha incorretos");
        }
        throw error;
      }

      toast({
        title: "Login realizado!",
        description: "Bem-vindo de volta à Amostra.",
      });
    } catch (error: any) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Erro de validação",
          description: error.issues[0].message,
          variant: "destructive"
        });
      } else {
        toast({
          title: "Erro no login",
          description: error.message || "Verifique suas credenciais.",
          variant: "destructive"
        });
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Validar dados
      const validatedData = signupSchema.parse({ 
        fullName, 
        email, 
        password, 
        confirmPassword 
      });

      const { error } = await supabase.auth.signUp({
        email: validatedData.email,
        password: validatedData.password,
        options: {
          emailRedirectTo: `${window.location.origin}/`,
          data: {
            full_name: validatedData.fullName,
          }
        }
      });

      if (error) {
        if (error.message.includes("already registered")) {
          throw new Error("Este email já está cadastrado");
        }
        throw error;
      }

      toast({
        title: "Conta criada com sucesso!",
        description: "Bem-vindo à Amostra. Você já pode começar a usar a plataforma.",
      });
      
      // Limpar formulário
      setFullName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (error: any) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Erro de validação",
          description: error.issues[0].message,
          variant: "destructive"
        });
      } else {
        toast({
          title: "Erro no cadastro",
          description: error.message || "Tente novamente mais tarde.",
          variant: "destructive"
        });
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSocialLogin = async (provider: 'google' | 'facebook') => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: `${window.location.origin}/`
        }
      });

      if (error) throw error;
    } catch (error: any) {
      toast({
        title: `Erro no login com ${provider}`,
        description: error.message || "Tente novamente mais tarde.",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Minimal Header */}
      <header className="absolute top-0 left-0 right-0 z-40 px-8 py-6">
        <Link to="/">
          <Logo variant="full" animated={false} />
        </Link>
      </header>

      {/* Two Column Layout */}
      <div className="flex-1 flex items-center">
        <div className="w-full grid lg:grid-cols-2 gap-8 px-8 py-20">
          {/* Left Column - Form */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col justify-center max-w-md mx-auto lg:mx-0 lg:ml-auto w-full"
          >
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-4xl font-bold tracking-tight text-muted-foreground">
                {isSignup ? "Crie sua conta" : "Bem-vindo a"}
              </h1>
              {!isSignup && <Logo variant="full" animated={false} />}
            </div>
            <p className="text-muted-foreground text-lg mb-8">
              {isSignup 
                ? "Comece a explorar materiais de design" 
                : "Sua plataforma de materiais de design"}
            </p>
            
            {/* Social login first */}
            <Button 
              variant="outline" 
              className="w-full rounded-xl mb-4 h-12"
              onClick={() => handleSocialLogin('google')}
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Continuar com Google
            </Button>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-background text-muted-foreground">ou</span>
              </div>
            </div>

            {/* Email/Password form */}
            <form className="space-y-4" onSubmit={isSignup ? handleSignup : handleEmailLogin}>
              {isSignup && (
                <Input 
                  type="text" 
                  placeholder="Nome completo" 
                  className="h-12 rounded-xl" 
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              )}
              <Input 
                type="email" 
                placeholder="seuemail@exemplo.com" 
                className="h-12 rounded-xl" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Input 
                type="password" 
                placeholder="Senha" 
                className="h-12 rounded-xl" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {isSignup && (
                <Input 
                  type="password" 
                  placeholder="Confirmar senha" 
                  className="h-12 rounded-xl" 
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              )}
              <Button 
                type="submit" 
                className="w-full rounded-xl h-12 bg-amostra-orange hover:bg-amostra-orange/90 text-white"
                disabled={loading}
              >
                {loading 
                  ? (isSignup ? "Criando conta..." : "Entrando...") 
                  : (isSignup ? "Criar conta" : "Continuar com email")}
              </Button>
            </form>

            <p className="mt-6 text-xs text-muted-foreground text-center">
              Ao continuar, você concorda com nossos{" "}
              <button className="underline hover:text-foreground">Termos de Uso</button>,{" "}
              <button className="underline hover:text-foreground">Política de Privacidade</button> e{" "}
              <button className="underline hover:text-foreground">Política de Cookies</button>
            </p>

            {/* Toggle between login and signup */}
            <div className="mt-6 text-center text-sm">
              {isSignup ? (
                <>
                  Já tem uma conta?{" "}
                  <button 
                    type="button"
                    className="text-primary hover:underline font-medium"
                    onClick={() => {
                      setIsSignup(false);
                      setFullName("");
                      setConfirmPassword("");
                    }}
                  >
                    Fazer login
                  </button>
                </>
              ) : (
                <>
                  Não tem conta?{" "}
                  <button 
                    type="button"
                    className="text-primary hover:underline font-medium"
                    onClick={() => setIsSignup(true)}
                  >
                    Criar conta
                  </button>
                </>
              )}
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative w-full max-w-2xl aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 border border-border shadow-2xl">
              <div className="absolute inset-0 flex items-center justify-center p-12">
                <div className="grid grid-cols-2 gap-6 w-full">
                  <div className="bg-card rounded-2xl p-6 shadow-lg border border-border">
                    <div className="h-32 bg-gradient-to-br from-primary to-primary/60 rounded-xl mb-4"></div>
                    <div className="h-4 bg-muted rounded w-3/4 mb-2"></div>
                    <div className="h-3 bg-muted rounded w-1/2"></div>
                  </div>
                  <div className="bg-card rounded-2xl p-6 shadow-lg border border-border">
                    <div className="h-32 bg-gradient-to-br from-secondary to-secondary/60 rounded-xl mb-4"></div>
                    <div className="h-4 bg-muted rounded w-3/4 mb-2"></div>
                    <div className="h-3 bg-muted rounded w-1/2"></div>
                  </div>
                  <div className="bg-card rounded-2xl p-6 shadow-lg border border-border">
                    <div className="h-32 bg-gradient-to-br from-accent to-accent/60 rounded-xl mb-4"></div>
                    <div className="h-4 bg-muted rounded w-3/4 mb-2"></div>
                    <div className="h-3 bg-muted rounded w-1/2"></div>
                  </div>
                  <div className="bg-card rounded-2xl p-6 shadow-lg border border-border">
                    <div className="h-32 bg-gradient-to-br from-primary/70 to-secondary/70 rounded-xl mb-4"></div>
                    <div className="h-4 bg-muted rounded w-3/4 mb-2"></div>
                    <div className="h-3 bg-muted rounded w-1/2"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}