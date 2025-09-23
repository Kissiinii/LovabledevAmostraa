import { Material } from "@/hooks/useMaterialSearch";
import carvalhoEuropeu from "@/assets/carvalho-europeu.jpg";
import concretoUrbano from "@/assets/concreto-urbano.jpg";
import marmoreCarrara from "@/assets/marmore-carrara.jpg";
import acoEscovado from "@/assets/aco-escovado.jpg";
import linhoNatural from "@/assets/linho-natural.jpg";
import biofiberOlive from "@/assets/biofiber-olive.jpg";

export const materials: Material[] = [
  { 
    name: "Carvalho Europeu", 
    code: "WD-214", 
    texture: carvalhoEuropeu,
    category: "madeira",
    isEco: true
  },
  { 
    name: "Concreto Urbano", 
    code: "CC-031", 
    texture: concretoUrbano,
    category: "pedra",
    isAcoustic: true,
    isExternal: true
  },
  { 
    name: "Mármore Carrara", 
    code: "MB-112", 
    texture: marmoreCarrara,
    category: "pedra"
  },
  { 
    name: "Aço Escovado", 
    code: "MT-502", 
    texture: acoEscovado,
    category: "metal",
    isExternal: true
  },
  { 
    name: "Linho Natural", 
    code: "TX-044", 
    texture: linhoNatural,
    category: "tecido",
    isEco: true,
    isAcoustic: true
  },
  { 
    name: "BioFiber Olive", 
    code: "BF-207", 
    texture: biofiberOlive,
    category: "biocomposito",
    isEco: true,
    isAcoustic: true
  },
];

export const collections = [
  {
    id: 1,
    title: "Essenciais para Interiores",
    description: "Materiais versáteis para projetos residenciais e comerciais",
    materialCount: 18,
    materials: materials.filter(m => !m.isExternal).slice(0, 6)
  },
  {
    id: 2,
    title: "Fachadas & Externas",
    description: "Soluções duráveis para aplicações externas",
    materialCount: 12,
    materials: materials.filter(m => m.isExternal).slice(0, 6)
  },
  {
    id: 3,
    title: "Série Acústica",
    description: "Materiais com propriedades de isolamento acústico",
    materialCount: 9,
    materials: materials.filter(m => m.isAcoustic).slice(0, 6)
  }
];

export const filterOptions = [
  "Madeira",
  "Pedra", 
  "Metal",
  "Tecido",
  "Biocompósitos",
  "Sustentáveis",
  "Acústicos",
  "Externos"
];