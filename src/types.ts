export type Screen = 'onboarding' | 'home' | 'menu' | 'cart' | 'profile' | 'detail';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating?: number;
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize?: string;
  selectedMilk?: string;
  extras?: string[];
}

export * from './menuData';
