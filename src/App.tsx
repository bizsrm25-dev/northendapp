import React, { useState, useMemo, ReactNode } from 'react';
import { 
  Menu, 
  ShoppingBag, 
  Home, 
  Coffee, 
  Heart, 
  User, 
  ArrowLeft,
  Plus,
  Minus,
  X,
  History,
  ChevronRight,
  LogOut,
  Star,
  Settings,
  Bell,
  Shield,
  CreditCard,
  MapPin,
  Receipt
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Screen, Product, CartItem, PRODUCTS, CATEGORIES } from './types';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('onboarding');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const openDetail = (product: Product) => {
    setSelectedProduct(product);
    setCurrentScreen('detail');
  };

  const addToCart = (product: Product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const cartTotal = useMemo(() => cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0), [cartItems]);
  const cartCount = useMemo(() => cartItems.reduce((acc, item) => acc + item.quantity, 0), [cartItems]);

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Background */}
      <div className="fixed inset-0 z-[-1]">
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuASopVjOS2h4lNHYQIvV1HV5GB89-WeW0Qz6eY0adYCeecXNSmfkh7UawUZDIVAojAqfYhQopDVE7AanZdTyUde3eTF9GINpoh_108jqzY_Qm1tuUebCPfLyaC1OXAdBC55sviwtVH-5rqB2a1JQYOjf0TF-ffeo5ImrzKt_jbarFMmPDKeNgmCrUjkuy2kiTA8e3KuZdmPrOSAVgwQBLa41P7Tr4odd-4GlOVXiYkdBwZ5JKSyfNWfvL7CX4eBJfA1IFJRC2MEdnw" 
          alt="Coffee shop" 
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background/95 backdrop-blur-[2px]" />
      </div>

      {/* Header */}
      {currentScreen !== 'onboarding' && (
        <header className="fixed top-4 left-4 right-4 z-50">
          <div className="max-w-4xl mx-auto glass rounded-xl h-16 px-6 flex items-center justify-between">
            <motion.button 
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 rounded-full hover:bg-white/20 flex items-center justify-center transition-colors text-primary"
            >
              <Menu size={24} />
            </motion.button>
            
            <div 
              className="flex-grow flex justify-center cursor-pointer px-4"
              onClick={() => setCurrentScreen('home')}
            >
              <img 
                src="/logo.png" 
                alt="North End Coffee Roasters" 
                className="h-8 md:h-10 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <motion.button 
              whileTap={{ scale: 0.9 }}
              onClick={() => setCurrentScreen('cart')}
              className="w-10 h-10 rounded-full hover:bg-white/20 flex items-center justify-center transition-colors relative"
            >
              <ShoppingBag size={24} />
              {cartCount > 0 && (
                <span className="absolute top-2 right-2 w-2 h-2 bg-secondary rounded-full border border-white shadow-sm" />
              )}
            </motion.button>
          </div>
        </header>
      )}

      {/* Main Content */}
      <main className={`max-w-4xl mx-auto relative z-10 min-h-screen ${currentScreen === 'onboarding' ? '' : 'pt-24 pb-32 px-4'}`}>
        <AnimatePresence mode="wait">
          {currentScreen === 'onboarding' && (
            <OnboardingScreen key="onboarding" onStart={() => setCurrentScreen('home')} />
          )}

          {currentScreen === 'home' && (
            <HomeScreen key="home" openDetail={openDetail} />
          )}

          {currentScreen === 'menu' && (
            <MenuScreen 
              key="menu" 
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              openDetail={openDetail}
              addToCart={addToCart}
            />
          )}

          {currentScreen === 'cart' && (
            <CartScreen 
              key="cart" 
              cartItems={cartItems}
              updateQuantity={updateQuantity}
              removeItem={removeFromCart}
              total={cartTotal}
              onBack={() => setCurrentScreen('menu')}
            />
          )}

          {currentScreen === 'profile' && (
            <ProfileScreen key="profile" />
          )}

          {currentScreen === 'detail' && selectedProduct && (
            <DetailScreen 
              key="detail" 
              product={selectedProduct}
              onBack={() => setCurrentScreen('menu')}
              addToCart={(p) => { addToCart(p); setCurrentScreen('cart'); }}
            />
          )}
        </AnimatePresence>
      </main>

      {/* Bottom Nav */}
      {currentScreen !== 'onboarding' && (
        <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-md z-50">
          <div className="glass rounded-xl h-20 flex justify-around items-center px-4">
            <NavItem 
              active={currentScreen === 'home'} 
              onClick={() => setCurrentScreen('home')} 
              icon={<Home size={24} />} 
            />
            <NavItem 
              active={currentScreen === 'menu' || currentScreen === 'detail'} 
              onClick={() => setCurrentScreen('menu')} 
              icon={<Coffee size={24} />} 
            />
            <NavItem 
              active={false} 
              onClick={() => {}} 
              icon={<Heart size={24} />} 
            />
            <NavItem 
              active={currentScreen === 'profile'} 
              onClick={() => setCurrentScreen('profile')} 
              icon={<User size={24} />} 
            />
          </div>
        </nav>
      )}
    </div>
  );
}

