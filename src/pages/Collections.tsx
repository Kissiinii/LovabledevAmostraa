import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronLeft } from "lucide-react";
import { Logo } from "@/components/Logo";
import { UserMenu } from "@/components/UserMenu";
import { collections } from "@/data/materials";
import { toast } from "@/hooks/use-toast";

export default function Collections() {
  const navigate = useNavigate();

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
            <nav className="hidden md:flex items-center gap-4 text-sm ml-4">
              <button className="hover:text-muted-foreground transition" onClick={() => navigate('/materials')}>
                Materiais
              </button>
            </nav>
          </div>
          
          <UserMenu />
        </div>
      </header>

      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
            Explore nossas coleções
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Materiais cuidadosamente selecionados organizados por aplicação, estilo e desempenho
          </p>
        </div>

        {/* Collection Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {collections.map((collection) => (
            <motion.div 
              key={collection.id} 
              whileHover={{ scale: 1.02 }}
              className="h-full"
            >
              <Card 
                className="rounded-3xl shadow-sm border-border h-full flex flex-col cursor-pointer transition-all hover:shadow-lg"
                onClick={() => {
                  toast({
                    title: collection.title,
                    description: `${collection.materialCount} materiais disponíveis nesta coleção.`,
                  });
                  navigate('/materials');
                }}
              >
                <CardHeader>
                  <CardTitle className="text-xl">{collection.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{collection.description}</p>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {collection.materials.slice(0, 6).map((material, i) => (
                      <div 
                        key={i} 
                        className="aspect-square rounded-xl border border-border bg-cover bg-center"
                        style={{ backgroundImage: `url(${material.texture})` }}
                      />
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mt-auto pt-4">
                    <span>{collection.materialCount} materiais</span>
                    <Button 
                      variant="secondary"
                      size="sm" 
                      className="rounded-xl"
                    >
                      Ver coleção
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}