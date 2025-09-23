import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, ChevronLeft, Filter } from "lucide-react";
import { MaterialCard } from "@/components/MaterialCard";
import { FilterButton } from "@/components/FilterButton";
import { SampleKitPopup } from "@/components/SampleKitPopup";
import { useMaterialSearch } from "@/hooks/useMaterialSearch";
import { Logo } from "@/components/Logo";
import { materials, collections, filterOptions } from "@/data/materials";
import { toast } from "@/hooks/use-toast";

export default function Collections() {
  const navigate = useNavigate();
  const [requestedSamples, setRequestedSamples] = useState<Array<{ name: string; code: string; texture?: string }>>([]);
  const [selectedCollection, setSelectedCollection] = useState<number | null>(null);
  const [isKitPopupOpen, setIsKitPopupOpen] = useState(false);
  const kitButtonRef = useRef<HTMLButtonElement>(null);

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
  };

  const handleRequestKit = () => {
    toast({
      title: "Kit solicitado com sucesso!",
      description: `Seu kit com ${requestedSamples.length} amostras será enviado em breve.`,
    });
    setRequestedSamples([]);
    setIsKitPopupOpen(false);
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

  const selectedCollectionData = collections.find(c => c.id === selectedCollection);
  const displayMaterials = selectedCollection 
    ? selectedCollectionData?.materials || []
    : filteredMaterials;

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
            
            {requestedSamples.length > 0 && (
              <div className="relative">
                <Button 
                  ref={kitButtonRef}
                  variant="outline" 
                  className="gap-2"
                  onClick={() => setIsKitPopupOpen(!isKitPopupOpen)}
                >
                  Kit ({requestedSamples.length})
                </Button>
                <SampleKitPopup
                  samples={requestedSamples}
                  isOpen={isKitPopupOpen}
                  onClose={() => setIsKitPopupOpen(false)}
                  onRemoveSample={handleRemoveSample}
                  onRequestKit={handleRequestKit}
                />
              </div>
            )}
            
            <Button className="rounded-2xl bg-orange-500 hover:bg-orange-600" onClick={() => navigate('/login')}>
              Entrar
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-semibold tracking-tight mb-4">
            Explore nossas coleções
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Materiais cuidadosamente selecionados organizados por aplicação, estilo e desempenho
          </p>
        </div>

        {/* Collection Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {collections.map((collection) => (
            <motion.div key={collection.id} whileHover={{ scale: 1.02 }}>
              <Card 
                className={`rounded-3xl shadow-sm border-border cursor-pointer transition-all ${
                  selectedCollection === collection.id ? 'ring-2 ring-primary' : ''
                }`}
                onClick={() => setSelectedCollection(selectedCollection === collection.id ? null : collection.id)}
              >
                <CardHeader>
                  <CardTitle className="text-lg">{collection.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{collection.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {collection.materials.slice(0, 6).map((material, i) => (
                      <div 
                        key={i} 
                        className="h-20 rounded-xl border border-border bg-cover bg-center"
                        style={{ backgroundImage: `url(${material.texture})` }}
                      />
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{collection.materialCount} materiais</span>
                    <Button 
                      variant={selectedCollection === collection.id ? "default" : "secondary"}
                      size="sm" 
                      className="rounded-xl"
                    >
                      {selectedCollection === collection.id ? "Selecionado" : "Explorar"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Filters */}
        <div className="flex items-center gap-4 mb-6">
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            <span className="font-medium">Filtros:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {filterOptions.map((filter) => (
              <FilterButton
                key={filter}
                label={filter}
                isActive={activeFilters.includes(filter)}
                onClick={() => toggleFilter(filter)}
              />
            ))}
          </div>
        </div>

        {/* Selected Collection Header */}
        {selectedCollection && (
          <div className="mb-6 p-4 rounded-2xl bg-accent/10 border border-border">
            <h2 className="text-xl font-medium">{selectedCollectionData?.title}</h2>
            <p className="text-muted-foreground">{selectedCollectionData?.description}</p>
          </div>
        )}

        {/* Materials Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {displayMaterials.map((material) => (
            <MaterialCard
              key={material.code}
              name={material.name}
              code={material.code}
              texture={material.texture}
              onSampleRequest={handleSampleRequest}
            />
          ))}
        </div>

        {displayMaterials.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            <p>Nenhum material encontrado com os filtros selecionados.</p>
          </div>
        )}
      </section>
    </div>
  );
}