import React, { useState } from 'react';
import { menuCategories, menuItems } from '../data/restaurantData';
import { Search, Plus, Check, ShoppingBag, Star, Sparkles } from 'lucide-react';

export default function Menu({ onAddToCart, cartItems }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [addedItemIds, setAddedItemIds] = useState([]);

  const filteredItems = menuItems.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleAdd = (item) => {
    onAddToCart(item);
    setAddedItemIds(prev => [...prev, item.id]);
    setTimeout(() => {
      setAddedItemIds(prev => prev.filter(id => id !== item.id));
    }, 1200);
  };

  return (
    <section id="menu" style={{
      padding: '5.5rem 0',
      backgroundColor: 'var(--color-bg-main)'
    }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="section-tag" style={{ margin: '0 auto 0.75rem auto' }}>
            <Sparkles size={16} />
            Lezzet Listemiz
          </div>
          <h2 className="section-title">
            Develi Taş Fırın <span style={{ color: 'var(--color-primary)' }}>Menüsü & Fiyatları</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Özenle seçilmiş etler ve taptaze malzemelerle hazırlanan güncel lezzetlerimiz.
          </p>
        </div>

        {/* Search & Category Tabs Control Bar */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.5rem',
          marginBottom: '3rem'
        }}>
          
          {/* Search Input */}
          <div style={{
            position: 'relative',
            width: '100%',
            maxWidth: '460px'
          }}>
            <input 
              type="text"
              placeholder="Menüde lezzet ara... (örn: Cıvıklı, Tahinli, Peynirli)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '0.875rem 1.25rem 0.875rem 3rem',
                borderRadius: 'var(--radius-full)',
                border: '1px solid var(--color-border)',
                background: '#FFFFFF',
                fontSize: '0.975rem',
                outline: 'none',
                boxShadow: 'var(--shadow-sm)',
                transition: 'border-color 0.2s'
              }}
            />
            <Search size={20} color="var(--color-text-muted)" style={{
              position: 'absolute',
              left: '1.1rem',
              top: '50%',
              transform: 'translateY(-50%)'
            }} />
          </div>

          {/* Category Filter Pills */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.6rem'
          }}>
            {menuCategories.map(cat => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  style={{
                    padding: '0.65rem 1.35rem',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.925rem',
                    fontWeight: 600,
                    transition: 'all 0.2s ease',
                    background: isActive ? 'var(--color-primary)' : '#FFFFFF',
                    color: isActive ? '#FFFFFF' : 'var(--color-text-main)',
                    border: isActive ? '1px solid var(--color-primary)' : '1px solid var(--color-border)',
                    boxShadow: isActive ? 'var(--shadow-md)' : 'var(--shadow-sm)'
                  }}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>

        </div>

        {/* Menu Items Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {filteredItems.map(item => {
            const isAdded = addedItemIds.includes(item.id);
            return (
              <div 
                key={item.id} 
                className="glass-card"
                style={{
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
              >
                <div>
                  {/* Image Container */}
                  <div style={{ position: 'relative', height: '210px', overflow: 'hidden' }}>
                    <img 
                      src={item.image} 
                      alt={item.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.5s ease'
                      }} 
                    />
                    {item.isPopular && (
                      <span style={{
                        position: 'absolute',
                        top: '12px',
                        left: '12px',
                        backgroundColor: 'var(--color-secondary)',
                        color: '#FFF',
                        padding: '0.3rem 0.75rem',
                        borderRadius: 'var(--radius-full)',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        boxShadow: 'var(--shadow-sm)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.3rem'
                      }}>
                        <Star size={12} fill="#FFF" /> Popüler
                      </span>
                    )}

                    <div style={{
                      position: 'absolute',
                      bottom: '12px',
                      right: '12px',
                      backgroundColor: 'rgba(28, 25, 23, 0.85)',
                      color: 'var(--color-accent)',
                      padding: '0.4rem 0.9rem',
                      borderRadius: 'var(--radius-md)',
                      fontWeight: 800,
                      fontSize: '1.15rem',
                      backdropFilter: 'blur(4px)'
                    }}>
                      {item.price} TL
                    </div>
                  </div>

                  {/* Body Content */}
                  <div style={{ padding: '1.5rem' }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '0.6rem' }}>
                      {item.tags.map((t, idx) => (
                        <span key={idx} style={{
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          color: 'var(--color-primary)',
                          background: 'rgba(194, 65, 12, 0.08)',
                          padding: '0.2rem 0.6rem',
                          borderRadius: '0.3rem'
                        }}>
                          {t}
                        </span>
                      ))}
                    </div>

                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--pr-stone-900)' }}>
                      {item.name}
                    </h3>

                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.5, marginBottom: '1.25rem' }}>
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Footer Action */}
                <div style={{ padding: '0 1.5rem 1.5rem 1.5rem' }}>
                  <button 
                    onClick={() => handleAdd(item)}
                    className={isAdded ? "btn-secondary" : "btn-primary"}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      fontSize: '0.95rem',
                      borderRadius: 'var(--radius-md)'
                    }}
                  >
                    {isAdded ? (
                      <>
                        <Check size={18} /> Siparişe Eklendi
                      </>
                    ) : (
                      <>
                        <Plus size={18} /> Siparişe Ekle
                      </>
                    )}
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {filteredItems.length === 0 && (
          <div style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--color-text-muted)' }}>
            Aramanıza uygun bir lezzet bulunamadı. Lütfen başka bir kelime deneyiniz.
          </div>
        )}

      </div>
    </section>
  );
}