function NavItem({ active, onClick, icon }: { active: boolean; onClick: () => void; icon: ReactNode }) {
  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      className={`p-4 rounded-full transition-all duration-300 ${
        active 
          ? 'bg-secondary-container text-on-secondary-container shadow-lg' 
          : 'text-primary/60 hover:text-primary'
      }`}
    >
      {icon}
    </motion.button>
  );
}

// --- Screen Components ---

interface ScreenProps {
  key?: string;
  openDetail?: (p: Product) => void;
  product?: Product;
}

function OnboardingScreen({ key, onStart }: { key?: string; onStart: () => void }) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen w-full flex flex-col justify-end p-6 pb-12"
    >
      <div className="flex-grow flex flex-col items-center justify-center pt-20">
        <img 
          src="/logo.png" 
          alt="North End Coffee Roasters" 
          className="w-56 h-auto object-contain mb-8 drop-shadow-2xl"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="glass rounded-xl p-8 space-y-10 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        
        <div className="space-y-4 relative z-10">
          <h1 className="font-headline text-5xl font-bold text-primary leading-tight tracking-tight">
            Crafted for the<br/>Connoisseur
          </h1>
          <p className="text-primary/70 font-medium text-lg leading-relaxed max-w-[90%]">
            Experience premium roasted coffee and artisanal delights delivered to your door.
          </p>
        </div>

        <div className="space-y-4 relative z-10">
          <motion.button 
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={onStart}
            className="w-full py-4 bg-primary text-white rounded-lg font-bold text-lg shadow-xl hover:shadow-[0_0_20px_var(--color-gold)] transition-all flex items-center justify-center gap-2 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
            Create Account
          </motion.button>

          <motion.button 
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={onStart}
            className="w-full py-4 glass text-primary font-bold text-lg rounded-lg border-gold hover:bg-white/40 transition-all"
          >
            Sign In
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

