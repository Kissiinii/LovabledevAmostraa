import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
      <section className="mx-auto max-w-7xl px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
            Carrinho de Amostras
          </h1>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
            Revise seus itens selecionados e finalize seu pedido
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Cart Items */}
            {cartItems.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <Card className="rounded-3xl border-border">
                  <CardHeader>
                    <CardTitle className="text-xl">Seus Produtos ({cartItems.length})</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {cartItems.map((item: any, index: number) => (
                      <div key={index} className="flex items-center justify-between p-4 border border-border rounded-2xl">
                        <div className="flex items-center gap-4">
                          {item.texture && (
                            <img 
                              src={item.texture} 
                              alt={item.name}
                              className="w-16 h-16 rounded-lg object-cover"
                            />
                          )}
                          <div>
                            <h4 className="font-medium">{item.name}</h4>
                            <p className="text-sm text-muted-foreground">{item.code}</p>
                            <p className="text-sm font-medium text-primary">Gratuito</p>
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

            {/* Delivery Calculator */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="rounded-3xl border-border">
                <CardHeader>
                  <CardTitle className="text-xl">Calcular Prazo de Entrega</CardTitle>
                  <p className="text-muted-foreground">Informe seu CEP para calcular o prazo</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="cep">CEP para entrega</Label>
                      <div className="flex gap-2">
                        <Input 
                          id="cep" 
                          placeholder="00000-000" 
                          value={cep}
                          onChange={(e) => setCep(e.target.value.replace(/\D/g, ''))}
                          maxLength={8}
                          className="rounded-xl"
                        />
                        <Button 
                          type="button" 
                          variant="outline"
                          onClick={calculateDelivery}
                          disabled={cep.length !== 8}
                          className="rounded-xl"
                        >
                          <MapPin className="h-4 w-4 mr-1" />
                          Calcular
                        </Button>
                      </div>
                      {deliveryInfo && (
                        <div className="mt-3 p-4 bg-accent/20 rounded-xl">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Truck className="h-4 w-4 text-primary" />
                              <span className="text-sm font-medium">Prazo: {deliveryInfo.days}</span>
                            </div>
                            <span className="text-sm font-medium text-primary">Frete: {deliveryInfo.price}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Upselling */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="rounded-3xl border-border">
                <CardHeader>
                  <CardTitle className="text-xl">✨ Produtos Complementares</CardTitle>
                  <p className="text-muted-foreground">Amostras que combinam com sua seleção</p>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    <div className="flex items-center justify-between p-4 border border-border rounded-2xl hover:border-primary/50 transition-colors">
                      <div className="flex items-center gap-4">
                        <img 
                          src="/textures/textura-de-marmore-cinza-claro_1375194-49115.jpg" 
                          alt="Mármore Cinza"
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <div>
                          <h4 className="font-medium">Mármore Cinza Claro</h4>
                          <p className="text-sm text-muted-foreground">Combina perfeitamente</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="rounded-xl">
                        Adicionar
                      </Button>
                    </div>

                    <div className="flex items-center justify-between p-4 border border-border rounded-2xl hover:border-primary/50 transition-colors">
                      <div className="flex items-center gap-4">
                        <img 
                          src="/textures/verde_guatemala.jpg" 
                          alt="Verde Guatemala"
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <div>
                          <h4 className="font-medium">Verde Guatemala</h4>
                          <p className="text-sm text-muted-foreground">Excelente contraste</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="rounded-xl">
                        Adicionar
                      </Button>
                    </div>

                    <div className="p-4 bg-primary/5 rounded-2xl border border-primary/20">
                      <div className="text-center">
                        <Package className="h-8 w-8 text-primary mx-auto mb-2" />
                        <h3 className="font-semibold mb-1">Kit Premium</h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          Até 25 amostras + frete grátis
                        </p>
                        <div className="flex items-center justify-center gap-2 mb-3">
                          <span className="text-lg font-bold text-primary">R$ 89</span>
                          <span className="text-sm text-muted-foreground line-through">R$ 150</span>
                        </div>
                        <Button variant="outline" size="sm" className="rounded-xl">
                          Fazer upgrade
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="sticky top-24"
            >
              <Card className="rounded-3xl border-border">
                <CardHeader>
                  <CardTitle className="text-xl">Resumo do Pedido</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Amostras ({cartItems.reduce((acc, item) => acc + item.quantity, 0)})</span>
                      <span className="font-medium">Gratuito</span>
                    </div>
                    
                    {deliveryInfo && (
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Frete</span>
                        <span className="font-medium">{deliveryInfo.price}</span>
                      </div>
                    )}

                    <div className="border-t border-border pt-3">
                      <div className="flex justify-between text-lg font-semibold">
                        <span>Total</span>
                        <span className="text-primary">
                          {deliveryInfo ? deliveryInfo.price : 'R$ 0,00'}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 pt-4">
                    <Button 
                      size="lg" 
                      className="w-full rounded-2xl"
                      onClick={() => navigate('/checkout', { state: { cartItems, deliveryInfo } })}
                      disabled={!deliveryInfo}
                    >
                      <Package className="h-5 w-5 mr-2" />
                      Finalizar Pedido
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="w-full rounded-2xl"
                      onClick={() => navigate('/collections')}
                    >
                      Continuar Comprando
                    </Button>
                  </div>

                  {!deliveryInfo && (
                    <div className="text-center pt-2">
                      <p className="text-sm text-muted-foreground">
                        💡 Calcule o frete para continuar
                      </p>
                    </div>
                  )}

                  {/* Benefits */}
                  <div className="pt-4 space-y-3 border-t border-border">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center gap-3">
                        {benefit.icon}
                        <div>
                          <p className="text-sm font-medium">{benefit.title}</p>
                          <p className="text-xs text-muted-foreground">{benefit.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}