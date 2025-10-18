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
  // Novos materiais adicionados
  { name: "Eucalipto Natural", code: "WD-821", texture: carvalhoEuropeu, category: "madeira", isEco: true },
  { name: "Concreto Polido", code: "CC-132", texture: concretoUrbano, category: "pedra", isExternal: true },
  { name: "Mármore Emperador", code: "MB-213", texture: marmoreCarrara, category: "pedra" },
  { name: "Aço Inox Acetinado", code: "MT-603", texture: acoEscovado, category: "metal", isExternal: true },
  { name: "Linho Belga", code: "TX-145", texture: linhoNatural, category: "tecido", isEco: true, isAcoustic: true },
  { name: "Ipê Brasileiro", code: "WD-416", texture: tecaBrasileira, category: "madeira", isEco: true, isExternal: true },
  { name: "Granito Cinza Andorinha", code: "ST-529", texture: granitoAbsoluto, category: "pedra", isExternal: true },
  { name: "Cerejeira Americana", code: "WD-620", texture: nogueiraAmericana, category: "madeira" },
  { name: "Cobre Oxidado", code: "MT-722", texture: cobreEscovado, category: "metal", isExternal: true },
  { name: "Veludo Cotton", code: "TX-833", texture: veludoEsmeralda, category: "tecido", isAcoustic: true },
  { name: "Mármore Travertino", code: "MB-944", texture: marmoreCalacatta, category: "pedra" },
  { name: "Bambú Carbonizado", code: "WD-055", texture: bambuNatural, category: "madeira", isEco: true },
  { name: "Bronze Fosco", code: "MT-266", texture: lataoPolido, category: "metal" },
  { name: "Fibra de Coco", code: "BF-377", texture: corticaNatural, category: "biocomposito", isEco: true, isAcoustic: true },
  { name: "Arenito Bege", code: "ST-488", texture: travertinoRomano, category: "pedra", isExternal: true },
  { name: "Aço Cor-Ten Plus", code: "MT-599", texture: acoCorten, category: "metal", isExternal: true },
  { name: "Couro Vegetal", code: "TX-610", texture: couroNatural, category: "tecido", isEco: true },
  { name: "Pinus Tratado", code: "WD-711", texture: pinhoNordico, category: "madeira", isExternal: true },
  { name: "Ardósia Verde", code: "ST-822", texture: ardosiaCinza, category: "pedra", isExternal: true },
  { name: "Alumínio Escovado", code: "MT-933", texture: titanioEscovado, category: "metal", isExternal: true },
  { name: "Lã Merino", code: "TX-144", texture: laCinza, category: "tecido", isAcoustic: true, isEco: true },
  { name: "PET Reciclado", code: "BF-255", texture: plasticoReciclado, category: "biocomposito", isEco: true },
  { name: "Carvalho Americano", code: "WD-366", texture: freixoEuropeu, category: "madeira" },
  { name: "Quartzo Rosa", code: "ST-477", texture: onixPreto, category: "pedra" },
  { name: "Aço Galvanizado", code: "MT-588", texture: aluminioAnodizado, category: "metal", isExternal: true },
  { name: "Juta Natural", code: "TX-699", texture: canhamoNatural, category: "tecido", isEco: true, isAcoustic: true },
  { name: "Granilite", code: "BF-710", texture: terrazzoVeneziano, category: "biocomposito" },
  { name: "Mogno Brasileiro", code: "WD-811", texture: cedroVermelho, category: "madeira" },
  { name: "Mármore Branco Sivec", code: "ST-922", texture: quartzitoBranco, category: "pedra" },
  { name: "Latão Escovado", code: "MT-033", texture: bronzePatinado, category: "metal" },
  { name: "Viscose Premium", code: "TX-244", texture: sedaNatural, category: "tecido" },
  { name: "Cogumelo Prensado", code: "BF-355", texture: micelioBiocomposito, category: "biocomposito", isEco: true },
  { name: "Jacarandá", code: "WD-466", texture: mognoAfricano, category: "madeira" },
  { name: "Basalto Cinza", code: "ST-577", texture: basaltoNegro, category: "pedra", isExternal: true },
  { name: "Titânio Polido", code: "MT-688", texture: zincoFosco, category: "metal" },
  { name: "Imbuia Natural", code: "WD-789", texture: carvalhoEuropeu, category: "madeira", isEco: true },
  { name: "Concreto Aparente", code: "CC-890", texture: concretoUrbano, category: "pedra", isAcoustic: true },
  { name: "Mármore Verde Alpi", code: "MB-991", texture: marmoreCarrara, category: "pedra" },
  { name: "Aço Corten Perfurado", code: "MT-102", texture: acoEscovado, category: "metal", isExternal: true, isAcoustic: true },
  { name: "Algodão Orgânico", code: "TX-213", texture: linhoNatural, category: "tecido", isEco: true },
  { name: "Cumaru", code: "WD-324", texture: tecaBrasileira, category: "madeira", isEco: true, isExternal: true },
  { name: "Granito Verde Ubatuba", code: "ST-435", texture: granitoAbsoluto, category: "pedra", isExternal: true },
  { name: "Amendoim Wood", code: "WD-546", texture: nogueiraAmericana, category: "madeira" },
  { name: "Cobre Verde", code: "MT-657", texture: cobreEscovado, category: "metal" },
  { name: "Veludo Italiano", code: "TX-768", texture: veludoEsmeralda, category: "tecido", isAcoustic: true },
  { name: "Mármore Preto São Gabriel", code: "MB-879", texture: marmoreCalacatta, category: "pedra" },
  { name: "Bambu Listrado", code: "WD-980", texture: bambuNatural, category: "madeira", isEco: true },
  { name: "Ouro Fosco", code: "MT-091", texture: lataoPolido, category: "metal" },
  { name: "Cork Premium", code: "BF-102", texture: corticaNatural, category: "biocomposito", isEco: true, isAcoustic: true },
  { name: "Calcário Travertino", code: "ST-213", texture: travertinoRomano, category: "pedra", isExternal: true },
  { name: "Aço Preto Fosco", code: "MT-324", texture: acoCorten, category: "metal" },
  { name: "Nobuck Natural", code: "TX-435", texture: couroNatural, category: "tecido" },
  { name: "Pinus Autoclavado", code: "WD-546", texture: pinhoNordico, category: "madeira", isExternal: true },
  { name: "Ardósia Preta", code: "ST-657", texture: ardosiaCinza, category: "pedra", isExternal: true },
  { name: "Inox 316", code: "MT-768", texture: titanioEscovado, category: "metal", isExternal: true },
  { name: "Cashemere", code: "TX-879", texture: laCinza, category: "tecido", isAcoustic: true },
  { name: "Plástico Oceânico", code: "BF-980", texture: plasticoReciclado, category: "biocomposito", isEco: true },
  { name: "Freijó Natural", code: "WD-091", texture: freixoEuropeu, category: "madeira" },
  { name: "Ágata Natural", code: "ST-102", texture: onixPreto, category: "pedra" },
  { name: "Alumínio Perfurado", code: "MT-213", texture: aluminioAnodizado, category: "metal", isAcoustic: true },
  { name: "Sisal Natural", code: "TX-324", texture: canhamoNatural, category: "tecido", isEco: true },
  { name: "Epóxi Colorido", code: "BF-435", texture: terrazzoVeneziano, category: "biocomposito" },
  { name: "Cedro Rosa", code: "WD-546", texture: cedroVermelho, category: "madeira" },
  { name: "Dolomita Branca", code: "ST-657", texture: quartzitoBranco, category: "pedra" },
  { name: "Prata Envelhecida", code: "MT-768", texture: bronzePatinado, category: "metal" },
  { name: "Linho Francês", code: "TX-879", texture: sedaNatural, category: "tecido" },
  { name: "Palha Prensada", code: "BF-980", texture: micelioBiocomposito, category: "biocomposito", isEco: true },
  { name: "Pau-ferro", code: "WD-201", texture: mognoAfricano, category: "madeira" },
  { name: "Gnaisse", code: "ST-312", texture: basaltoNegro, category: "pedra", isExternal: true },
  { name: "Zinco Titanium", code: "MT-423", texture: zincoFosco, category: "metal", isExternal: true },
  { name: "Sucupira", code: "WD-534", texture: carvalhoEuropeu, category: "madeira", isEco: true },
  { name: "Micro-cimento", code: "CC-645", texture: concretoUrbano, category: "pedra" },
  { name: "Mármore Boticcino", code: "MB-756", texture: marmoreCarrara, category: "pedra" },
  { name: "Ferro Fundido", code: "MT-867", texture: acoEscovado, category: "metal" },
  { name: "Tweed Natural", code: "TX-978", texture: linhoNatural, category: "tecido", isAcoustic: true },
  { name: "Jatobá", code: "WD-089", texture: tecaBrasileira, category: "madeira", isExternal: true },
  { name: "Granito Preto Absoluto", code: "ST-190", texture: granitoAbsoluto, category: "pedra", isExternal: true },
  { name: "Maple Canadense", code: "WD-201", texture: nogueiraAmericana, category: "madeira" },
  { name: "Cobre Dourado", code: "MT-312", texture: cobreEscovado, category: "metal" },
  { name: "Suede Sintético", code: "TX-423", texture: veludoEsmeralda, category: "tecido" },
  { name: "Mármore Crema Marfil", code: "MB-534", texture: marmoreCalacatta, category: "pedra" },
  { name: "Bambu Laminado", code: "WD-645", texture: bambuNatural, category: "madeira", isEco: true },
  { name: "Champagne Gold", code: "MT-756", texture: lataoPolido, category: "metal" },
  { name: "Feltro Industrial", code: "BF-867", texture: corticaNatural, category: "biocomposito", isAcoustic: true },
  { name: "Pedra Miracema", code: "ST-978", texture: travertinoRomano, category: "pedra", isExternal: true },
  { name: "Aço Weathering", code: "MT-189", texture: acoCorten, category: "metal", isExternal: true },
  { name: "Camurça Natural", code: "TX-290", texture: couroNatural, category: "tecido" },
  { name: "Peroba do Campo", code: "WD-301", texture: pinhoNordico, category: "madeira" },
  { name: "Pedra São Tomé", code: "ST-412", texture: ardosiaCinza, category: "pedra", isExternal: true },
  { name: "Cromo Polido", code: "MT-523", texture: titanioEscovado, category: "metal" },
  { name: "Mohair", code: "TX-634", texture: laCinza, category: "tecido", isAcoustic: true },
  { name: "Bioresina", code: "BF-745", texture: plasticoReciclado, category: "biocomposito", isEco: true },
  { name: "Pau-marfim", code: "WD-856", texture: freixoEuropeu, category: "madeira" },
  { name: "Jaspe Vermelho", code: "ST-967", texture: onixPreto, category: "pedra" },
  { name: "Magnésio Fosco", code: "MT-178", texture: aluminioAnodizado, category: "metal" },
  { name: "Rami Natural", code: "TX-289", texture: canhamoNatural, category: "tecido", isEco: true },
  { name: "Resina Epóxi", code: "BF-390", texture: terrazzoVeneziano, category: "biocomposito" },
  { name: "Garapeira", code: "WD-401", texture: cedroVermelho, category: "madeira", isExternal: true },
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