import ex1 from "@/components/assets/ex1.jpg"
import ex2 from "@/components/assets/ex2.jpg"
import ex3 from "@/components/assets/ex3.jpg"
import ex4 from "@/components/assets/ex4.jpg"
import ex5 from "@/components/assets/ex5.jpg"
import ex6 from "@/components/assets/ex6.jpg"
import ex7 from "@/components/assets/ex7.jpg"
import ex8 from "@/components/assets/ex8.jpg"
import ex9 from "@/components/assets/ex9.jpg"
import ex10 from "@/components/assets/ex10.jpg"
import ex11 from "@/components/assets/ex11.png"

export type Product = {
  id: string;
  name: string;
  slug: string;
  price: number;
  oldPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  short: string;
  description: string;
  composition: string;
  usage: string;
  care: string;
  stock: number;
  bestSeller?: boolean;
};

const img = (seed: string) =>
  `https://images.unsplash.com/${seed}?auto=format&fit=crop&w=900&q=80`;


export const PRODUCTS: Product[] = [
  {
    id: "1", slug: "oleo-essencial-lavanda", name: "Óleo Essencial de Lavanda",
    price: 89.9, oldPrice: 119.9, image: ex1,
    category: "Relaxante", rating: 4.9, reviews: 312, stock: 48, bestSeller: true,
    short: "Calmante natural ideal para relaxamento e sono profundo.",
    description: "Extraído por destilação a vapor das flores de Lavandula angustifolia cultivadas na Provença. 100% puro, terapêutico e sustentável.",
    composition: "100% Óleo essencial puro de Lavandula angustifolia.",
    usage: "Difusor: 3 a 5 gotas. Massagem: diluir 2% em óleo vegetal.",
    care: "Manter ao abrigo da luz, em temperatura inferior a 25ºC. Evitar contato com os olhos.",
  },
  {
    id: "2", slug: "oleo-essencial-melaleuca", name: "Óleo Essencial de Melaleuca",
    price: 79.9, image: ex2,
    category: "Purificante", rating: 4.8, reviews: 241, stock: 32, bestSeller: true,
    short: "Tea Tree puro com ação antisséptica e purificante.",
    description: "Tea Tree australiano selecionado, conhecido por sua ação antibacteriana, antifúngica e purificante.",
    composition: "100% Melaleuca alternifolia.",
    usage: "Aplicar diluído na pele ou usar em difusor (4 gotas).",
    care: "Não ingerir. Manter longe do alcance de crianças.",
  },
  {
    id: "3", slug: "oleo-essencial-alecrim", name: "Óleo Essencial de Alecrim",
    price: 69.9, image: ex3,
    category: "Energizante", rating: 4.7, reviews: 188, stock: 21, bestSeller: true,
    short: "Estimulante mental — foco, memória e disposição.",
    description: "Alecrim cineol orgânico, conhecido por estimular a concentração e a clareza mental.",
    composition: "100% Rosmarinus officinalis ct. cineol.",
    usage: "Difusor durante o estudo ou trabalho. 3 a 4 gotas.",
    care: "Evitar uso em gestantes e crianças menores de 6 anos.",
  },
  {
    id: "4", slug: "oleo-essencial-eucalipto", name: "Óleo Essencial de Eucalipto",
    price: 64.9, image:ex4,
    category: "Respiratório", rating: 4.8, reviews: 276, stock: 55, bestSeller: true,
    short: "Liberador das vias respiratórias e refrescante natural.",
    description: "Eucalyptus globulus extraído na Tasmânia. Excelente para vapores e ambientes.",
    composition: "100% Eucalyptus globulus.",
    usage: "Inalação: 2 gotas em água quente. Difusor: 5 gotas.",
    care: "Não aplicar puro na pele. Evitar em crianças menores de 10 anos.",
  },
  {
    id: "5", slug: "oleo-essencial-hortela", name: "Óleo Essencial de Hortelã-Pimenta",
    price: 74.9, oldPrice: 94.9, image: ex5,
    category: "Energizante", rating: 4.9, reviews: 203, stock: 18,
    short: "Refrescante, alivia tensões e dores de cabeça.",
    description: "Mentha piperita rica em mentol, ideal para alívio de tensões e estímulo mental.",
    composition: "100% Mentha piperita.",
    usage: "Diluir 1 gota em óleo vegetal e massagear as têmporas.",
    care: "Sensação intensa de frescor — usar com moderação.",
  },
  {
    id: "6", slug: "oleo-essencial-laranja-doce", name: "Óleo Essencial de Laranja Doce",
    price: 49.9, image: ex6,
    category: "Bem-estar", rating: 4.7, reviews: 412, stock: 80,
    short: "Aroma alegre que eleva o humor e harmoniza ambientes.",
    description: "Extraído por prensagem a frio das cascas. Suave, doce e energizante.",
    composition: "100% Citrus sinensis.",
    usage: "Difusor: 5 a 7 gotas. Banho aromático: 3 gotas.",
    care: "Fotossensibilizante — evitar exposição solar após aplicação tópica.",
  },
  {
    id: "7", slug: "oleo-essencial-bergamota", name: "Óleo Essencial de Bergamota",
    price: 99.9, image: ex7,
    category: "Relaxante", rating: 4.8, reviews: 156, stock: 14,
    short: "Cítrico equilibrante — reduz ansiedade e estresse.",
    description: "Bergamota italiana, com aroma cítrico floral. Auxilia no equilíbrio emocional.",
    composition: "100% Citrus bergamia.",
    usage: "Difusor: 4 gotas. Não aplicar antes da exposição solar.",
    care: "Altamente fotossensibilizante.",
  },
  {
    id: "8", slug: "oleo-essencial-camomila", name: "Óleo Essencial de Camomila Romana",
    price: 149.9, image:ex8,
    category: "Relaxante", rating: 5.0, reviews: 92, stock: 9,
    short: "Suave e calmante — ideal para peles sensíveis e crianças.",
    description: "Camomila romana premium. Conhecida por suas propriedades calmantes e anti-inflamatórias.",
    composition: "100% Anthemis nobilis.",
    usage: "Difusor: 2 a 3 gotas. Massagem: diluir 1% em óleo vegetal.",
    care: "Conservar em frasco âmbar bem fechado.",
  },
  {
    id: "9", slug: "oleo-essencial-limao-siciliano", name: "Óleo Essencial de Limão Siciliano",
    price: 54.9, image: ex9,
    category: "Purificante", rating: 4.6, reviews: 220, stock: 60,
    short: "Purifica o ar e clareia a mente.",
    description: "Limão siciliano prensado a frio. Cítrico vibrante e revitalizante.",
    composition: "100% Citrus limon.",
    usage: "Difusor: 5 gotas. Limpeza natural: adicionar em sprays caseiros.",
    care: "Fotossensibilizante.",
  },
  {
    id: "10", slug: "oleo-essencial-ylang-ylang", name: "Óleo Essencial de Ylang Ylang",
    price: 129.9, oldPrice: 159.9, image:ex10,
    category: "Bem-estar", rating: 4.9, reviews: 134, stock: 12,
    short: "Floral exótico — sensualidade e equilíbrio hormonal.",
    description: "Cananga odorata premium das Comores. Aroma floral profundo.",
    composition: "100% Cananga odorata.",
    usage: "Difusor: 2 gotas (aroma intenso).",
    care: "Usar com moderação.",
  },
  {
    id: "11", slug: "oleo-essencial-cedro", name: "Óleo Essencial de Cedro Atlas",
    price: 84.9, image: img("photo-1602928321679-560bb453f190"),
    category: "Respiratório", rating: 4.7, reviews: 87, stock: 25,
    short: "Amadeirado profundo — concentração e enraizamento.",
    description: "Cedro Atlas marroquino, com notas amadeiradas terapêuticas.",
    composition: "100% Cedrus atlantica.",
    usage: "Difusor: 4 gotas para foco ou meditação.",
    care: "Evitar uso em gestantes.",
  },
  {
    id: "12", slug: "oleo-essencial-gengibre", name: "Óleo Essencial de Gengibre",
    price: 94.9, image:ex11,
    category: "Energizante", rating: 4.8, reviews: 101, stock: 17,
    short: "Aquece, energiza e auxilia a digestão.",
    description: "Zingiber officinale destilado a vapor. Picante e revitalizante.",
    composition: "100% Zingiber officinale.",
    usage: "Massagem diluído a 2% em óleo vegetal.",
    care: "Pode irritar peles sensíveis.",
  },
];

export const CATEGORIES = ["Todos", "Relaxante", "Energizante", "Purificante", "Respiratório", "Bem-estar"];

export const getProduct = (slug: string) => PRODUCTS.find((p) => p.slug === slug);
