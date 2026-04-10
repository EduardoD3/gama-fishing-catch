import stanleyAzul from "@/assets/products/stanley-garrafa-azul.jpg";
import shimanoStradic from "@/assets/products/shimano-stradic.jpg";
import rapalaAlicate from "@/assets/products/rapala-alicate.jpg";
import stanleyAzul2 from "@/assets/products/stanley-garrafa-azul2.jpg";
import shimanoStradic2 from "@/assets/products/shimano-stradic2.jpg";
import marineAzura from "@/assets/products/marine-azura.jpg";
import stanleyVerde from "@/assets/products/stanley-garrafa-verde.jpg";
import iscaPremium from "@/assets/products/isca-premium.jpg";
import kitPescaria from "@/assets/products/kit-pescaria.jpg";
import caixaIscas from "@/assets/products/caixa-iscas.jpg";
import bolsaTatica from "@/assets/products/bolsa-tatica.jpg";
import linhaMultifilamento from "@/assets/products/linha-multifilamento.jpg";
import alicateInox from "@/assets/products/alicate-inox.jpg";
import copoTermico from "@/assets/products/copo-termico.jpg";

export type Badge = "promo" | "novo" | "mais-vendido" | "oferta";

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  badge?: Badge;
  image: string;
  description: string;
  installment?: string;
}

export const categories = [
  "Todos",
  "Iscas",
  "Molinetes",
  "Acessórios",
  "Copos Térmicos",
  "Kits",
  "Linhas",
  "Promoções",
];

export const products: Product[] = [
  {
    id: "1",
    name: "Isca Dançarina CMC 110mm",
    category: "Iscas",
    price: 93.0,
    badge: "novo",
    image: iscaPremium,
    description: "Isca artesanal CMC com nado realista e anzóis reforçados. Perfeita para tucunaré e dourado.",
    installment: "12x de R$ 9,42",
  },
  {
    id: "2",
    name: "Isca Hunter CMC 140mm",
    category: "Iscas",
    price: 83.0,
    badge: "novo",
    image: caixaIscas,
    description: "Isca de meia-água artesanal com ação vibrante. Ideal para peixes de médio e grande porte.",
    installment: "12x de R$ 8,41",
  },
  {
    id: "3",
    name: "Isca Supera CMC",
    category: "Iscas",
    price: 69.93,
    badge: "promo",
    image: iscaPremium,
    description: "Isca artesanal premium com acabamento impecável. De R$ 77,70 por R$ 69,93.",
    installment: "12x de R$ 7,09",
  },
  {
    id: "4",
    name: "Isca Popper Tracker CMC",
    category: "Iscas",
    price: 55.71,
    badge: "promo",
    image: caixaIscas,
    description: "Popper de superfície artesanal CMC. Explosões garantidas! De R$ 61,90 por R$ 55,71.",
    installment: "12x de R$ 5,64",
  },
  {
    id: "5",
    name: "Molinete Shimano Stradic C3000XG",
    category: "Molinetes",
    price: 1899.9,
    badge: "mais-vendido",
    image: shimanoStradic,
    description: "Molinete top de linha Shimano com X-Protect, MicroModule II e corpo em alumínio.",
    installment: "12x de R$ 158,33",
  },
  {
    id: "6",
    name: "Molinete Marine Azura 2000",
    category: "Molinetes",
    price: 215.0,
    badge: "promo",
    image: marineAzura,
    description: "Molinete Marine com design robusto, ideal para água doce. Corpo em grafite reforçado.",
    installment: "3x de R$ 71,67",
  },
  {
    id: "7",
    name: "Alicate Rapala Mag Spring 8\"",
    category: "Acessórios",
    price: 196.3,
    badge: "mais-vendido",
    image: rapalaAlicate,
    description: "Alicate magnético Rapala Custom Design com corta-linha e pontas serrilhadas em aço inox.",
    installment: "3x de R$ 65,43",
  },
  {
    id: "8",
    name: "Garrafa Stanley Classic 1L Azul",
    category: "Copos Térmicos",
    price: 349.9,
    badge: "mais-vendido",
    image: stanleyAzul,
    description: "Garrafa térmica Stanley Classic com isolamento a vácuo. Mantém temperatura por até 24h.",
    installment: "6x de R$ 58,32",
  },
  {
    id: "9",
    name: "Garrafa Stanley Classic 1L Verde",
    category: "Copos Térmicos",
    price: 349.9,
    badge: "promo",
    image: stanleyVerde,
    description: "A clássica Stanley verde militar. Resistente e perfeita para aventuras ao ar livre.",
    installment: "6x de R$ 58,32",
  },
  {
    id: "10",
    name: "Growler Stanley 1,9L Azul",
    category: "Copos Térmicos",
    price: 489.9,
    badge: "novo",
    image: stanleyAzul2,
    description: "Growler Stanley com tampa rosqueável e alça ergonômica. Ideal para cerveja gelada na pescaria.",
    installment: "6x de R$ 81,65",
  },
  {
    id: "11",
    name: "Kit Traíra CMC",
    category: "Kits",
    price: 179.9,
    badge: "oferta",
    image: kitPescaria,
    description: "Kit completo com iscas artesanais CMC selecionadas especialmente para traíra.",
    installment: "12x de R$ 18,24",
  },
  {
    id: "12",
    name: "Kit Gold CMC by Anderson Guedes",
    category: "Kits",
    price: 289.9,
    badge: "mais-vendido",
    image: kitPescaria,
    description: "5 iscas premium projetadas com precisão para diferentes condições de pesca e peixes.",
    installment: "12x de R$ 29,39",
  },
  {
    id: "13",
    name: "Bolsa Tática para Pesca",
    category: "Acessórios",
    price: 149.9,
    badge: "promo",
    image: bolsaTatica,
    description: "Impermeável com múltiplos compartimentos. Organização total na pescaria.",
    installment: "2x de R$ 74,95",
  },
  {
    id: "14",
    name: "Linha Multifilamento 0,28mm",
    category: "Linhas",
    price: 89.9,
    badge: "novo",
    image: linhaMultifilamento,
    description: "100m de linha trançada com alta resistência à abrasão e zero memória.",
  },
  {
    id: "15",
    name: "Alicate de Pesca Inox",
    category: "Acessórios",
    price: 79.9,
    badge: "mais-vendido",
    image: alicateInox,
    description: "Multifunção com corta-linha, destorcedor e clip de segurança.",
  },
  {
    id: "16",
    name: "Copo Térmico 473ml Outdoor",
    category: "Copos Térmicos",
    price: 129.9,
    badge: "oferta",
    image: copoTermico,
    description: "Mantém a temperatura por até 12h. Perfeito para o barco.",
  },
];