function HomeScreen({ openDetail }: { key?: string; openDetail: (p: Product) => void }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      {/* Rewards Widget */}
      <div className="glass rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 rounded-full overflow-hidden shadow-lg border border-gold/20 bg-white flex-shrink-0">
            <img 
              src="/logo.png" 
              alt="North End Logo" 
              className="w-full h-full object-cover px-2 py-2"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-primary/60 mb-1">Rewards Balance</h2>
            <p className="font-headline text-3xl font-bold flex items-baseline gap-2">
              150 <span className="text-secondary text-base">Coins</span>
            </p>
          </div>
        </div>
        <button className="w-full md:w-auto px-8 py-3 rounded-lg border border-gold text-primary font-bold hover:bg-white/20 transition-all">
          Redeem Rewards
        </button>
      </div>

      {/* Hero Rituals */}
      <div 
        className="glass rounded-xl p-8 min-h-[300px] flex flex-col justify-end relative overflow-hidden group cursor-pointer"
        onClick={() => openDetail(PRODUCTS[0])}
      >
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1000" 
            className="w-full h-full object-cover opacity-40 mix-blend-multiply group-hover:scale-105 transition-transform duration-700" 
            referrerPolicy="no-referrer"
            alt="Morning Rituals"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
        </div>
        <div className="relative z-10 space-y-4">
          <span className="inline-block px-3 py-1 bg-white/80 rounded-full text-xs font-bold text-secondary uppercase border border-white/60">
            Morning Rituals
          </span>
          <h2 className="font-headline text-4xl font-bold text-primary leading-tight">
            Your Perfect<br/>Start
          </h2>
          <p className="text-primary/80 max-w-sm font-medium">
            Curated single-origin pour-overs to elevate your morning.
          </p>
          <button className="px-8 py-3 bg-primary text-white rounded-lg font-bold shadow-xl hover:shadow-[0_0_20px_var(--color-gold)] transition-all">
            Order Now
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Seasonal Card */}
        <div 
          className="glass rounded-xl p-6 flex items-center justify-between gap-4 group cursor-pointer hover:bg-white/30 transition-all"
          onClick={() => openDetail(PRODUCTS[2])}
        >
          <div className="space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-widest text-secondary">Seasonal</span>
            <h3 className="font-headline text-xl font-bold line-clamp-1">{PRODUCTS[2]?.name}</h3>
            <p className="text-sm text-primary/60 font-medium line-clamp-1">{PRODUCTS[2]?.description || 'Warm & comforting'}</p>
          </div>
          <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden border-2 border-white shadow-md">
            <img src={PRODUCTS[2]?.image} className="w-full h-full object-cover" referrerPolicy="no-referrer" alt={PRODUCTS[2]?.name} />
          </div>
        </div>

        {/* Recent Order */}
        <div className="glass rounded-xl p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-primary/80">Recent Order</h3>
            <History size={20} className="text-secondary" />
          </div>
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden border-2 border-white shadow-md">
              <img src={PRODUCTS[1].image} className="w-full h-full object-cover" referrerPolicy="no-referrer" alt="Recent Order" />
            </div>
            <div>
              <p className="font-bold text-primary">Cortado</p>
              <p className="text-xs font-medium text-primary/60 tracking-wide">Oat milk, Extra hot</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function MenuScreen({ 
  selectedCategory, 
  setSelectedCategory, 
  openDetail, 
  addToCart 
}: { 
  key?: string;
  selectedCategory: string; 
  setSelectedCategory: (c: string) => void;
  openDetail: (p: Product) => void;
  addToCart: (p: Product) => void;
}) {
  const filteredProducts = PRODUCTS.filter(p => selectedCategory === 'All' || p.category === selectedCategory);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-8"
    >
      <div className="text-center space-y-2">
        <h2 className="font-headline text-5xl font-bold tracking-tight text-glow">Our Menu</h2>
        <p className="text-primary/60 font-medium italic">Crafted with precision, poured with passion.</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2">
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-6 py-3 rounded-full whitespace-nowrap transition-all font-bold ${
              selectedCategory === cat 
                ? 'bg-secondary-container text-on-secondary-container shadow-md' 
                : 'glass hover:bg-white/40'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Menu Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProducts.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="glass rounded-xl p-6 group hover:-translate-y-1 transition-all"
          >
            <div 
              className="aspect-square rounded-lg overflow-hidden mb-6 bg-white/20 border border-white/40 relative cursor-pointer"
              onClick={() => openDetail(p)}
            >
              <img src={p.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" alt={p.name} />
              <button className="absolute top-4 right-4 w-10 h-10 rounded-lg bg-white/80 flex items-center justify-center hover:bg-white transition-colors">
                <Heart size={20} className="text-primary" />
              </button>
            </div>
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-headline text-xl font-bold">{p.name}</h3>
              <span className="font-bold text-secondary text-lg">${p.price.toFixed(2)}</span>
            </div>
            <p className="text-sm text-primary/60 font-medium mb-6 line-clamp-2">{p.description}</p>
            <button 
              onClick={() => addToCart(p)}
              className="w-full py-4 rounded-lg bg-primary text-white font-bold flex items-center justify-center gap-2 hover:bg-primary-container transition-all"
            >
              <Plus size={20} /> Add to Order
            </button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function CartScreen({ 
  cartItems, 
  updateQuantity, 
  removeItem, 
  total,
  onBack
}: { 
  key?: string;
  cartItems: CartItem[]; 
  updateQuantity: (id: string, d: number) => void;
  removeItem: (id: string) => void;
  total: number;
  onBack: () => void;
}) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-8"
    >
      <div className="flex items-center gap-4">
        <button onClick={onBack} className="p-3 glass rounded-lg hover:bg-white/40"><ArrowLeft size={24} /></button>
        <h2 className="font-headline text-2xl font-bold flex-grow text-center">Your Cart</h2>
        <div className="w-12 h-12" />
      </div>

      <div className="space-y-4">
        {cartItems.map(item => (
          <div key={item.id} className="glass rounded-xl p-4 flex gap-4">
            <div className="w-24 h-24 rounded-lg overflow-hidden shadow-inner flex-shrink-0">
              <img src={item.image} className="w-full h-full object-cover" referrerPolicy="no-referrer" alt={item.name} />
            </div>
            <div className="flex-grow space-y-1">
              <div className="flex justify-between">
                <h3 className="font-bold text-lg">{item.name}</h3>
                <button onClick={() => removeItem(item.id)} className="text-primary/40 hover:text-red-500"><X size={20} /></button>
              </div>
              <p className="text-xs text-primary/40 font-bold uppercase tracking-wider">Grande, Oat Milk</p>
              <div className="flex justify-between items-end pt-2">
                <div className="flex items-center gap-4 bg-white/40 rounded-lg px-2 py-1 border border-white">
                  <button onClick={() => updateQuantity(item.id, -1)} className="p-1"><Minus size={16} /></button>
                  <span className="font-bold w-4 text-center">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, 1)} className="p-1"><Plus size={16} /></button>
                </div>
                <span className="font-headline font-bold text-lg text-secondary">${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            </div>
          </div>
        ))}

        {cartItems.length === 0 && (
          <div className="text-center py-20 italic text-primary/40">Your cart is empty</div>
        )}
      </div>

      {cartItems.length > 0 && (
        <div className="glass-dark rounded-xl p-8 space-y-6 mt-12 mb-20 border-none">
          <h3 className="font-headline text-xl font-bold mb-4">Order Summary</h3>
          <div className="space-y-3 font-medium">
            <div className="flex justify-between">
              <span className="text-primary/60">Subtotal</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-primary/60">Tax (8%)</span>
              <span>${(total * 0.08).toFixed(2)}</span>
            </div>
            <div className="h-px bg-primary/10 my-2" />
            <div className="flex justify-between font-headline text-2xl font-bold">
              <span>Total</span>
              <span className="text-secondary">${(total * 1.08).toFixed(2)}</span>
            </div>
          </div>
          <button className="w-full py-4 bg-primary text-white rounded-lg font-bold tracking-widest uppercase shadow-xl hover:shadow-[0_0_20px_var(--color-gold)] transition-all flex items-center justify-center gap-2">
            Checkout <ChevronRight size={20} />
          </button>
        </div>
      )}
    </motion.div>
  );
}

