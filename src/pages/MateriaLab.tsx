import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ChevronRight, Search, Leaf, Ruler, Truck, Star, Menu, X } from "lucide-react";
import { MaterialCard } from "@/components/MaterialCard";
import { FilterButton } from "@/components/FilterButton";
import { Logo } from "@/components/Logo";
import { useMaterialSearch } from "@/hooks/useMaterialSearch";
import { materials, collections, filterOptions } from "@/data/materials";
import { toast } from "@/hooks/use-toast";

export default function MateriaLab() {
  const navigate = useNavigate();
  const [requestedSamples, setRequestedSamples] = useState<{name: string; code: string}[]>([]);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showSampleKit, setShowSampleKit] = useState(false);

  const {
    searchTerm,
    setSearchTerm,
    activeFilters,
    toggleFilter,
    filteredMaterials,
  } = useMaterialSearch(materials);

  const handleSampleRequest = (material: { name: string; code: string }) => {
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
    <div className="min-h-screen bg-white">
      {/* Header */}
      <motion.header 
        className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Logo 
              onClick={() => navigate('/')} 
              className="flex-shrink-0"
            />
            
            {/* Navigation Desktop */}
            <nav className="hidden md:flex items-center space-x-8">
              <Button 
                variant="ghost" 
                onClick={() => scrollToSection('materiais')}
                className="text-gray-700 hover:text-orange-500"
              >
                Materiais
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => scrollToSection('colecoes')}
                className="text-gray-700 hover:text-orange-500"
              >
                Coleções
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => scrollToSection('como-funciona')}
                className="text-gray-700 hover:text-orange-500"
              >
                Como funciona
              </Button>
              <Button 
                onClick={() => navigate('/login')}
                className="bg-orange-500 hover:bg-orange-600 text-white"
              >
                Entrar
              </Button>
            </nav>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              {showMobileMenu ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile menu */}
          {showMobileMenu && (
            <motion.div 
              className="md:hidden py-4 border-t border-gray-100"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              <div className="flex flex-col space-y-4">
                <Button 
                  variant="ghost" 
                  onClick={() => scrollToSection('materiais')}
                  className="text-left justify-start"
                >
                  Materiais
                </Button>
                <Button 
                  variant="ghost" 
                  onClick={() => scrollToSection('colecoes')}
                  className="text-left justify-start"
                >
                  Coleções
                </Button>
                <Button 
                  variant="ghost" 
                  onClick={() => scrollToSection('como-funciona')}
                  className="text-left justify-start"
                >
                  Como funciona
                </Button>
                <Button 
                  onClick={() => navigate('/login')}
                  className="bg-orange-500 hover:bg-orange-600 text-white"
                >
                  Entrar
                </Button>
              </div>
            </motion.div>
          )}
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-orange-50 overflow-hidden pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full text-sm font-medium text-green-800 mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Leaf size={16} className="mr-2" />
              Coleções com opção de baixo impacto
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Amostras materiais, decisões precisas.
            </motion.h1>

            <motion.p 
              className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              A plataforma onde arquitetos exploram, comparam e <strong>solicitam amostras</strong> de materiais com curadoria técnica.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Button 
                size="lg" 
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3"
                onClick={() => scrollToSection('materiais')}
              >
                Explorar materiais
                <ChevronRight className="ml-2" size={20} />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3"
                onClick={() => scrollToSection('como-funciona')}
              >
                Como funciona
              </Button>
            </motion.div>

            <motion.div 
              className="flex flex-wrap justify-center gap-6 text-sm text-gray-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <div className="flex items-center">
                <Ruler className="mr-2" size={16} />
                Fichas técnicas
              </div>
              <div className="flex items-center">
                <Truck className="mr-2" size={16} />
                Entrega em até 72h
              </div>
              <div className="flex items-center">
                <Star className="mr-2" size={16} />
                Curadoria independente
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters Section */}
      <section id="materiais" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Explore nosso catálogo
            </h2>
            <div className="max-w-2xl mx-auto flex gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <Input
                  type="text"
                  placeholder="Buscar materiais, códigos ou categorias..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-12"
                />
              </div>
              <Button 
                onClick={handleSearch}
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 h-12"
              >
                Buscar
              </Button>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {filterOptions.map((filter) => (
              <FilterButton
                key={filter}
                label={filter}
                isActive={activeFilters.includes(filter)}
                onClick={() => toggleFilter(filter)}
              />
            ))}
          </div>

          {activeFilters.length > 0 && (
            <div className="mb-16">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Materiais filtrados ({filteredMaterials.length})
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredMaterials.map((material) => (
                  <MaterialCard
                    key={material.code}
                    name={material.name}
                    code={material.code}
                    texture={material.texture}
                    onSampleRequest={handleSampleRequest}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Collections Section */}
      <section id="colecoes" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Coleções em destaque
            </h2>
            <p className="text-lg text-gray-600">
              Seleções curadas para diferentes tipos de projetos
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {collections.map((collection) => (
              <motion.div
                key={collection.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl">{collection.title}</CardTitle>
                    <p className="text-gray-600">{collection.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      {collection.materials.map((material, i) => (
                        <div
                          key={i}
                          className={`aspect-square rounded-lg ${material.texture} opacity-80`}
                        />
                      ))}
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">
                        {collection.materialCount} materiais
                      </span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleExploreCollection(collection.id)}
                      >
                        Explorar
                        <ChevronRight size={16} className="ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="como-funciona" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Como funciona
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[{
              icon: <Search size={40} />,
              title: "Pesquise e compare",
              desc: "Filtros por aplicação, acabamento, desempenho e pegada ambiental.",
              action: () => {
                const searchInput = document.querySelector('input[placeholder*="Buscar"]') as HTMLInputElement;
                if (searchInput) {
                  searchInput.focus();
                  toast({
                    title: "Use a busca",
                    description: "Digite o nome ou categoria do material que procura.",
                  });
                }
              }
            },{
              icon: <Ruler size={40} />,
              title: "Veja a ficha técnica",
              desc: "Normas, especificações, amostras reais e alternativas compatíveis.",
              action: () => toast({
                title: "Fichas técnicas",
                description: "Acesse informações completas sobre cada material.",
              })
            },{
              icon: <Truck size={40} />,
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
              <motion.div
                key={i}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="w-20 h-20 rounded-full border-2 border-orange-200 text-orange-500 hover:bg-orange-50 mb-6"
                  onClick={step.action}
                >
                  {step.icon}
                </Button>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Monte seu kit de amostras em minutos
            </h2>
            <p className="text-xl text-orange-100 mb-8">
              Crie listas de materiais por projeto, compartilhe com a equipe e integre aos seus cadernos de especificação.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3"
                onClick={() => navigate('/login')}
              >
                Começar agora
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10 px-8 py-3"
                onClick={() => scrollToSection('materiais')}
              >
                Ver materiais
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <Logo variant="full" className="mb-4 md:mb-0" />
            <p className="text-gray-400 text-center">
              © 2024 Amostra. Plataforma de materiais para arquitetos.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
