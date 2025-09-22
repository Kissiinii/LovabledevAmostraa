import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail, Lock, ArrowLeft } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { toast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!supabase) {
      toast({
        title: "Supabase não configurado",
        description: "Configure a integração Supabase para usar o login.",
        variant: "destructive"
      });
      return;
    }

    if (!email || !password) {
      toast({
        title: "Campos obrigatórios",
        description: "Preencha email e senha para continuar.",
        variant: "destructive"
      });
      return;
    }

    setLoading(true);
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      toast({
        title: "Login realizado!",
        description: "Bem-vindo ao MateriaLab.",
      });
      navigate("/");
    } catch (error: any) {
      toast({
        title: "Erro no login",
        description: error.message || "Verifique suas credenciais.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSocialLogin = async (provider: 'google' | 'facebook') => {
    if (!supabase) {
      toast({
        title: "Supabase não configurado",
        description: "Configure a integração Supabase para usar o login social.",
        variant: "destructive"
      });
      return;
    }

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
    <div className="min-h-screen bg-background text-foreground">
      {/* Header with back navigation */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-primary text-primary-foreground grid place-items-center font-semibold">M</div>
            <span className="font-semibold tracking-tight">MateriaLab</span>
          </Link>
          <Link to="/" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Voltar
          </Link>
        </div>
      </header>

      {/* Main content with form and social logins */}
      <main className="mx-auto max-w-7xl px-4 py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-md bg-card border border-border rounded-3xl p-8 shadow-sm"
        >
          <h1 className="text-2xl font-semibold tracking-tight mb-6">
            Entrar no MateriaLab
          </h1>
          
          {/* Email/Password login form */}
          <form className="space-y-4" onSubmit={handleEmailLogin}>
            <div className="relative">
              <Input 
                type="email" 
                placeholder="Email" 
                className="pl-9" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Mail className="h-4 w-4 absolute left-3 top-3 text-muted-foreground" />
            </div>
            <div className="relative">
              <Input 
                type="password" 
                placeholder="Senha" 
                className="pl-9" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <Lock className="h-4 w-4 absolute left-3 top-3 text-muted-foreground" />
            </div>
            <Button 
              type="submit" 
              className="w-full rounded-2xl"
              disabled={loading}
            >
              {loading ? "Entrando..." : "Entrar"}
            </Button>
          </form>

          {/* Social login options */}
          <div className="mt-6 text-center text-sm text-muted-foreground">
            ou continue com
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <Button 
              variant="outline" 
              className="rounded-xl"
              onClick={() => handleSocialLogin('google')}
            >
              Google
            </Button>
            <Button 
              variant="outline" 
              className="rounded-xl"
              onClick={() => handleSocialLogin('facebook')}
            >
              Facebook
            </Button>
          </div>

          {/* Link to sign up */}
          <div className="mt-6 text-center text-sm">
            Não tem conta?{" "}
            <button 
              className="text-primary hover:underline"
              onClick={() => toast({
                title: "Registro",
                description: "Funcionalidade de registro será implementada em breve.",
              })}
            >
              Criar conta
            </button>
          </div>
        </motion.div>
      </main>
    </div>
  );
}