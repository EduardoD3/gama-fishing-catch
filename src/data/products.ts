import varaCarbonPro from "@/assets/products/vara-carbon-pro.jpg";
import molineteXtreme from "@/assets/products/molinete-xtreme.jpg";
import carretilhaTitan from "@/assets/products/carretilha-titan.jpg";
import iscaPremium from "@/assets/products/isca-premium.jpg";
import linhaMultifilamento from "@/assets/products/linha-multifilamento.jpg";
import alicateInox from "@/assets/products/alicate-inox.jpg";
import bolsaTatica from "@/assets/products/bolsa-tatica.jpg";
import copoTermico from "@/assets/products/copo-termico.jpg";
import kitPescaria from "@/assets/products/kit-pescaria.jpg";
import caixaIscas from "@/assets/products/caixa-iscas.jpg";

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
  "Varas",
  "Molinetes",
  "Carretilhas",
  "Iscas",
  "Linhas",
  "Acessórios",
  "Copos Térmicos",
  "Promoções",
];

export const products: Product[] = [
  {
    id: "1",
    name: "Vara Carbon Pro 1,80m",
    category: "Varas",
    price: 289.9,
    badge: "mais-vendido",
    image: varaCarbonPro,
    description: "Vara de carbono ultra leve com ação rápida",
    installment: "3x de R$ 96,63",
  },
  {
    id: "2",
    name: "Molinete Xtreme 3000",
    category: "Molinetes",
    price: 199.9,
    badge: "novo",
    image: molineteXtreme,
    description: "6 rolamentos, drag suave e corpo em alumínio",
    installment: "2x de R$ 99,95",
  },
  {
    id: "3",
    name: "Carretilha Titan Black",
    category: "Carretilhas",
    price: 459.9,
    image: carretilhaTitan,
    description: "Perfil baixo, freio magnético e 7+1 rolamentos",
    installment: "4x de R$ 114,98",
  },
  {
    id: "4",
    name: "Isca Artificial Premium 12cm",
    category: "Iscas",
    price: 34.9,
    badge: "promo",
    image: iscaPremium,
    description: "Articulada com nado realista e anzóis reforçados",
  },
  {
    id: "5",
    name: "Linha Multifilamento 0,28mm",
    category: "Linhas",
    price: 89.9,
    image: linhaMultifilamento,
    description: "100m de linha trançada com alta resistência",
  },
  {
    id: "6",
    name: "Alicate de Pesca Inox",
    category: "Acessórios",
    price: 79.9,
    badge: "mais-vendido",
    image: alicateInox,
    description: "Multifunção com corta-linha e destorcedor",
  },
  {
    id: "7",
    name: "Bolsa Tática para Pesca",
    category: "Acessórios",
    price: 149.9,
    image: bolsaTatica,
    description: "Impermeável com múltiplos compartimentos",
    installment: "2x de R$ 74,95",
  },
  {
    id: "8",
    name: "Copo Térmico 473ml Outdoor",
    category: "Copos Térmicos",
    price: 129.9,
    badge: "novo",
    image: copoTermico,
    description: "Mantém a temperatura por até 12h",
  },
  {
    id: "9",
    name: "Kit Pescaria Completo",
    category: "Promoções",
    price: 599.9,
    badge: "promo",
    image: kitPescaria,
    description: "Vara + molinete + linha + acessórios essenciais",
    installment: "6x de R$ 99,98",
  },
  {
    id: "10",
    name: "Caixa Organizadora de Iscas",
    category: "Acessórios",
    price: 49.9,
    image: caixaIscas,
    description: "12 divisórias ajustáveis, transparente e compacta",
  },
];
