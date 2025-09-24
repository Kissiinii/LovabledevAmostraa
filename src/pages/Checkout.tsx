import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { ChevronLeft, CreditCard, Shield, Package, Check } from "lucide-react";
import { Logo } from "@/components/Logo";
import { toast } from "@/hooks/use-toast";

export default function Checkout() {
  const navigate = useNavigate();
  const location = useLocation();
  const { cartItems = [], deliveryInfo } = location.state || {};
  
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simular processamento
    setTimeout(() => {
      setIsProcessing(false);
      toast({
        title: "Pedido confirmado!",
        description: "Você receberá um e-mail com os detalhes do envio.",
      });
      navigate('/');
    }, 2000);
  };

  const totalItems = cartItems.reduce((sum: number, item: any) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border/40">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" onClick={() => navigate('/pre-selling')}>
              <ChevronLeft className="h-4 w-4 mr-1" />
              Voltar ao carrinho
            </Button>
            <Logo onClick={() => navigate('/')} className="flex-shrink-0" />
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Shield className="h-4 w-4" />
            Checkout seguro
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="rounded-3xl border-border/40 bg-card/60 backdrop-blur">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Package className="h-5 w-5" />
                  Resumo do Pedido
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {cartItems.map((item: any, index: number) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-2xl bg-background/40">
                    <div className="flex items-center gap-3">
                      {item.texture && (
                        <img 
                          src={item.texture} 
                          alt={item.name}
                          className="w-10 h-10 rounded-lg object-cover"
                        />
                      )}
                      <div>
                        <h4 className="font-medium text-sm">{item.name}</h4>
                        <p className="text-xs text-muted-foreground">{item.code}</p>
                      </div>
                    </div>
                    <div className="text-sm font-medium">
                      {item.quantity}x
                    </div>
                  </div>
                ))}
                
                <Separator className="my-4" />
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Amostras ({totalItems} itens)</span>
                    <span>Gratuito</span>
                  </div>
                  {deliveryInfo && (
                    <div className="flex justify-between text-sm">
                      <span>Frete ({deliveryInfo.days})</span>
                      <span>{deliveryInfo.price}</span>
                    </div>
                  )}
                  <Separator />
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>{deliveryInfo ? deliveryInfo.price : "R$ 0,00"}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Personal Data */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            <Card className="rounded-3xl border-border/40 bg-card/60 backdrop-blur">
              <CardHeader>
                <CardTitle>📋 Dados Pessoais</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome completo</Label>
                    <Input id="name" placeholder="Seu nome completo" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail</Label>
                    <Input id="email" type="email" placeholder="seu@email.com" required />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone</Label>
                    <Input id="phone" placeholder="(11) 99999-9999" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cpf">CPF</Label>
                    <Input id="cpf" placeholder="000.000.000-00" required />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Delivery Options */}
            <Card className="rounded-3xl border-border/40 bg-card/60 backdrop-blur">
              <CardHeader>
                <CardTitle>🚚 Entrega</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="p-4 border border-border rounded-2xl cursor-pointer hover:border-primary/50 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <input type="radio" name="shipping" value="standard" defaultChecked className="text-primary" />
                        <div>
                          <h4 className="font-medium">Entrega Padrão</h4>
                          <p className="text-sm text-muted-foreground">5-7 dias úteis</p>
                        </div>
                      </div>
                      <div className="font-semibold">R$ 15,90</div>
                    </div>
                  </div>
                  
                  <div className="p-4 border border-border rounded-2xl cursor-pointer hover:border-primary/50 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <input type="radio" name="shipping" value="express" className="text-primary" />
                        <div>
                          <h4 className="font-medium">Entrega Expressa</h4>
                          <p className="text-sm text-muted-foreground">2-3 dias úteis</p>
                        </div>
                      </div>
                      <div className="font-semibold">R$ 29,90</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment Form */}
            <Card className="rounded-3xl border-border/40 bg-card/60 backdrop-blur">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  💳 Pagamento
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handlePayment} className="space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="cardName">Nome no cartão</Label>
                      <Input id="cardName" placeholder="Nome como aparece no cartão" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="cardNumber">Número do cartão</Label>
                      <div className="relative">
                        <Input id="cardNumber" placeholder="0000 0000 0000 0000" required />
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
                          <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAyNCAxNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjE1IiByeD0iMiIgZmlsbD0iIzAwNTFBNSIvPgo8cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMTUiIHJ4PSIyIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfMV8xKSIvPgo8L3N2Zz4=" alt="Visa" className="w-6 h-4" />
                          <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAyNCAxNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjE1IiByeD0iMiIgZmlsbD0iI0VCMDAxQiIvPgo8Y2lyY2xlIGN4PSI5IiBjeT0iNy41IiByPSI1LjUiIGZpbGw9IiNGRjVGMDAiLz4KPGNpcmNsZSBjeD0iMTUiIGN5PSI3LjUiIHI9IjUuNSIgZmlsbD0iI0ZGNUYwMCIvPgo8L3N2Zz4=" alt="Mastercard" className="w-6 h-4" />
                          <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAyNCAxNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjE1IiByeD0iMiIgZmlsbD0iIzAwNjhBNyIvPgo8L3N2Zz4=" alt="American Express" className="w-6 h-4" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="expiry">Validade</Label>
                        <Input id="expiry" placeholder="MM/AA" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cvv">CVV</Label>
                        <Input id="cvv" placeholder="000" required />
                      </div>
                    </div>
                  </div>

                  <div className="bg-accent/20 p-4 rounded-2xl">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Shield className="h-4 w-4" />
                      Pagamento seguro
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Seus dados estão protegidos com criptografia SSL de 256 bits
                    </p>
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full rounded-2xl" 
                    disabled={isProcessing}
                  >
                    {isProcessing ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Processando...
                      </>
                    ) : (
                      <>
                        <Check className="h-5 w-5 mr-2" />
                        Finalizar Pedido
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}