export type Screen = 'home' | 'menu' | 'cart' | 'profile' | 'detail';

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

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Iced Caramel Cloud',
    description: 'Cold brew base topped with a velvety layer of sweet caramel cold foam.',
    price: 5.50,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAXPyXSFzCKTp7eJ-jEfH_FiEg66h1Yk_hWLGWZyH_wN_kc4H3GyPMqg7w4yg-cYAjvkiduAmGrOPlHPZaS-dWnG6GFcwZgAgjWZRBGtMI8nXtRGhL2l37Or2y-YZxkg7d7FzGmRUrx9MRm3C2Sj6yt7po59MIfG_EcKF2M2dcvcozz0KByZgt2uO-4OlF-9Gtoyy6yIUHlWND2x5-5gHYPx_f1ktbHMh7pBBnf6yMDeLXhWPEbydivk92cAd2e_B75JJnpi3BPtAY',
    category: 'Cold Brew',
    rating: 4.9
  },
  {
    id: '2',
    name: 'Nitro Cold Brew',
    description: 'Slow-steeped, infused with nitrogen for a naturally sweet, creamy texture.',
    price: 4.80,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAti8XXEDgKLImqDEzvaZrsz3n1jr_doTKu_HHU4vOSFVfzLVB1L9dasZdm0wmPmB1D8clQYPBQ1L0_wOnAbS2IMoLSTSHAeVeMy0LWPzj6pUmzfmvkR8GfMqGwjZ69oiXb7lG9ACH0X67Jo7L18XCDrXVPbowZmDSjhJT2z9JFpHRyf_XQDo6-6OLbOCZnABuJKuxV2wIIbLaVKTnmlLH3_1z2R16JsiA2zGJn7diClVzwV15v6E3G9SSTebFdzG0-b1WDpfzsi8I',
    category: 'Cold Brew'
  },
  {
    id: '3',
    name: 'Classic Cappuccino',
    description: 'Equal parts espresso, steamed milk, and a deep layer of microfoam.',
    price: 4.25,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCTADXqoAsOUZwJRa-U1s8JNihK-x7AyQmBAngO2OUe2gXwnx1_gW-uAfYyOuhXlcDk_pfp8xlGo3nLBYnxoeKgGmPXl54Iutfi6WKE16ucn9knyLrf6Jj23BhorgIHEfIsX5wwnpl6QRO5UT9bUhxiyp0HhZmqjKKkKBnDgMJ-X9DlGdXdz8NsY3-4QYz5Ain-GwF_iZXSnegF_NdTvtRp4PjC2XROEYRWwrMKtskXMJfHFoOz0VJ0RaVpUnfIcTnNRIvXWkDmYjk',
    category: 'Espresso'
  },
  {
    id: '4',
    name: 'Maple Oat Latte',
    description: 'Warm & comforting latte with a maple sweetness and creamy oat milk.',
    price: 5.75,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDV5m3fNHT7eVBEpZs3YyOQNVtFiJe92zEA8tnq4dgjJPc6aP73YnCgcQsx_cWvGCsNfCl2v2LD1KJqYfMK8mYx9UJsZQ_8M224dimzy3nMZGwxoiLDPEqcRYdDRestrZQ2tgGVjRDl2-pFLos3HcMva864ym9cyoneUKRx2pAOX4RxXnnYynO13mw-3Cw8ApIJop20x3wcu5LxLohWI28HJvywRgbS10adwWaq6axzNu3py0LwyRn63vP4f33O7nNVmaVmVOjjovA',
    category: 'Espresso'
  }
];

export const CATEGORIES = ['All', 'Espresso', 'Brewed', 'Cold Brew', 'Pastries'];
