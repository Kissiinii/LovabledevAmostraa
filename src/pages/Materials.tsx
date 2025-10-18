import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ChevronLeft, Filter } from "lucide-react";
import { MaterialCard } from "@/components/MaterialCard";
import { FilterButton } from "@/components/FilterButton";
import { SampleKitPopup } from "@/components/SampleKitPopup";
import { useMaterialSearch } from "@/hooks/useMaterialSearch";
import { Logo } from "@/components/Logo";
import { UserMenu } from "@/components/UserMenu";
import { materials, filterOptions } from "@/data/materials";
import { toast } from "@/hooks/use-toast";

export default function Materials() {
  const navigate = useNavigate();
  const [requestedSamples, setRequestedSamples] = useState<Array<{ name: string; code: string; texture?: string }>>([]);
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
              <button className="hover:text-muted-foreground transition" onClick={() => navigate('/collections')}>
                Coleções
              </button>
            </nav>
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
            
            <UserMenu />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-semibold tracking-tight mb-4">
            Catálogo de Materiais
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore nossa biblioteca completa com mais de 130 materiais de alta qualidade para seus projetos
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8 max-w-2xl mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input 
              className="pl-10 h-12 text-base rounded-2xl" 
              placeholder="Buscar por nome, código ou categoria..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            />
          </div>
        </div>

        {/* Filters */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              <span className="font-medium">Filtrar por:</span>
            </div>
            <span className="text-sm text-muted-foreground">
              {activeFilters.length > 0 ? `${activeFilters.length} filtro(s) ativo(s)` : 'Nenhum filtro aplicado'}
            </span>
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

        {/* Results Count */}
        <div className="mb-6 flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            Mostrando <span className="font-semibold text-foreground">{filteredMaterials.length}</span> {filteredMaterials.length === 1 ? 'material' : 'materiais'}
          </p>
          {(searchTerm || activeFilters.length > 0) && (
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => {
                setSearchTerm('');
                activeFilters.forEach(filter => toggleFilter(filter));
              }}
            >
              Limpar filtros
            </Button>
          )}
        </div>

        {/* Materials Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
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

        {filteredMaterials.length === 0 && (
          <div className="text-center py-16">
            <div className="mb-4">
              <Search className="h-16 w-16 mx-auto text-muted-foreground/50" />
            </div>
            <h3 className="text-xl font-medium mb-2">Nenhum material encontrado</h3>
            <p className="text-muted-foreground mb-6">
              Tente ajustar sua busca ou remover alguns filtros
            </p>
            <Button 
              variant="outline"
              onClick={() => {
                setSearchTerm('');
                activeFilters.forEach(filter => toggleFilter(filter));
              }}
            >
              Limpar todos os filtros
            </Button>
          </div>
        )}
      </section>
    </div>
  );
}
