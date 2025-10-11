import { Material } from "@/hooks/useMaterialSearch";
import carvalhoEuropeu from "@/assets/carvalho-europeu.jpg";
import concretoUrbano from "@/assets/concreto-urbano.jpg";
import marmoreCarrara from "@/assets/marmore-carrara.jpg";
import acoEscovado from "@/assets/aco-escovado.jpg";
import linhoNatural from "@/assets/linho-natural.jpg";
import biofiberOlive from "@/assets/biofiber-olive.jpg";
import tecaBrasileira from "@/assets/teca-brasileira.jpg";
import granitoAbsoluto from "@/assets/granito-absoluto.jpg";
import nogueiraAmericana from "@/assets/nogueira-americana.jpg";
import cobreEscovado from "@/assets/cobre-escovado.jpg";
import veludoEsmeralda from "@/assets/veludo-esmeralda.jpg";
import marmoreCalacatta from "@/assets/marmore-calacatta.jpg";
import bambuNatural from "@/assets/bambu-natural.jpg";
import lataoPolido from "@/assets/latao-polido.jpg";
import corticaNatural from "@/assets/cortica-natural.jpg";
import travertinoRomano from "@/assets/travertino-romano.jpg";
import acoCorten from "@/assets/aco-corten.jpg";
import couroNatural from "@/assets/couro-natural.jpg";
import pinhoNordico from "@/assets/pinho-nordico.jpg";
import ardosiaCinza from "@/assets/ardosia-cinza.jpg";
import titanioEscovado from "@/assets/titanio-escovado.jpg";
import laCinza from "@/assets/la-cinza.jpg";
import plasticoReciclado from "@/assets/plastico-reciclado.jpg";
import freixoEuropeu from "@/assets/freixo-europeu.jpg";
import onixPreto from "@/assets/onix-preto.jpg";
import aluminioAnodizado from "@/assets/aluminio-anodizado.jpg";
import canhamoNatural from "@/assets/canhamo-natural.jpg";
import terrazzoVeneziano from "@/assets/terrazzo-veneziano.jpg";
import cedroVermelho from "@/assets/cedro-vermelho.jpg";
import quartzitoBranco from "@/assets/quartzito-branco.jpg";
import bronzePatinado from "@/assets/bronze-patinado.jpg";
import sedaNatural from "@/assets/seda-natural.jpg";
import micelioBiocomposito from "@/assets/micelio-biocomposito.jpg";
import mognoAfricano from "@/assets/mogno-africano.jpg";
import basaltoNegro from "@/assets/basalto-negro.jpg";
import zincoFosco from "@/assets/zinco-fosco.jpg";

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
  { 
    name: "Teca Brasileira", 
    code: "WD-315", 
    texture: tecaBrasileira,
    category: "madeira",
    isEco: true
  },
  { 
    name: "Granito Absoluto", 
    code: "ST-428", 
    texture: granitoAbsoluto,
    category: "pedra",
    isExternal: true
  },
  { 
    name: "Nogueira Americana", 
    code: "WD-519", 
    texture: nogueiraAmericana,
    category: "madeira"
  },
  { 
    name: "Cobre Escovado", 
    code: "MT-621", 
    texture: cobreEscovado,
    category: "metal"
  },
  { 
    name: "Veludo Esmeralda", 
    code: "TX-732", 
    texture: veludoEsmeralda,
    category: "tecido",
    isAcoustic: true
  },
  { 
    name: "Mármore Calacatta", 
    code: "MB-843", 
    texture: marmoreCalacatta,
    category: "pedra"
  },
  { 
    name: "Bambu Natural", 
    code: "WD-954", 
    texture: bambuNatural,
    category: "madeira",
    isEco: true
  },
  { 
    name: "Latão Polido", 
    code: "MT-165", 
    texture: lataoPolido,
    category: "metal"
  },
  { 
    name: "Cortiça Natural", 
    code: "BF-276", 
    texture: corticaNatural,
    category: "biocomposito",
    isEco: true,
    isAcoustic: true
  },
  { 
    name: "Travertino Romano", 
    code: "ST-387", 
    texture: travertinoRomano,
    category: "pedra",
    isExternal: true
  },
  { 
    name: "Aço Corten", 
    code: "MT-498", 
    texture: acoCorten,
    category: "metal",
    isExternal: true
  },
  { 
    name: "Couro Natural", 
    code: "TX-509", 
    texture: couroNatural,
    category: "tecido"
  },
  { 
    name: "Pinho Nórdico", 
    code: "WD-610", 
    texture: pinhoNordico,
    category: "madeira",
    isEco: true
  },
  { 
    name: "Ardósia Cinza", 
    code: "ST-721", 
    texture: ardosiaCinza,
    category: "pedra",
    isExternal: true
  },
  { 
    name: "Titânio Escovado", 
    code: "MT-832", 
    texture: titanioEscovado,
    category: "metal"
  },
  { 
    name: "Lã Cinza", 
    code: "TX-943", 
    texture: laCinza,
    category: "tecido",
    isAcoustic: true,
    isEco: true
  },
  { 
    name: "Plástico Reciclado", 
    code: "BF-154", 
    texture: plasticoReciclado,
    category: "biocomposito",
    isEco: true
  },
  { 
    name: "Freixo Europeu", 
    code: "WD-265", 
    texture: freixoEuropeu,
    category: "madeira"
  },
  { 
    name: "Ônix Preto", 
    code: "ST-376", 
    texture: onixPreto,
    category: "pedra"
  },
  { 
    name: "Alumínio Anodizado", 
    code: "MT-487", 
    texture: aluminioAnodizado,
    category: "metal",
    isExternal: true
  },
  { 
    name: "Cânhamo Natural", 
    code: "TX-598", 
    texture: canhamoNatural,
    category: "tecido",
    isEco: true,
    isAcoustic: true
  },
  { 
    name: "Terrazzo Veneziano", 
    code: "BF-609", 
    texture: terrazzoVeneziano,
    category: "biocomposito"
  },
  { 
    name: "Cedro Vermelho", 
    code: "WD-710", 
    texture: cedroVermelho,
    category: "madeira",
    isEco: true
  },
  { 
    name: "Quartzito Branco", 
    code: "ST-821", 
    texture: quartzitoBranco,
    category: "pedra",
    isExternal: true
  },
  { 
    name: "Bronze Patinado", 
    code: "MT-932", 
    texture: bronzePatinado,
    category: "metal"
  },
  { 
    name: "Seda Natural", 
    code: "TX-143", 
    texture: sedaNatural,
    category: "tecido"
  },
  { 
    name: "Micélio Biocompósito", 
    code: "BF-254", 
    texture: micelioBiocomposito,
    category: "biocomposito",
    isEco: true
  },
  { 
    name: "Mogno Africano", 
    code: "WD-365", 
    texture: mognoAfricano,
    category: "madeira"
  },
  { 
    name: "Basalto Negro", 
    code: "ST-476", 
    texture: basaltoNegro,
    category: "pedra",
    isExternal: true
  },
  { 
    name: "Zinco Fosco", 
    code: "MT-587", 
    texture: zincoFosco,
    category: "metal",
    isExternal: true
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
  },
  {
    id: 4,
    title: "Coleção Luxo Premium",
    description: "Materiais sofisticados para projetos de alto padrão",
    materialCount: 15,
    materials: [
      materials.find(m => m.code === "MB-843"),
      materials.find(m => m.code === "ST-376"),
      materials.find(m => m.code === "MT-621"),
      materials.find(m => m.code === "TX-509"),
      materials.find(m => m.code === "MT-165"),
      materials.find(m => m.code === "TX-143")
    ].filter(Boolean) as Material[]
  },
  {
    id: 5,
    title: "Coleção Industrial Moderna",
    description: "Acabamentos contemporâneos para ambientes urbanos",
    materialCount: 14,
    materials: [
      materials.find(m => m.code === "MT-502"),
      materials.find(m => m.code === "MT-498"),
      materials.find(m => m.code === "CC-031"),
      materials.find(m => m.code === "MT-487"),
      materials.find(m => m.code === "MT-832"),
      materials.find(m => m.code === "MT-587")
    ].filter(Boolean) as Material[]
  },
  {
    id: 6,
    title: "Coleção Natural & Orgânica",
    description: "Texturas naturais que trazem calma e conexão com a natureza",
    materialCount: 16,
    materials: [
      materials.find(m => m.code === "WD-315"),
      materials.find(m => m.code === "WD-519"),
      materials.find(m => m.code === "ST-387"),
      materials.find(m => m.code === "WD-365"),
      materials.find(m => m.code === "WD-710"),
      materials.find(m => m.code === "TX-044")
    ].filter(Boolean) as Material[]
  },
  {
    id: 7,
    title: "Coleção Minimalista Nórdica",
    description: "Tons claros e clean para ambientes minimalistas",
    materialCount: 11,
    materials: [
      materials.find(m => m.code === "WD-610"),
      materials.find(m => m.code === "WD-265"),
      materials.find(m => m.code === "MB-112"),
      materials.find(m => m.code === "ST-821"),
      materials.find(m => m.code === "TX-143"),
      materials.find(m => m.code === "TX-943")
    ].filter(Boolean) as Material[]
  },
  {
    id: 8,
    title: "Coleção Sustentável",
    description: "Materiais eco-friendly para projetos conscientes",
    materialCount: 13,
    materials: [
      materials.find(m => m.code === "BF-207"),
      materials.find(m => m.code === "WD-954"),
      materials.find(m => m.code === "BF-276"),
      materials.find(m => m.code === "BF-154"),
      materials.find(m => m.code === "BF-254"),
      materials.find(m => m.code === "TX-598")
    ].filter(Boolean) as Material[]
  },
  {
    id: 9,
    title: "Coleção Pedras Naturais",
    description: "A elegância atemporal das pedras naturais",
    materialCount: 10,
    materials: [
      materials.find(m => m.code === "ST-428"),
      materials.find(m => m.code === "ST-721"),
      materials.find(m => m.code === "ST-476"),
      materials.find(m => m.code === "MB-843"),
      materials.find(m => m.code === "ST-376"),
      materials.find(m => m.code === "ST-821")
    ].filter(Boolean) as Material[]
  },
  {
    id: 10,
    title: "Coleção Metais Nobres",
    description: "Acabamentos metálicos premium para detalhes marcantes",
    materialCount: 8,
    materials: [
      materials.find(m => m.code === "MT-621"),
      materials.find(m => m.code === "MT-165"),
      materials.find(m => m.code === "MT-932"),
      materials.find(m => m.code === "MT-832"),
      materials.find(m => m.code === "MT-502"),
      materials.find(m => m.code === "MT-487")
    ].filter(Boolean) as Material[]
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