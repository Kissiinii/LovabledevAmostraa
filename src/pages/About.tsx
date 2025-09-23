import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, Target, Users, Lightbulb, Award, Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/Logo";
import { toast } from "@/hooks/use-toast";

export default function About() {
  const navigate = useNavigate();

  const values = [
    {
      icon: <Target className="h-8 w-8"/>,
      title: "Curadoria técnica",
      description: "Selecionamos apenas materiais que passam por rigorosa avaliação técnica e de qualidade."
    },
    {
      icon: <Users className="h-8 w-8"/>,
      title: "Foco no arquiteto",
      description: "Desenvolvemos soluções pensando nas necessidades específicas de profissionais de arquitetura."
    },
    {
      icon: <Lightbulb className="h-8 w-8"/>,
      title: "Inovação sustentável",
      description: "Priorizamos materiais com baixo impacto ambiental e processos produtivos responsáveis."
    }
  ];

  const team = [
    {
      name: "Ana Silva",
      role: "Fundadora & CEO",
      description: "Arquiteta com 15 anos de experiência em especificação de materiais"
    },
    {
      name: "Carlos Mendes", 
      role: "Diretor Técnico",
      description: "Engenheiro de materiais especializado em sustentabilidade"
    },
    {
      name: "Marina Costa",
      role: "Curadora de Produtos",
      description: "Designer de interiores com expertise em tendências globais"
    }
  ];

  const stats = [
    { number: "500+", label: "Materiais catalogados" },
    { number: "1200+", label: "Arquitetos atendidos" },
    { number: "50+", label: "Fornecedores parceiros" },
    { number: "72h", label: "Tempo médio de entrega" }
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
            Sobre a <span className="text-primary">Amostraa</span>
          </h1>
          <p className="text-muted-foreground text-xl max-w-3xl mx-auto">
            Criamos a plataforma definitiva para especificação de materiais, conectando arquitetos aos melhores fornecedores com curadoria técnica independente
          </p>
        </div>

        {/* Mission Statement */}
        <div className="rounded-3xl border border-border p-12 mb-16 bg-gradient-to-br from-accent/5 to-background">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-semibold mb-6">Nossa missão</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Simplificar o processo de especificação de materiais para arquitetura e design, 
                oferecendo acesso rápido a amostras físicas, fichas técnicas confiáveis e 
                curadoria especializada que acelera a tomada de decisões em projetos.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-center mb-12">Nossos valores</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="rounded-3xl border-border p-6 h-full">
                  <CardContent className="pt-0">
                    <div className="h-16 w-16 rounded-2xl bg-primary/10 text-primary grid place-items-center mb-6">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-center mb-12">Nosso time</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="rounded-3xl border-border p-6 text-center">
                  <CardContent className="pt-0">
                    <div className="h-20 w-20 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 mx-auto mb-4 flex items-center justify-center">
                      <Users className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <div className="text-primary font-medium mb-3">{member.role}</div>
                    <p className="text-muted-foreground text-sm">{member.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-semibold mb-6">Entre em contato</h2>
            <p className="text-muted-foreground mb-8">
              Tem dúvidas sobre nossos serviços ou quer se tornar um fornecedor parceiro? 
              Nossa equipe está pronta para ajudar.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary grid place-items-center">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-medium">Email</div>
                  <button 
                    className="text-muted-foreground hover:text-primary transition"
                    onClick={() => {
                      navigator.clipboard.writeText('contato@amostraa.com');
                      toast({ title: "Email copiado!", description: "contato@amostraa.com" });
                    }}
                  >
                    contato@amostraa.com
                  </button>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary grid place-items-center">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-medium">Telefone</div>
                  <div className="text-muted-foreground">+55 47 99212-2218</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary grid place-items-center">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-medium">Localização</div>
                  <div className="text-muted-foreground">São Paulo, SP</div>
                </div>
              </div>
            </div>
          </div>

          <Card className="rounded-3xl border-border p-8 bg-accent/5">
            <CardContent className="pt-0">
              <Award className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Certificações e parcerias</h3>
              <p className="text-muted-foreground mb-4">
                Somos membros ativos de associações do setor e mantemos parcerias com os 
                principais fornecedores de materiais do país.
              </p>
              <ul className="text-sm space-y-2 text-muted-foreground">
                <li>• Associação Brasileira de Arquitetos (ABA)</li>
                <li>• Instituto de Materiais Sustentáveis (IMS)</li>
                <li>• Rede Nacional de Fornecedores (RNF)</li>
                <li>• Certificação ISO 9001:2015</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}