function ProfileScreen({ key }: { key?: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="space-y-8"
    >
      {/* Identity Card */}
      <div className="glass rounded-xl p-8 space-y-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary-container/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50" />
        <div className="flex items-center gap-6 relative z-10">
          <div className="w-24 h-24 rounded-lg border-4 border-white overflow-hidden shadow-xl">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNMlvau5ZIMSOZ61tQxCC42jl6Vd055ihtERIwY_-EL5iQilTiDhu27ej3zggr61yTDunSEK-tUMWLCezV2yEuk6Qc980XI6E1JPA4JExb9B75WzcrugfhpbIjgCVlmiroUs1T3TrEMU6C0-gQffd6ZkUZCJ7qlWJF0SPXfQ3D-L2dfRBTbhc79HaNeEYP2XTy24qFEhZUitzhMd2vKiXcfeEe1Ki_p_fRErW1K6uSFlgzftSTB0bjNPxWpwVzaA8nNRmGXWy73U4" 
              className="w-full h-full object-cover" 
              referrerPolicy="no-referrer"
              alt="Avatar"
            />
          </div>
          <div className="space-y-2">
            <h2 className="font-headline text-2xl font-bold">Alex Mercer</h2>
            <div className="inline-flex items-center gap-2 bg-secondary-container/80 px-3 py-1 rounded-lg border border-gold/20 shadow-sm">
              <Star size={14} className="text-on-secondary-container fill-current" />
              <span className="text-xs font-bold text-on-secondary-container uppercase tracking-wide">Gold Tier Roaster</span>
            </div>
          </div>
        </div>

        <div className="space-y-4 pt-4 border-t border-primary/5">
          <div className="flex justify-between items-end">
            <div className="space-y-1">
              <p className="text-[10px] font-bold uppercase tracking-widest text-primary/40">Available Balance</p>
              <p className="font-headline text-4xl font-bold flex items-baseline gap-2">
                150 <span className="text-base text-secondary">Coins</span>
              </p>
            </div>
            <div className="text-right">
              <p className="text-xs font-bold text-secondary">Progress to Platinum</p>
              <p className="text-sm font-medium">150 / 300 Coins</p>
            </div>
          </div>
          <div className="w-full h-3 bg-white/40 rounded-full overflow-hidden border border-white">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: '50%' }}
              className="h-full bg-secondary relative"
            >
              <div className="absolute inset-0 shimmer" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Links */}
      <div className="space-y-8">
        <div className="space-y-4">
          <h3 className="font-headline text-lg font-bold text-primary/40 ml-2 uppercase tracking-widest">Account</h3>
          <ProfileLink icon={<Receipt size={20} />} label="Order History" />
          <ProfileLink icon={<CreditCard size={20} />} label="Payment Methods" />
          <ProfileLink icon={<MapPin size={20} />} label="Saved Addresses" />
        </div>

        <div className="space-y-4">
          <h3 className="font-headline text-lg font-bold text-primary/40 ml-2 uppercase tracking-widest">Settings</h3>
          <ProfileLink icon={<Bell size={20} />} label="Notifications" />
          <ProfileLink icon={<Shield size={20} />} label="Privacy & Security" />
        </div>

        <button className="w-full py-5 glass border-red-500/20 bg-red-50/20 text-red-600 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-red-500 hover:text-white transition-all shadow-lg mt-8">
          <LogOut size={20} /> Sign Out
        </button>
      </div>
    </motion.div>
  );
}

