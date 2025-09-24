import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ChevronLeft, Package, Truck, CheckCircle, Plus, Minus, MapPin } from "lucide-react";
import { Logo } from "@/components/Logo";
import { toast } from "@/hooks/use-toast";

export default function PreSelling() {
  const navigate = useNavigate();
  const location = useLocation();
  const selectedItems = location.state?.selectedItems || [];
  
  const [cartItems, setCartItems] = useState(
    selectedItems.map((item: any) => ({ ...item, quantity: 1 }))
  );
  const [cep, setCep] = useState("");
  const [deliveryInfo, setDeliveryInfo] = useState<{ days: string; price: string } | null>(null);

  const handleQuantityChange = (index: number, change: number) => {
    setCartItems(prev => 
      prev.map((item, i) => 
        i === index 
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const calculateDelivery = () => {
    if (cep.length === 8) {
      // Simulação de cálculo de frete
      setDeliveryInfo({
        days: "5-7 dias úteis",
        price: "R$ 15,90"
      });
      toast({
        title: "Prazo calculado!",
        description: "Entrega estimada em 5-7 dias úteis por R$ 15,90",
      });
    }
  };

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/checkout', { 
      state: { 
        cartItems, 
        deliveryInfo,
        formData: new FormData(e.target as HTMLFormElement)
      }
    });
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
      description: "Calculada por CEP"
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
            Carrinho de Amostras
          </h1>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto mb-8">
            Revise seus itens selecionados e preencha os dados para entrega
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

        {/* Cart Items */}
        {cartItems.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-8"
          >
            <Card className="rounded-3xl border-border">
              <CardHeader>
                <CardTitle className="text-xl">Itens Selecionados ({cartItems.length})</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {cartItems.map((item: any, index: number) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-border rounded-2xl">
                    <div className="flex items-center gap-4">
                      {item.texture && (
                        <img 
                          src={item.texture} 
                          alt={item.name}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                      )}
                      <div>
                        <h4 className="font-medium">{item.name}</h4>
                        <p className="text-sm text-muted-foreground">{item.code}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 rounded-lg"
                        onClick={() => handleQuantityChange(index, -1)}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-8 text-center font-medium">{item.quantity}</span>
                      <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 rounded-lg"
                        onClick={() => handleQuantityChange(index, 1)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        )}

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
              <form onSubmit={handleCheckout} className="space-y-6">
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
                  <Label htmlFor="cep">CEP para entrega *</Label>
                  <div className="flex gap-2">
                    <Input 
                      id="cep" 
                      placeholder="00000-000" 
                      value={cep}
                      onChange={(e) => setCep(e.target.value.replace(/\D/g, ''))}
                      maxLength={8}
                      required 
                    />
                    <Button 
                      type="button" 
                      variant="outline"
                      onClick={calculateDelivery}
                      disabled={cep.length !== 8}
                    >
                      <MapPin className="h-4 w-4 mr-1" />
                      Calcular
                    </Button>
                  </div>
                  {deliveryInfo && (
                    <div className="text-sm text-muted-foreground">
                      Prazo: {deliveryInfo.days} | Frete: {deliveryInfo.price}
                    </div>
                  )}
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
                    Ir para checkout
                  </Button>
                  <Button 
                    type="button" 
                    variant="outline" 
                    size="lg" 
                    className="rounded-2xl"
                    onClick={() => navigate('/collections')}
                  >
                    Continuar comprando
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </section>
    </div>
  );
}