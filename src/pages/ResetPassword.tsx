import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { Logo } from "@/components/Logo";
import { z } from "zod";

const resetPasswordSchema = z.object({
  password: z.string().min(6, { message: "Senha deve ter no mínimo 6 caracteres" }),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "As senhas não coincidem",
  path: ["confirmPassword"],
});

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const validatedData = resetPasswordSchema.parse({ password, confirmPassword });

      const { error } = await supabase.auth.updateUser({
        password: validatedData.password
      });

      if (error) throw error;

      toast({
        title: "Senha redefinida!",
        description: "Sua senha foi alterada com sucesso.",
      });

      navigate("/login");
    } catch (error: any) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Erro de validação",
          description: error.issues[0].message,
          variant: "destructive"
        });
      } else {
        toast({
          title: "Erro ao redefinir senha",
          description: error.message || "Tente novamente mais tarde.",
          variant: "destructive"
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <header className="absolute top-0 left-0 right-0 z-40 px-8 py-6">
        <Link to="/">
          <Logo variant="full" animated={false} />
        </Link>
      </header>

      <div className="flex-1 flex items-center justify-center px-8 py-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          <div className="mb-8">
            <h1 className="text-4xl font-bold tracking-tight mb-2">
              Nova Senha
            </h1>
            <p className="text-muted-foreground text-lg">
              Digite sua nova senha
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleResetPassword}>
            <Input 
              type="password" 
              placeholder="Nova senha" 
              className="h-12 rounded-xl" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Input 
              type="password" 
              placeholder="Confirmar nova senha" 
              className="h-12 rounded-xl" 
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <Button 
              type="submit" 
              className="w-full rounded-xl h-12 bg-amostra-orange hover:bg-amostra-orange/90 text-white"
              disabled={loading}
            >
              {loading ? "Redefinindo..." : "Redefinir senha"}
            </Button>
          </form>

          <div className="mt-6 text-center text-sm">
            <Link 
              to="/login"
              className="text-primary hover:underline font-medium"
            >
              ← Voltar para login
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