function ProfileLink({ icon, label }: { icon: ReactNode; label: string }) {
  return (
    <div className="glass rounded-xl p-5 flex items-center justify-between group hover:bg-white/40 transition-all cursor-pointer">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-white/60 flex items-center justify-center text-primary border border-white shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
          {icon}
        </div>
        <span className="font-bold">{label}</span>
      </div>
      <ChevronRight size={20} className="text-primary/40 group-hover:text-primary group-hover:translate-x-1 transition-all" />
    </div>
  );
}

function DetailScreen({ product, onBack, addToCart }: { key?: string; product: Product; onBack: () => void; addToCart: (p: Product) => void }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      className="space-y-8 pb-32"
    >
      <div className="flex items-center justify-between px-2">
        <button onClick={onBack} className="p-3 glass rounded-lg"><ArrowLeft size={24} /></button>
        <div className="flex-grow flex justify-center">
          <img 
            src="/logo.png" 
            alt="North End Coffee Roasters" 
            className="h-8 md:h-10 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </div>
        <button className="p-3 glass rounded-lg"><Heart size={24} /></button>
      </div>

      <div className="glass p-2 rounded-xl relative aspect-[4/5] overflow-hidden group">
        <img src={product.image} className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" alt={product.name} />
        <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-xl border border-white/50">
          <Star size={16} className="text-secondary fill-current" />
          <span className="font-bold text-sm">4.9</span>
        </div>
      </div>

      <div className="glass rounded-xl p-8 space-y-6">
        <div className="space-y-2">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary bg-secondary-container/20 px-3 py-1 rounded-full border border-gold/10">
            {product.category}
          </span>
          <h1 className="font-headline text-4xl font-bold pr-12 leading-tight">{product.name}</h1>
          <p className="text-primary/60 font-medium leading-relaxed max-w-md">{product.description}</p>
        </div>

        <div className="space-y-6">
          <CustomSection title="Size">
            <div className="grid grid-cols-3 gap-3">
              <CustomOption active={true} icon={<Coffee size={16} />} label="Small" detail="12 oz" />
              <CustomOption icon={<Coffee size={20} />} label="Medium" detail="16 oz" />
              <CustomOption icon={<Coffee size={24} />} label="Large" detail="20 oz" />
            </div>
          </CustomSection>

          <CustomSection title="Milk Base">
            <div className="grid grid-cols-3 gap-3">
              <CustomPill active={true} label="Whole" />
              <CustomPill label="Oat (+0.75)" />
              <CustomPill label="Almond" />
            </div>
          </CustomSection>
        </div>
      </div>

      {/* Floating Price Action */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-[90%] max-w-md z-50">
        <motion.button 
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => addToCart(product)}
          className="w-full py-5 bg-primary text-white rounded-lg font-headline text-lg font-bold shadow-2xl flex items-center justify-center gap-3 relative overflow-hidden group border border-white/10 hover:shadow-[0_0_20px_var(--color-gold)] transition-shadow"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
          <ShoppingBag size={24} />
          Add to Order • ${product.price.toFixed(2)}
        </motion.button>
      </div>
    </motion.div>
  );
}

function CustomSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="space-y-3">
      <h3 className="text-xs font-bold uppercase tracking-widest text-primary/40 ml-1">{title}</h3>
      {children}
    </div>
  );
}

function CustomOption({ active, icon, label, detail }: { active?: boolean; icon: ReactNode; label: string; detail: string }) {
  return (
    <div className={`p-4 rounded-lg flex flex-col items-center justify-center gap-1 border-2 transition-all cursor-pointer ${
      active 
        ? 'bg-secondary-container border-secondary text-on-secondary-container shadow-md' 
        : 'bg-white/40 border-white/60 hover:bg-white/60'
    }`}>
      {icon}
      <span className="font-bold text-sm mt-1">{label}</span>
      <span className="text-[10px] opacity-60 font-bold">{detail}</span>
    </div>
  );
}

function CustomPill({ active, label }: { active?: boolean; label: string }) {
  return (
    <div className={`py-3 rounded-lg flex items-center justify-center text-center font-bold text-sm border transition-all cursor-pointer ${
      active 
        ? 'bg-secondary-container border-secondary text-on-secondary-container shadow-sm' 
        : 'bg-white/40 border-white text-primary/60 hover:bg-white/60'
    }`}>
      {label}
    </div>
  );
}
