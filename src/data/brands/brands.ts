export type Brand = {
  name: string;
  slug: string;
  images: number[];
};

export const brands: Brand[] = [
  {
    name: "Biobolics Sports",
    slug: "sports",
    images: [1, 2, 3, 4],
  },
  {
    name: "Biobolics Vitamins",
    slug: "vitamins",
    images: [1, 2, 3, 4],
  },
  {
    name: "Biobolics Gummies",
    slug: "gummies",
    images: [1, 2, 3, 4],
  },
  {
    name: "Rite Stevia",
    slug: "stevia",
    images: [1, 2, 3, 4],
  },
];
