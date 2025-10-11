import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ChevronRight, Search, Leaf, Ruler, Truck, Star, Menu, X } from "lucide-react";
import { MaterialCard } from "@/components/MaterialCard";
import { FilterButton } from "@/components/FilterButton";
import { SampleKitPopup } from "@/components/SampleKitPopup";
import { useMaterialSearch } from "@/hooks/useMaterialSearch";
import { Logo } from "@/components/Logo";
import { materials, collections, filterOptions } from "@/data/materials";
import { toast } from "@/hooks/use-toast";

export default function MateriaLab() {
  const navigate = useNavigate();
  const [requestedSamples, setRequestedSamples] = useState<Array<{ name: string; code: string; texture?: string }>>([]);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showSampleKit, setShowSampleKit] = useState(false);

  const {
    searchTerm,
    setSearchTerm,
    activeFilters,
    toggleFilter,
    filteredMaterials,
  } = useMaterialSearch(materials);

  const handleSampleRequest = (material: { name: string; code: string; texture?: string }) => {
    if (!requestedSamples.find(s => s.code === material.code)) {
      setRequestedSamples(prev => [...prev, material]);
    }
  };

  const handleRemoveSample = (code: string) => {
    setRequestedSamples(prev => prev.filter(s => s.code !== code));
    toast({
      title: "Amostra removida",
      description: "A amostra foi removida do seu kit.",
    });
  };

  const handleSearch = () => {
    if (!searchTerm.trim()) {
      toast({
        title: "Digite algo para buscar",
        description: "Informe o nome ou código do material que você procura.",
        variant: "destructive"
      });
      return;
    }
    toast({
      title: "Buscando materiais",
      description: `Encontrados ${filteredMaterials.length} resultados para "${searchTerm}"`,
    });
  };

  const handleExploreCollection = (collectionId: number) => {
    const collection = collections.find(c => c.id === collectionId);
    if (collection) {
      toast({
        title: `Explorando ${collection.title}`,
        description: `${collection.materialCount} materiais disponíveis na coleção.`,
      });
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setShowMobileMenu(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <Logo onClick={() => navigate('/')} className="flex-shrink-0" />
          
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <button className="hover:text-muted-foreground transition" onClick={() => navigate('/materials')}>
              Materiais
            </button>
            <button className="hover:text-muted-foreground transition" onClick={() => navigate('/collections')}>
              Coleções
            </button>
            <button className="hover:text-muted-foreground transition" onClick={() => navigate('/how-it-works')}>
              Como funciona
            </button>
            <button className="hover:text-muted-foreground transition" onClick={() => navigate('/about')}>
              Sobre
            </button>
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden md:flex items-center gap-2">
              <Input 
                className="w-56" 
                placeholder="Buscar materiais" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              />
              <Button variant="secondary" className="gap-2" onClick={handleSearch}>
                <Search className="h-4 w-4"/>Buscar
              </Button>
            </div>
            
            <div className="relative">
              {requestedSamples.length > 0 && (
                <Button 
                  variant="outline" 
                  className="gap-2"
                  onClick={() => setShowSampleKit(!showSampleKit)}
                >
                  Kit ({requestedSamples.length})
                </Button>
              )}
              
              <SampleKitPopup 
                samples={requestedSamples} 
                isOpen={showSampleKit}
                onClose={() => setShowSampleKit(false)}
                onRemoveSample={handleRemoveSample}
                onRequestKit={() => {
                  navigate('/pre-selling', { state: { selectedItems: requestedSamples } });
                  setShowSampleKit(false);
                }}
              />
            </div>
            
            <Button className="rounded-2xl bg-orange-500 hover:bg-orange-600" onClick={() => navigate('/login')}>
              Entrar
            </Button>
            
            <Button 
              variant="ghost" 
              size="sm" 
              className="md:hidden"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              {showMobileMenu ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {showMobileMenu && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden border-t border-border bg-background p-4"
          >
            <nav className="flex flex-col gap-3">
              <button className="text-left hover:text-muted-foreground" onClick={() => navigate('/materials')}>
                Materiais
              </button>
              <button className="text-left hover:text-muted-foreground" onClick={() => navigate('/collections')}>
                Coleções
              </button>
              <button className="text-left hover:text-muted-foreground" onClick={() => navigate('/how-it-works')}>
                Como funciona
              </button>
              <button className="text-left hover:text-muted-foreground" onClick={() => navigate('/about')}>
                Sobre
              </button>
              <div className="flex gap-2 mt-2">
                <Input 
                  placeholder="Buscar materiais" 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="flex-1"
                />
                <Button size="sm" onClick={handleSearch}>
                  <Search className="h-4 w-4"/>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}

      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs mb-4 bg-accent/20">
              <Leaf className="h-3.5 w-3.5 text-green-600"/> Coleções com opção de baixo impacto
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
              Amostras materiais, decisões <span className="underline decoration-2 decoration-muted">precisas</span>.
            </h1>
            <p className="mt-4 text-muted-foreground text-lg">
              A plataforma onde arquitetos exploram, comparam e <strong>solicitam amostras</strong> de materiais com curadoria técnica.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Button 
                size="lg" 
                className="rounded-2xl gap-2 bg-orange-500 hover:bg-orange-600"
                onClick={() => {
                  scrollToSection('colecoes');
                  toast({
                    title: "Explore nossas coleções",
                    description: "Encontre os materiais ideais para seu projeto.",
                  });
                }}
              >
                Solicitar amostras <ChevronRight className="h-4 w-4"/>
              </Button>
              <Button 
                size="lg" 
                variant="secondary" 
                className="rounded-2xl"
                onClick={() => {
                  scrollToSection('colecoes');
                  toast({
                    title: "Catálogos disponíveis",
                    description: "Veja nossos catálogos completos de materiais.",
                  });
                }}
              >
                Ver catálogos
              </Button>
            </div>
            <div className="mt-6 flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1"><Ruler className="h-4 w-4"/> Fichas técnicas</div>
              <div className="flex items-center gap-1"><Truck className="h-4 w-4"/> Entrega em até 72h</div>
              <div className="flex items-center gap-1"><Star className="h-4 w-4"/> Curadoria independente</div>
            </div>
          </div>

          {/* Animated Material Samples */}
          <div className="relative">
            <div className="absolute -inset-8 -z-10 bg-gradient-to-br from-accent/10 to-background"/>
            <div className="rounded-3xl border border-border p-4 shadow-sm bg-card">
              <motion.div
                className="overflow-hidden rounded-2xl"
                initial={{ maskPosition: "0% 0%" }}
                animate={{ maskPosition: ["0% 0%", "100% 0%"] }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                style={{ 
                  WebkitMaskImage: "linear-gradient(90deg, transparent, black 15%, black 85%, transparent)", 
                  WebkitMaskSize: "200% 100%" 
                }}
              >
                <div className="grid grid-rows-2 gap-3">
                  {[0,1].map((row) => (
                    <motion.div
                      key={row}
                      className="flex gap-3"
                      initial={{ x: row ? 0 : -200 }}
                      animate={{ x: row ? [-200, 0] : [0, -200] }}
                      transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
                    >
                       {materials.concat(materials).map((material, i) => (
                        <div key={`${row}-${i}`} className="w-40 h-40 rounded-2xl border border-border overflow-hidden shadow-sm bg-card">
                          <div 
                            className="h-3/4 bg-cover bg-center"
                            style={{ backgroundImage: `url(${material.texture})` }}
                          />
                          <div className="h-1/4 p-2 text-xs">
                            <div className="font-medium truncate">{material.name}</div>
                            <div className="text-muted-foreground">{material.code}</div>
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Materials Section */}
      <section className="mx-auto max-w-7xl px-4 pb-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold tracking-tight mb-2">Materiais em destaque</h2>
          <p className="text-muted-foreground">Seleção especial dos nossos materiais mais procurados</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-6">
          {materials.slice(0, 6).map((material) => (
            <MaterialCard
              key={material.code}
              name={material.name}
              code={material.code}
              texture={material.texture}
              onSampleRequest={handleSampleRequest}
            />
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="outline" 
            className="gap-2 rounded-2xl"
            onClick={() => navigate('/collections')}
          >
            Ver todos os materiais <ChevronRight className="h-4 w-4"/>
          </Button>
        </div>
      </section>

      {/* Collections Section */}
      <section id="colecoes" className="mx-auto max-w-7xl px-4 pt-10">
        <div className="flex items-end justify-between mb-4">
          <h2 className="text-2xl font-semibold tracking-tight">Coleções em destaque</h2>
          <Button 
            variant="link" 
            className="gap-2"
            onClick={() => navigate('/collections')}
          >
            Ver todas <ChevronRight className="h-4 w-4"/>
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {collections.map((collection) => (
            <Card key={collection.id} className="rounded-3xl shadow-sm border-border">
              <CardHeader>
                <CardTitle className="text-lg">{collection.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{collection.description}</p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-2">
                  {collection.materials.map((material, i) => (
                    <div 
                      key={i} 
                      className="h-20 rounded-xl border border-border bg-cover bg-center"
                      style={{ backgroundImage: `url(${material.texture})` }}
                    />
                  ))}
                </div>
                <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
                  <span>{collection.materialCount} materiais</span>
                  <Button 
                    variant="secondary" 
                    size="sm" 
                    className="rounded-xl"
                    onClick={() => navigate('/collections')}
                  >
                    Explorar
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* How it Works Section */}
      <section id="como-funciona" className="mx-auto max-w-7xl px-4 py-14">
        <h2 className="text-2xl font-semibold tracking-tight mb-6">Como funciona</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[{
            icon: <Search className="h-5 w-5"/>,
            title: "Pesquise e compare",
            desc: "Filtros por aplicação, acabamento, desempenho e pegada ambiental.",
            action: () => {
              const searchInput = document.querySelector('input[placeholder="Buscar materiais"]') as HTMLInputElement;
              if (searchInput) {
                searchInput.focus();
                toast({
                  title: "Use a busca",
                  description: "Digite o nome ou categoria do material que procura.",
                });
              }
            }
          },{
            icon: <Ruler className="h-5 w-5"/>,
            title: "Veja a ficha técnica",
            desc: "Normas, especificações, amostras reais e alternativas compatíveis.",
            action: () => toast({
              title: "Fichas técnicas",
              description: "Acesse informações completas sobre cada material.",
            })
          },{
            icon: <Truck className="h-5 w-5"/>,
            title: "Solicite amostras",
            desc: "Monte um kit e receba em 48–72h com rastreio.",
            action: () => {
              scrollToSection('colecoes');
              toast({
                title: "Solicite amostras",
                description: "Clique nos materiais para adicionar ao seu kit.",
              });
            }
          }].map((step, i) => (
            <motion.div key={i} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Card 
                className="rounded-3xl border-border cursor-pointer hover:shadow-md transition-shadow"
                onClick={step.action}
              >
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-2xl bg-accent/20 grid place-items-center">
                      {step.icon}
                    </div>
                    <div>
                      <div className="font-medium">{step.title}</div>
                      <p className="text-muted-foreground text-sm">{step.desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-7xl px-4 pb-16">
        <div className="rounded-3xl border border-border p-8 md:p-12 bg-accent/5 relative overflow-hidden">
          <div className="absolute -inset-1 pointer-events-none opacity-30">
            <div className="h-full w-full bg-gradient-to-r from-accent/20 to-transparent" />
          </div>

          <div className="relative">
            <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">Monte seu kit de amostras em minutos</h3>
            <p className="mt-2 text-muted-foreground max-w-2xl">Crie listas de materiais por projeto, compartilhe com a equipe e integre aos seus cadernos de especificação.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button 
                size="lg" 
                className="rounded-2xl"
                onClick={() => {
                  scrollToSection('colecoes');
                  toast({
                    title: "Vamos começar!",
                    description: "Explore nossas coleções e crie seu primeiro kit.",
                  });
                }}
              >
                Começar agora
              </Button>
              <Button 
                size="lg" 
                variant="secondary" 
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

      {/* Footer */}
      <footer id="sobre" className="border-t border-border py-10">
        <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-4 gap-8 text-sm text-muted-foreground">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-xl bg-primary text-primary-foreground grid place-items-center font-semibold">M</div>
              <span className="font-semibold text-foreground">Amostraa</span>
            </div>
            <p className="mt-3">Plataforma de amostras e especificações para arquitetura e interiores.</p>
          </div>
          <div>
            <div className="text-foreground font-medium mb-2">Produto</div>
            <ul className="space-y-1">
              <li>
                <button 
                  className="hover:text-foreground transition"
                  onClick={() => scrollToSection('colecoes')}
                >
                  Catálogo
                </button>
              </li>
              <li>
                <button 
                  className="hover:text-foreground transition"
                  onClick={() => scrollToSection('colecoes')}
                >
                  Coleções
                </button>
              </li>
              <li>
                <button 
                  className="hover:text-foreground transition"
                  onClick={() => toast({ title: "Parcerias", description: "Informações sobre nossos parceiros." })}
                >
                  Parcerias
                </button>
              </li>
            </ul>
          </div>
          <div>
            <div className="text-foreground font-medium mb-2">Recursos</div>
            <ul className="space-y-1">
              <li>
                <button 
                  className="hover:text-foreground transition"
                  onClick={() => toast({ title: "Guia de especificação", description: "Manual completo para especificação de materiais." })}
                >
                  Guia de especificação
                </button>
              </li>
              <li>
                <button 
                  className="hover:text-foreground transition"
                  onClick={() => toast({ title: "Sustentabilidade", description: "Conheça nossas práticas sustentáveis." })}
                >
                  Sustentabilidade
                </button>
              </li>
              <li>
                <button 
                  className="hover:text-foreground transition"
                  onClick={() => toast({ title: "Suporte", description: "Entre em contato com nossa equipe de suporte." })}
                >
                  Suporte
                </button>
              </li>
            </ul>
          </div>
          <div>
            <div className="text-foreground font-medium mb-2">Contato</div>
            <ul className="space-y-1">
              <li>
                <button 
                  className="hover:text-foreground transition"
                  onClick={() => {
                    navigator.clipboard.writeText('contato@amostraa.com');
                    toast({ title: "Email copiado!", description: "contato@amostraa.com" });
                  }}
                >
                  contato@amostraa.com
                </button>
              </li>
              <li>+55 47 99212-2218</li>
              <li>São Paulo, SP</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
