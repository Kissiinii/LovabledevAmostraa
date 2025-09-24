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
  const { cartItems = [], deliveryInfo, formData } = location.state || {};
  
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

          {/* Payment Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="rounded-3xl border-border/40 bg-card/60 backdrop-blur">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  Pagamento
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
                      <Input id="cardNumber" placeholder="0000 0000 0000 0000" required />
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