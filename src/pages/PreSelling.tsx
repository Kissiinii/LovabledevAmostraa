import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ChevronLeft, Package, Truck, CheckCircle, Clock } from "lucide-react";
import { Logo } from "@/components/Logo";
import { toast } from "@/hooks/use-toast";

export default function PreSelling() {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Kit solicitado com sucesso!",
      description: "Entraremos em contato em até 24h para confirmar o endereço de entrega.",
    });
    navigate('/');
  };

  const benefits = [
    {
      icon: <Package className="h-5 w-5 text-primary" />,
      title: "Até 12 amostras",
      description: "Gratuitas por mês"
    },
    {
      icon: <Truck className="h-5 w-5 text-primary" />,
      title: "Entrega expressa",
      description: "48-72h úteis"
    },
    {
      icon: <CheckCircle className="h-5 w-5 text-primary" />,
      title: "Fichas técnicas",
      description: "Completas incluídas"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" onClick={() => navigate('/')}>
              <ChevronLeft className="h-4 w-4 mr-1" />
              Voltar
            </Button>
            <Logo onClick={() => navigate('/')} className="flex-shrink-0" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <section className="mx-auto max-w-4xl px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
            Solicite seu kit de amostras
          </h1>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto mb-8">
            Preencha os dados abaixo e receba materiais selecionados em casa para avaliar antes de especificar
          </p>

          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-4 mb-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="rounded-2xl border-border p-4">
                  <CardContent className="pt-0 text-center">
                    <div className="flex justify-center mb-2">
                      {benefit.icon}
                    </div>
                    <h3 className="font-semibold text-sm mb-1">{benefit.title}</h3>
                    <p className="text-xs text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="rounded-3xl border-border">
            <CardHeader>
              <CardTitle className="text-center text-2xl">Dados para entrega</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome completo *</Label>
                    <Input id="name" placeholder="Seu nome" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail *</Label>
                    <Input id="email" type="email" placeholder="seu@email.com" required />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone *</Label>
                    <Input id="phone" placeholder="(11) 99999-9999" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Empresa/Escritório</Label>
                    <Input id="company" placeholder="Nome da empresa" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Endereço completo *</Label>
                  <Input id="address" placeholder="Rua, número, complemento, bairro, cidade - CEP" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="project">Descreva seu projeto (opcional)</Label>
                  <Textarea 
                    id="project" 
                    placeholder="Conte-nos sobre o projeto onde pretende usar os materiais..."
                    className="min-h-[100px]"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button type="submit" size="lg" className="flex-1 rounded-2xl">
                    <Package className="h-5 w-5 mr-2" />
                    Solicitar kit gratuito
                  </Button>
                  <Button 
                    type="button" 
                    variant="outline" 
                    size="lg" 
                    className="rounded-2xl"
                    onClick={() => navigate('/collections')}
                  >
                    Voltar às coleções
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </motion.div>

        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Card className="rounded-2xl border-border bg-accent/5 p-8">
            <div className="flex justify-center mb-4">
              <Clock className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Prazo de entrega</h3>
            <p className="text-muted-foreground mb-4">
              Seu kit será enviado em até 48-72h úteis após a confirmação dos dados
            </p>
            <p className="text-sm text-muted-foreground">
              Entregamos para todo o Brasil via Correios com código de rastreamento
            </p>
          </Card>
        </motion.div>
      </section>
    </div>
  );
}