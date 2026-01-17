import { vitaminsProducts } from '../data/products/vitaminsProducts';
import steviaProducts from './data/steviaProducts';

export interface Brand {
  slug: string;
  title: string;
  heroTitle?: string;
  tagline?: string;
  description: string;
  heroImage: string;
  products: any[];
}

const brands: Brand[] = [
  {
    slug: 'sports',
    title: 'Biobolics Sports',
    heroTitle: 'Biobolics Sports',
    tagline: 'Performance Series',
    description: 'Performance supplements for athletes.',
    heroImage: '/brands/sports-back.webp',
    products: [],
  },
  {
    slug: 'vitamins',
    title: 'Biobolics Vitamins',
    heroTitle: 'Vitamins Collection',
    tagline: 'Premium Quality',
    description: 'Discover our complete range of scientifically formulated vitamins designed to fuel your potential and support your daily health.',
    heroImage: '/brands/vitamins.jpg',
    products: vitaminsProducts,
  },
  {
    slug: 'gummies',
    title: 'Biobolics Gummies',
    heroTitle: 'Biobolics Gummies',
    tagline: 'Fun & Functional',
    description: 'Tasty gummies packed with nutrients.',
    heroImage: '/brands/gummies.jpg',
    products: [],
  },
  {
    slug: 'stevia',
    title: 'Rite Stevia',
    heroTitle: 'Rite Stevia',
    tagline: 'Natural Sweetness',
    description: 'Natural sweetener for a healthy lifestyle.',
    heroImage: '/brands/stevia-back.webp',
    products: steviaProducts,
  },
];

export default brands;
