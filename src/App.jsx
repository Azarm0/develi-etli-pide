import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Heritage from './components/Heritage';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import LocationFooter from './components/LocationFooter';
import OrderModal from './components/OrderModal';
import ReservationModal from './components/ReservationModal';

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false);

  const handleAddToCart = (item) => {
    setCartItems(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveItem(id);
      return;
    }
    setCartItems(prev => prev.map(item => item.id === id ? { ...item, quantity: newQuantity } : item));
  };

  const handleRemoveItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar 
        cartCount={totalCartCount} 
        onOpenOrderModal={() => setIsOrderModalOpen(true)}
        onOpenReservationModal={() => setIsReservationModalOpen(true)}
      />

      <main style={{ flex: 1 }}>
        <Hero 
          onOpenOrderModal={() => setIsOrderModalOpen(true)}
          onOpenReservationModal={() => setIsReservationModalOpen(true)}
        />
        <Heritage />
        <Menu 
          onAddToCart={handleAddToCart}
          cartItems={cartItems}
        />
        <Gallery />
        <Reviews />
        <LocationFooter />
      </main>

      <OrderModal 
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      <ReservationModal 
        isOpen={isReservationModalOpen}
        onClose={() => setIsReservationModalOpen(false)}
      />
    </div>
  );
}
