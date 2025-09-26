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

      <div className="mx-auto max-w-4xl px-4 py-8">
        {/* Resumo do Pedido */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
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

        {/* Checkout em 3 Blocos */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Bloco 1: Dados Pessoais e de Entrega */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="rounded-3xl border-border/40 bg-card/60 backdrop-blur h-full">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 text-lg text-primary">
                  📋 DADOS PESSOAIS
                </CardTitle>
                <CardTitle className="flex items-center gap-2 text-lg text-primary">
                  E DE ENTREGA
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="space-y-1">
                    <Label htmlFor="name" className="text-xs font-medium uppercase">Nome Completo</Label>
                    <Input id="name" placeholder="Seu nome completo" className="rounded-xl" required />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="email" className="text-xs font-medium uppercase">E-mail</Label>
                    <Input id="email" type="email" placeholder="seu@email.com" className="rounded-xl" required />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="phone" className="text-xs font-medium uppercase">Telefone</Label>
                    <Input id="phone" placeholder="(11) 99999-9999" className="rounded-xl" required />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="cpf" className="text-xs font-medium uppercase">CPF</Label>
                    <Input id="cpf" placeholder="000.000.000-00" className="rounded-xl" required />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="cep" className="text-xs font-medium uppercase">CEP</Label>
                    <Input id="cep" placeholder="00000-000" className="rounded-xl" required />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="space-y-1">
                      <Label htmlFor="address" className="text-xs font-medium uppercase">Endereço</Label>
                      <Input id="address" placeholder="Rua, nº" className="rounded-xl" required />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="number" className="text-xs font-medium uppercase">Número</Label>
                      <Input id="number" placeholder="123" className="rounded-xl" required />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="space-y-1">
                      <Label htmlFor="complement" className="text-xs font-medium uppercase">Complemento</Label>
                      <Input id="complement" placeholder="Apto, bloco" className="rounded-xl" />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="reference" className="text-xs font-medium uppercase">Referência</Label>
                      <Input id="reference" placeholder="Próximo ao..." className="rounded-xl" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="space-y-1">
                      <Label htmlFor="neighborhood" className="text-xs font-medium uppercase">Bairro</Label>
                      <Input id="neighborhood" placeholder="Centro" className="rounded-xl" required />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="city" className="text-xs font-medium uppercase">Cidade</Label>
                      <Input id="city" placeholder="São Paulo" className="rounded-xl" required />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Bloco 2: Forma de Envio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="rounded-3xl border-border/40 bg-card/60 backdrop-blur h-full">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 text-lg text-primary">
                  📍 ESCOLHA A
                </CardTitle>
                <CardTitle className="flex items-center gap-2 text-lg text-primary">
                  FORMA DE ENVIO
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-1">
                  <Label htmlFor="shipping-cep" className="text-xs font-medium uppercase">CEP</Label>
                  <div className="flex gap-2">
                    <Input id="shipping-cep" placeholder="00000-000" className="rounded-xl flex-1" />
                    <Button variant="outline" className="rounded-xl px-3 text-xs">
                      ALTERAR ENVIO
                    </Button>
                  </div>
                </div>
                
                <div className="space-y-3 mt-6">
                  <div className="p-3 border border-primary rounded-2xl bg-primary/5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <input type="radio" name="shipping" value="standard" defaultChecked className="text-primary" />
                        <div className="flex items-center gap-2">
                          <Package className="h-4 w-4 text-primary" />
                          <div>
                            <p className="text-sm font-medium">05 DIAS</p>
                            <p className="text-xs text-muted-foreground">R$ 15,90</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 p-3 border border-border rounded-2xl bg-background/40">
                    <div className="text-center">
                      <p className="text-sm font-medium">ENDEREÇO</p>
                      <div className="text-xs text-muted-foreground mt-2 space-y-1">
                        <p>Rua, Número</p>
                        <p>Complemento, Referência</p>
                        <p>Bairro - Cidade</p>
                        <p>Estado - País</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Bloco 3: Forma de Pagamento */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="rounded-3xl border-border/40 bg-card/60 backdrop-blur h-full">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 text-lg text-primary">
                  💳 ESCOLHA A
                </CardTitle>
                <CardTitle className="flex items-center gap-2 text-lg text-primary">
                  FORMA DE PAGAMENTO
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handlePayment} className="space-y-4">
                  <div className="flex items-center justify-center gap-3 mb-6">
                    <div className="w-8 h-6 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">VISA</div>
                    <div className="w-8 h-6 bg-red-600 rounded text-white text-xs flex items-center justify-center font-bold">MC</div>
                    <div className="w-8 h-6 bg-blue-800 rounded text-white text-xs flex items-center justify-center font-bold">AE</div>
                  </div>

                  <div className="space-y-3">
                    <div className="space-y-1">
                      <Label htmlFor="cardName" className="text-xs font-medium uppercase">Nome no Cartão</Label>
                      <Input id="cardName" placeholder="Nome como no cartão" className="rounded-xl" required />
                    </div>
                    
                    <div className="space-y-1">
                      <Label htmlFor="cardNumber" className="text-xs font-medium uppercase">Número do Cartão</Label>
                      <Input id="cardNumber" placeholder="0000 0000 0000 0000" className="rounded-xl" required />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2">
                      <div className="space-y-1">
                        <Label htmlFor="expiry" className="text-xs font-medium uppercase">Validade</Label>
                        <Input id="expiry" placeholder="MM/AA" className="rounded-xl" required />
                      </div>
                      <div className="space-y-1">
                        <Label htmlFor="cvv" className="text-xs font-medium uppercase">CVV</Label>
                        <Input id="cvv" placeholder="000" className="rounded-xl" required />
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-primary/10 rounded-2xl text-center">
                    <p className="text-xs uppercase font-medium mb-2">VALOR</p>
                    <p className="text-2xl font-bold text-primary">R$ 139,90</p>
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full rounded-2xl bg-primary hover:bg-primary/90 text-white font-bold uppercase mt-6" 
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
                        FINALIZAR COMPRA
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