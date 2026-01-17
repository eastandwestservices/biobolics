export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
  price?: number; // optional for now
  slug: string;
}

const steviaProducts: Product[] = [
  {
    id: "1",
    name: "Rite Stevia Powder",
    description: "Pure stevia powder for sweetening naturally.",
    image: "/brands/stevia/products/stevia-powder.jpg",
    category: "Powder",
    slug: "rite-stevia-powder",
  },
  {
    id: "2",
    name: "Rite Stevia Liquid",
    description: "Liquid stevia drops for beverages and cooking.",
    image: "/brands/stevia/products/stevia-liquid.jpg",
    category: "Liquid",
    slug: "rite-stevia-liquid",
  },
  // ... add remaining 6 products similarly
];

export default steviaProducts;
