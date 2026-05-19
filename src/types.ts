export type Screen = 'onboarding' | 'home' | 'menu' | 'cart' | 'profile' | 'detail';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number; // Base price or default price
  image: string;
  category: string;
  rating?: number;
  sizes?: { name: string; price: number; detail?: string }[];
}

export interface CartItem extends Product {
  cartItemId: string;
  quantity: number;
  selectedSize?: string;
  selectedMilk?: string;
  extras?: string[];
}

export * from './menuData';
