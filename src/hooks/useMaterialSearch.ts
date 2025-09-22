import { useState, useMemo } from "react";

export interface Material {
  name: string;
  code: string;
  texture: string;
  category: string;
  isEco?: boolean;
  isAcoustic?: boolean;
  isExternal?: boolean;
}

export const useMaterialSearch = (materials: Material[]) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const filteredMaterials = useMemo(() => {
    let filtered = materials;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        material =>
          material.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          material.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
          material.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by active categories
    if (activeFilters.length > 0) {
      filtered = filtered.filter(material => {
        return activeFilters.some(filter => {
          switch (filter) {
            case "Madeira":
              return material.category === "madeira";
            case "Pedra":
              return material.category === "pedra";
            case "Metal":
              return material.category === "metal";
            case "Tecido":
              return material.category === "tecido";
            case "Biocompósitos":
              return material.category === "biocomposito";
            case "Sustentáveis":
              return material.isEco;
            case "Acústicos":
              return material.isAcoustic;
            case "Externos":
              return material.isExternal;
            default:
              return false;
          }
        });
      });
    }

    return filtered;
  }, [materials, searchTerm, activeFilters]);

  const toggleFilter = (filter: string) => {
    setActiveFilters(prev =>
      prev.includes(filter)
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

  return {
    searchTerm,
    setSearchTerm,
    activeFilters,
    toggleFilter,
    filteredMaterials,
  };
};