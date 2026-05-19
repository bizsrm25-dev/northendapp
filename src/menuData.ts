import { Product } from './types';

export const CATEGORIES = ["All", "Popular", "Hot & Iced Drinks", "Refreshing Drinks", "Pastries", "Sandwiches", "Blended Frozen Drinks", "Egg Souffle Sandwiches", "Quick Bites", "THE Giver Coffee Boxes"];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Latte',
    description: 'Hazelnut flavored Latte',
    price: 320,
    image: 'https://images.deliveryhero.io/image/fd-bd/Products/8548733.jpg',
    category: 'Popular'
  },
  {
    id: '2',
    name: 'Iced Americano',
    description: '',
    price: 280,
    image: '/coffee_drink.png',
    category: 'Popular'
  },
  {
    id: '3',
    name: 'Cappuccino',
    description: 'Espresso, Steamed Milk, and thick micro foam',
    price: 320,
    image: 'https://images.deliveryhero.io/image/fd-bd/Products/8548737.jpg',
    category: 'Popular',
    sizes: [
      { name: 'Regular', detail: '180 ml', price: 320 },
      { name: 'Large', detail: '360 ml', price: 420 }
    ]
  },
  {
    id: '4',
    name: 'Roast Beef Sandwich on a Croissant',
    description: 'Smoked roast beef sandwich: hails from Boston, USA, with a nod to local heat. Served on a warm croissant with signature Boston sauce',
    price: 610,
    image: 'https://images.deliveryhero.io/image/fd-bd/products/1062713.jpg',
    category: 'Popular'
  },
  {
    id: '5',
    name: '4C Sandwich',
    description: 'Slices of chicken & cheese toasted in a croissant, served with tomato & chili chutney',
    price: 550,
    image: 'https://images.deliveryhero.io/image/fd-bd/Products/1058221.jpg',
    category: 'Popular'
  },
  {
    id: '6',
    name: 'Salted Caramel Latte',
    description: '',
    price: 450,
    image: '/coffee_drink.png',
    category: 'Popular'
  },
  {
    id: '7',
    name: 'Hot Chocolate',
    description: '',
    price: 430,
    image: '/coffee_drink.png',
    category: 'Hot & Iced Drinks'
  },
  {
    id: '8',
    name: 'Mocha',
    description: 'Rich chocolate sauce latte',
    price: 450,
    image: 'https://images.deliveryhero.io/image/fd-bd/Products/1058246.jpg',
    category: 'Hot & Iced Drinks'
  },
  {
    id: '9',
    name: 'Iced Mocha',
    description: 'Rich chocolate sauce latte',
    price: 480,
    image: 'https://images.deliveryhero.io/image/fd-bd/Products/1058246.jpg',
    category: 'Hot & Iced Drinks'
  },
  {
    id: '10',
    name: 'White Mocha',
    description: 'Rich chocolate sauce latte',
    price: 450,
    image: 'https://images.deliveryhero.io/image/fd-bd/Products/1058246.jpg',
    category: 'Hot & Iced Drinks'
  },
  {
    id: '11',
    name: 'Iced White Mocha',
    description: 'Rich chocolate sauce latte',
    price: 480,
    image: 'https://images.deliveryhero.io/image/fd-bd/Products/1058246.jpg',
    category: 'Hot & Iced Drinks'
  },
  {
    id: '12',
    name: 'Iced Chocolate',
    description: '',
    price: 460,
    image: '/coffee_drink.png',
    category: 'Hot & Iced Drinks'
  },
  {
    id: '13',
    name: 'Salted Caramel Latte',
    description: '',
    price: 450,
    image: '/coffee_drink.png',
    category: 'Hot & Iced Drinks'
  },
  {
    id: '14',
    name: 'Iced Salted Caramel Latte',
    description: '',
    price: 480,
    image: '/coffee_drink.png',
    category: 'Hot & Iced Drinks'
  },
  {
    id: '15',
    name: 'Iced Hazelnut Latte',
    description: 'Hazelnut flavored Latte',
    price: 430,
    image: 'https://images.deliveryhero.io/image/fd-bd/Products/8548733.jpg',
    category: 'Hot & Iced Drinks'
  },
  {
    id: '16',
    name: 'Double Espresso',
    description: '50 ml - Intense  coffee',
    price: 270,
    image: 'https://images.deliveryhero.io/image/fd-bd/Products/1058235.jpg',
    category: 'Hot & Iced Drinks'
  },
  {
    id: '17',
    name: 'Latte',
    description: 'Hazelnut flavored Latte',
    price: 320,
    image: 'https://images.deliveryhero.io/image/fd-bd/Products/8548733.jpg',
    category: 'Hot & Iced Drinks'
  },
  {
    id: '18',
    name: 'Hazelnut Latte',
    description: 'Hazelnut flavored Latte',
    price: 400,
    image: 'https://images.deliveryhero.io/image/fd-bd/Products/8548733.jpg',
    category: 'Hot & Iced Drinks'
  },
  {
    id: '19',
    name: 'Iced Latte',
    description: '',
    price: 350,
    image: '/coffee_drink.png',
    category: 'Hot & Iced Drinks'
  },
  {
    id: '20',
    name: 'Chai Latte',
    description: '',
    price: 400,
    image: '/coffee_drink.png',
    category: 'Hot & Iced Drinks'
  },
  {
    id: '21',
    name: 'Caramel Latte',
    description: '',
    price: 400,
    image: '/coffee_drink.png',
    category: 'Hot & Iced Drinks'
  },
  {
    id: '22',
    name: 'Iced Caramel Latte',
    description: '',
    price: 430,
    image: '/coffee_drink.png',
    category: 'Hot & Iced Drinks'
  },
  {
    id: '23',
    name: 'Cappuccino',
    description: 'Espresso, Steamed Milk, and thick micro foam',
    price: 320,
    image: 'https://images.deliveryhero.io/image/fd-bd/Products/8548737.jpg',
    category: 'Hot & Iced Drinks',
    sizes: [
      { name: 'Regular', detail: '180 ml', price: 320 },
      { name: 'Large', detail: '360 ml', price: 420 }
    ]
  },
  {
    id: '24',
    name: 'Americano',
    description: '#3 most liked dish',
    price: 250,
    image: '/coffee_drink.png',
    category: 'Hot & Iced Drinks'
  },
  {
    id: '25',
    name: 'Vanilla Latte',
    description: '',
    price: 400,
    image: '/coffee_drink.png',
    category: 'Hot & Iced Drinks'
  },
  {
    id: '26',
    name: 'Iced Vanilla Latte',
    description: '',
    price: 430,
    image: '/coffee_drink.png',
    category: 'Hot & Iced Drinks'
  },
  {
    id: '27',
    name: 'Iced Americano',
    description: '',
    price: 280,
    image: '/coffee_drink.png',
    category: 'Hot & Iced Drinks'
  },

  {
    id: '29',
    name: 'Flat White',
    description: '',
    price: 320,
    image: '/coffee_drink.png',
    category: 'Hot & Iced Drinks'
  },
  {
    id: '30',
    name: 'English Toffee Latte',
    description: '',
    price: 400,
    image: '/coffee_drink.png',
    category: 'Hot & Iced Drinks'
  },
  {
    id: '31',
    name: 'Iced English Toffee Latte',
    description: '',
    price: 430,
    image: '/coffee_drink.png',
    category: 'Hot & Iced Drinks'
  },
  {
    id: '32',
    name: 'Mango Peach Fizz',
    description: '',
    price: 300,
    image: '/refreshing_drink.png',
    category: 'Refreshing Drinks'
  },
  {
    id: '33',
    name: 'Kenya Summer',
    description: '',
    price: 380,
    image: '/refreshing_drink.png',
    category: 'Refreshing Drinks'
  },
  {
    id: '34',
    name: 'Lemon Raz',
    description: 'Iced drink with fresh lemon juice, raspberry flavor & sparkling water ',
    price: 320,
    image: 'https://images.deliveryhero.io/image/fd-bd/products/3247120.jpg',
    category: 'Refreshing Drinks'
  },
  {
    id: '35',
    name: 'Moroccan Mint',
    description: '',
    price: 320,
    image: '/refreshing_drink.png',
    category: 'Refreshing Drinks'
  },
  {
    id: '36',
    name: 'Peach Berry Fizz',
    description: 'Iced drink with peach flavor, strawberry flavor,  fresh lemon juice & sparkling water',
    price: 340,
    image: 'https://images.deliveryhero.io/image/fd-bd/products/8844085.jpg',
    category: 'Refreshing Drinks'
  },
  {
    id: '37',
    name: 'Fresh Lemon Fizz',
    description: '',
    price: 290,
    image: '/refreshing_drink.png',
    category: 'Refreshing Drinks'
  },
  {
    id: '38',
    name: 'Espressoda',
    description: '',
    price: 290,
    image: '/refreshing_drink.png',
    category: 'Refreshing Drinks'
  },
  {
    id: '39',
    name: 'Harvest Muffin',
    description: 'Packed with pumkin, carrot, green pumkin seeds and wlanuts',
    price: 150,
    image: 'https://images.deliveryhero.io/image/fd-bd/products/7399990.jpg',
    category: 'Pastries'
  },
  {
    id: '40',
    name: 'Brownie',
    description: 'A NORTH END classic: our dark & rich chocolate brownie',
    price: 140,
    image: 'https://images.deliveryhero.io/image/fd-bd/products/1058267.jpg',
    category: 'Pastries'
  },
  {
    id: '41',
    name: 'Biscotti',
    description: 'Traditional italian biscuit, twice-baked for a crunch that\'s best enjoyed dipped in coffee',
    price: 130,
    image: 'https://images.deliveryhero.io/image/fd-bd/Products/1058225.jpg',
    category: 'Pastries'
  },
  {
    id: '42',
    name: 'Brain Food',
    description: '',
    price: 270,
    image: '/pastry.png',
    category: 'Pastries'
  },
  {
    id: '43',
    name: 'Date Bar',
    description: 'Wholesome baked oat crumble & sweet dates combine for a very special bar',
    price: 220,
    image: 'https://images.deliveryhero.io/image/fd-bd/products/1058228.jpg',
    category: 'Pastries'
  },
  {
    id: '44',
    name: 'Chocolate Chip',
    description: 'The soft & chewy, classic american cookie with european-quality dark chocolate',
    price: 200,
    image: 'https://images.deliveryhero.io/image/fd-bd/Products/1058273.jpg',
    category: 'Pastries'
  },
  {
    id: '45',
    name: 'Triple Chocolate',
    description: 'Chewy chocolate cookie studded with both dark & white chocolates',
    price: 200,
    image: 'https://images.deliveryhero.io/image/fd-bd/Products/1058232.jpg',
    category: 'Pastries'
  },
  {
    id: '46',
    name: 'Cinnamon Roll',
    description: '',
    price: 270,
    image: '/pastry.png',
    category: 'Pastries'
  },
  {
    id: '47',
    name: 'Granola(with milk or yogurt)',
    description: '',
    price: 290,
    image: '/pastry.png',
    category: 'Pastries'
  },
  {
    id: '48',
    name: 'Shortbread',
    description: '',
    price: 220,
    image: '/pastry.png',
    category: 'Pastries'
  },
  {
    id: '49',
    name: 'Plain Bagel',
    description: 'New York-style chewy sourdough bread, boiled and baked to perfection',
    price: 170,
    image: 'https://images.deliveryhero.io/image/fd-bd/products/1058231.jpg',
    category: 'Pastries'
  },
  {
    id: '50',
    name: 'Sesame Bagel',
    description: 'Sesame seeds add their special flavor to our new york-style chewy sourdough bread',
    price: 170,
    image: 'https://images.deliveryhero.io/image/fd-bd/Products/1061639.jpg',
    category: 'Pastries'
  },
  {
    id: '51',
    name: 'Croissant',
    description: 'Smoked roast beef sandwich: hails from Boston, USA, with a nod to local heat. Served on a warm croissant with signature Boston sauce',
    price: 270,
    image: 'https://images.deliveryhero.io/image/fd-bd/products/1062713.jpg',
    category: 'Pastries'
  },
  {
    id: '52',
    name: 'Chili Cheese Croissant',
    description: 'Savoury cheese croissant with a hint of heat from roasted chilis',
    price: 250,
    image: 'https://images.deliveryhero.io/image/fd-bd/products/1058264.jpg',
    category: 'Pastries'
  },
  {
    id: '53',
    name: 'Cut Croissant',
    description: '',
    price: 270,
    image: '/pastry.png',
    category: 'Pastries'
  },
  {
    id: '54',
    name: 'English Muffin',
    description: '',
    price: 160,
    image: '/pastry.png',
    category: 'Pastries'
  },
  {
    id: '55',
    name: '4C Sandwich',
    description: 'Slices of chicken & cheese toasted in a croissant, served with tomato & chili chutney',
    price: 550,
    image: 'https://images.deliveryhero.io/image/fd-bd/Products/1058221.jpg',
    category: 'Sandwiches'
  },
  {
    id: '56',
    name: '4C Sandwich on a Bagel',
    description: 'Slices of chicken & cheese toasted in a bagel, served with tomato & chili chutney',
    price: 470,
    image: 'https://images.deliveryhero.io/image/fd-bd/Products/1062711.jpg',
    category: 'Sandwiches'
  },
  {
    id: '57',
    name: 'Roast Beef Sandwich',
    description: 'Smoked roast beef sandwich: hails from Boston, USA, with a nod to local heat. Served on a toasted bagel with signature Boston sauce',
    price: 560,
    image: 'https://images.deliveryhero.io/image/fd-bd/products/1058222.jpg',
    category: 'Sandwiches'
  },
  {
    id: '58',
    name: 'Roast Beef Sandwich on a Croissant',
    description: 'Smoked roast beef sandwich: hails from Boston, USA, with a nod to local heat. Served on a warm croissant with signature Boston sauce',
    price: 610,
    image: 'https://images.deliveryhero.io/image/fd-bd/products/1062713.jpg',
    category: 'Sandwiches'
  },
  {
    id: '59',
    name: 'Chili Milli',
    description: 'The goodness of cheese, onion, chicken & chili toasted on a bagel',
    price: 310,
    image: 'https://images.deliveryhero.io/image/fd-bd/Products/3994899.jpg',
    category: 'Sandwiches'
  },
  {
    id: '60',
    name: 'Double Chili Milli',
    description: 'The goodness of cheese, onion, chicken & chili toasted on a bagel',
    price: 470,
    image: 'https://images.deliveryhero.io/image/fd-bd/Products/3994899.jpg',
    category: 'Sandwiches'
  },
  {
    id: '61',
    name: 'Pulled Beef on a Bagel',
    description: 'Slow-cooked pulled beef mixed with our signature boston sauce, packed into a toasted bagel, served with extra sauce on the side',
    price: 510,
    image: 'https://images.deliveryhero.io/image/fd-bd/products/8961783.jpg',
    category: 'Sandwiches'
  },
  {
    id: '62',
    name: 'Pulled Beef on an English Muffin',
    description: '',
    price: 450,
    image: '/sandwich.png',
    category: 'Sandwiches'
  },
  {
    id: '63',
    name: 'Pulled Beef on a Croissant',
    description: '',
    price: 590,
    image: '/sandwich.png',
    category: 'Sandwiches'
  },
  {
    id: '64',
    name: 'Pulled Beef on a Chili Cheese Croissant',
    description: 'Savoury cheese croissant with a hint of heat from roasted chilis',
    price: 580,
    image: 'https://images.deliveryhero.io/image/fd-bd/products/1058264.jpg',
    category: 'Sandwiches'
  },
  {
    id: '65',
    name: 'Mango Frosts',
    description: '',
    price: 500,
    image: '/coffee_drink.png',
    category: 'Blended Frozen Drinks'
  },
  {
    id: '66',
    name: 'Mocha Freddo',
    description: 'Rich chocolate sauce latte',
    price: 500,
    image: 'https://images.deliveryhero.io/image/fd-bd/Products/1058246.jpg',
    category: 'Blended Frozen Drinks'
  },
  {
    id: '67',
    name: 'Chocolate Cream Freddo',
    description: '',
    price: 500,
    image: '/coffee_drink.png',
    category: 'Blended Frozen Drinks'
  },
  {
    id: '68',
    name: 'Raspberry Mocha Freddo',
    description: 'Rich chocolate sauce latte',
    price: 530,
    image: 'https://images.deliveryhero.io/image/fd-bd/Products/1058246.jpg',
    category: 'Blended Frozen Drinks'
  },
  {
    id: '69',
    name: 'Brownie Mocha Freddo',
    description: 'A NORTH END classic: our dark & rich chocolate brownie',
    price: 640,
    image: 'https://images.deliveryhero.io/image/fd-bd/products/1058267.jpg',
    category: 'Blended Frozen Drinks'
  },
  {
    id: '70',
    name: 'White Mocha Freddo',
    description: 'Rich chocolate sauce latte',
    price: 500,
    image: 'https://images.deliveryhero.io/image/fd-bd/Products/1058246.jpg',
    category: 'Blended Frozen Drinks'
  },
  {
    id: '71',
    name: 'White Chocolate Cream Freddo',
    description: '',
    price: 500,
    image: '/coffee_drink.png',
    category: 'Blended Frozen Drinks'
  },
  {
    id: '72',
    name: 'Salted Caramel Cream Freddo',
    description: '',
    price: 500,
    image: '/coffee_drink.png',
    category: 'Blended Frozen Drinks'
  },
  {
    id: '73',
    name: 'Salted Caramel Coffee Freddo',
    description: '',
    price: 500,
    image: '/coffee_drink.png',
    category: 'Blended Frozen Drinks'
  },
  {
    id: '74',
    name: 'Strawberry Cream Freddo',
    description: '',
    price: 450,
    image: '/coffee_drink.png',
    category: 'Blended Frozen Drinks'
  },
  {
    id: '75',
    name: 'Hazelnut Cream Freddo',
    description: '',
    price: 450,
    image: '/coffee_drink.png',
    category: 'Blended Frozen Drinks'
  },
  {
    id: '76',
    name: 'Vanilla Cream Freddo',
    description: '',
    price: 450,
    image: '/coffee_drink.png',
    category: 'Blended Frozen Drinks'
  },
  {
    id: '77',
    name: 'Café Freddo',
    description: '',
    price: 370,
    image: '/coffee_drink.png',
    category: 'Blended Frozen Drinks'
  },
  {
    id: '78',
    name: 'Vanilla Coffee Freddo',
    description: '',
    price: 450,
    image: '/coffee_drink.png',
    category: 'Blended Frozen Drinks'
  },
  {
    id: '79',
    name: 'Hazelnut Coffee Freddo',
    description: '',
    price: 450,
    image: '/coffee_drink.png',
    category: 'Blended Frozen Drinks'
  },
  {
    id: '80',
    name: 'Chai Cream Freddo',
    description: '',
    price: 450,
    image: '/coffee_drink.png',
    category: 'Blended Frozen Drinks'
  },
  {
    id: '81',
    name: 'Chai Coffee Freddo',
    description: '',
    price: 450,
    image: '/coffee_drink.png',
    category: 'Blended Frozen Drinks'
  },
  {
    id: '82',
    name: 'English Toffee Caffé Freddo',
    description: '',
    price: 450,
    image: '/coffee_drink.png',
    category: 'Blended Frozen Drinks'
  },
  {
    id: '83',
    name: 'English Toffee Cream Freddo',
    description: '',
    price: 450,
    image: '/coffee_drink.png',
    category: 'Blended Frozen Drinks'
  },
  {
    id: '84',
    name: 'The Newbury',
    description: 'Prepared with chicken, roasted capsicum, egg souffle & cheese on a toasted croissant ',
    price: 670,
    image: 'https://images.deliveryhero.io/image/fd-bd/Products/3957171.jpg',
    category: 'Egg Souffle Sandwiches'
  },
  {
    id: '85',
    name: 'The Copley',
    description: '',
    price: 450,
    image: '/sandwich.png',
    category: 'Egg Souffle Sandwiches'
  },
  {
    id: '86',
    name: 'The Hancock',
    description: '',
    price: 570,
    image: '/sandwich.png',
    category: 'Egg Souffle Sandwiches'
  },
  {
    id: '87',
    name: 'The Fenway',
    description: '',
    price: 670,
    image: '/sandwich.png',
    category: 'Egg Souffle Sandwiches'
  },
  {
    id: '88',
    name: 'The Quincy',
    description: 'Egg soufflé & cheese on a toasted english muffin',
    price: 370,
    image: 'https://images.deliveryhero.io/image/fd-bd/Products/8961787.jpg',
    category: 'Egg Souffle Sandwiches'
  },
  {
    id: '89',
    name: 'The Picolini',
    description: '',
    price: 160,
    image: '/quick_bite.png',
    category: 'Quick Bites'
  },
  {
    id: '90',
    name: 'Picolini Gift Box',
    description: '',
    price: 1280,
    image: '/quick_bite.png',
    category: 'Quick Bites'
  },
  {
    id: '91',
    name: 'Americano Coffee Box',
    description: '',
    price: 2850,
    image: '/coffee_drink.png',
    category: 'THE Giver Coffee Boxes',
    sizes: [
      { name: '12 Box', detail: '12 Americanos', price: 1710 },
      { name: '20 Box', detail: '20 Americanos', price: 2850 }
    ]
  },
  {
    id: '92',
    name: 'Latte Coffee Box',
    description: '',
    price: 3050,
    image: '/coffee_drink.png',
    category: 'THE Giver Coffee Boxes',
    sizes: [
      { name: '12 Box', detail: '12 Lattes', price: 3050 },
      { name: '20 Box', detail: '20 Lattes', price: 4880 }
    ]
  },
  {
    id: '93',
    name: 'Hazelnut Coffee Box',
    description: 'Hazelnut flavored Latte',
    price: 3650,
    image: 'https://images.deliveryhero.io/image/fd-bd/Products/8548733.jpg',
    category: 'THE Giver Coffee Boxes',
    sizes: [
      { name: '12 Box', detail: '12 Hazelnut Lattes', price: 3650 },
      { name: '20 Box', detail: '20 Hazelnut Lattes', price: 5840 }
    ]
  }
];
