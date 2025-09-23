import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, Search, Ruler, Truck, Download, CheckCircle, Clock, Package } from "lucide-react";
import { Logo } from "@/components/Logo";
import { toast } from "@/hooks/use-toast";

export default function HowItWorks() {
  const navigate = useNavigate();

  const steps = [
    {
      icon: <Search className="h-8 w-8"/>,
      title: "1. Pesquise e filtre",
      description: "Use nossos filtros avançados para encontrar materiais por categoria, sustentabilidade, aplicação e desempenho técnico.",
      details: [
        "Filtros por categoria (madeira, pedra, metal, tecido, biocompósitos)",
        "Opções sustentáveis e com certificação ambiental",
        "Materiais para uso interno e externo",
        "Propriedades acústicas especiais"
      ]
    },
    {
      icon: <Ruler className="h-8 w-8"/>,
      title: "2. Analise fichas técnicas",
      description: "Cada material possui ficha completa com especificações, normas técnicas e orientações de aplicação.",
      details: [
        "Especificações técnicas detalhadas",
        "Normas e certificações aplicáveis",
        "Orientações de instalação e manutenção",
        "Dados de desempenho e durabilidade"
      ]
    },
    {
      icon: <Package className="h-8 w-8"/>,
      title: "3. Monte seu kit",
      description: "Adicione até 12 materiais ao seu kit de amostras. Organize por projeto ou ambiente específico.",
      details: [
        "Até 12 amostras por kit gratuito",
        "Organize amostras por projeto",
        "Compare materiais lado a lado",
        "Compartilhe kits com sua equipe"
      ]
    },
    {
      icon: <Truck className="h-8 w-8"/>,
      title: "4. Receba em casa",
      description: "Entregamos seu kit em 48-72h úteis com rastreamento completo e embalagem sustentável.",
      details: [
        "Entrega expressa em 48-72h úteis",
        "Rastreamento em tempo real",
        "Embalagem 100% reciclável",
        "Cobertura nacional via Correios"
      ]
    }
  ];

  const benefits = [
    {
      icon: <CheckCircle className="h-6 w-6 text-green-600"/>,
      title: "Gratuito",
      description: "Até 12 amostras por mês sem custo"
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-600"/>,
      title: "Rápido",
      description: "Entrega expressa em até 72h"
    },
    {
      icon: <Download className="h-6 w-6 text-purple-600"/>,
      title: "Completo",
      description: "Fichas técnicas e especificações"
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
          
          <div className="flex items-center gap-2">
            <Button className="rounded-2xl bg-orange-500 hover:bg-orange-600" onClick={() => navigate('/login')}>
              Entrar
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
            Como funciona a <span className="text-primary">Amostraa</span>
          </h1>
          <p className="text-muted-foreground text-xl max-w-3xl mx-auto">
            Um processo simples e eficiente para você encontrar, avaliar e especificar os materiais ideais para seus projetos
          </p>
        </div>

        {/* Benefits Bar */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="rounded-2xl border-border text-center p-6">
                <CardContent className="pt-0">
                  <div className="flex justify-center mb-3">
                    {benefit.icon}
                  </div>
                  <h3 className="font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Steps */}
        <div className="space-y-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}
            >
              <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
                <Card className="rounded-3xl border-border p-8 h-80 flex items-center justify-center bg-gradient-to-br from-accent/5 to-background">
                  <div className="text-center">
                    <div className="h-20 w-20 rounded-2xl bg-primary/10 text-primary grid place-items-center mx-auto mb-4">
                      {step.icon}
                    </div>
                    <div className="text-6xl font-bold text-primary/20">{index + 1}</div>
                  </div>
                </Card>
              </div>
              
              <div className={index % 2 === 1 ? 'md:col-start-1' : ''}>
                <h2 className="text-3xl font-semibold mb-4">{step.title}</h2>
                <p className="text-muted-foreground text-lg mb-6">{step.description}</p>
                <ul className="space-y-2">
                  {step.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="rounded-3xl border border-border p-12 bg-accent/5">
            <h3 className="text-3xl font-semibold mb-4">Pronto para começar?</h3>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Explore nossa biblioteca de materiais e crie seu primeiro kit de amostras em poucos minutos
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                size="lg" 
                className="rounded-2xl"
                onClick={() => {
                  navigate('/collections');
                  toast({
                    title: "Vamos começar!",
                    description: "Explore nossa biblioteca de materiais.",
                  });
                }}
              >
                Explorar materiais
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="rounded-2xl"
                onClick={() => toast({
                  title: "Fale conosco",
                  description: "Nossa equipe entrará em contato em até 24h.",
                })}
              >
                Falar com especialista
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}