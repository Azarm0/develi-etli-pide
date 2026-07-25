import React, { useState, useEffect } from 'react';
import { Phone, Clock, MapPin, ShoppingBag, Calendar, Menu, X, Flame } from 'lucide-react';
import { restaurantInfo } from '../data/restaurantData';

export default function Navbar({ cartCount, onOpenOrderModal, onOpenReservationModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 100, transition: 'all 0.3s ease' }}>
      {/* Top Notification Bar (Hidden on Mobile) */}
      <div className="top-notification-bar" style={{
        backgroundColor: 'var(--pr-stone-900)',
        color: '#D6D3D1',
        fontSize: '0.8125rem',
        padding: '0.4rem 0',
        borderBottom: '1px solid rgba(217, 119, 6, 0.2)'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <MapPin size={14} color="var(--color-secondary)" />
              {restaurantInfo.addressDetail}
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Clock size={14} color="var(--color-secondary)" />
              {restaurantInfo.workingHours.weekdays}
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <a href={`tel:${restaurantInfo.phone.replace(/[^0-9]/g, '')}`} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              color: 'var(--color-accent)',
              fontWeight: 600
            }}>
              <Phone size={14} />
              {restaurantInfo.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <nav style={{
        background: isScrolled ? 'rgba(255, 253, 249, 0.95)' : 'var(--color-bg-main)',
        backdropFilter: isScrolled ? 'blur(12px)' : 'none',
        boxShadow: isScrolled ? '0 4px 20px rgba(0,0,0,0.08)' : 'none',
        borderBottom: '1px solid var(--color-border)',
        padding: isScrolled ? '0.75rem 0' : '1.125rem 0',
        transition: 'all 0.3s ease'
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          
          {/* Logo */}
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{
              width: '46px',
              height: '46px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, var(--color-primary), var(--pr-terracotta-900))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFF',
              boxShadow: 'var(--shadow-md)'
            }}>
              <Flame size={26} color="var(--color-accent)" />
            </div>
            <div>
              <span style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.35rem',
                fontWeight: 800,
                color: 'var(--color-primary)',
                display: 'block',
                lineHeight: 1.1
              }}>
                DEVELİ
              </span>
              <span style={{
                fontSize: '0.75rem',
                letterSpacing: '0.15em',
                fontWeight: 700,
                color: 'var(--color-secondary)',
                textTransform: 'uppercase'
              }}>
                Etli Pide & Taş Fırın
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div style={{ display: 'none', mdDisplay: 'flex', alignItems: 'center', gap: '2rem' }} className="desktop-links">
            <a href="#hero" style={{ fontWeight: 600, color: 'var(--color-text-main)', transition: 'color 0.2s' }}>Ana Sayfa</a>
            <a href="#heritage" style={{ fontWeight: 600, color: 'var(--color-text-main)', transition: 'color 0.2s' }}>Hikayemiz</a>
            <a href="#menu" style={{ fontWeight: 600, color: 'var(--color-text-main)', transition: 'color 0.2s' }}>Menümüz</a>
            <a href="#gallery" style={{ fontWeight: 600, color: 'var(--color-text-main)', transition: 'color 0.2s' }}>Fotoğraflar</a>
            <a href="#reviews" style={{ fontWeight: 600, color: 'var(--color-text-main)', transition: 'color 0.2s' }}>Yorumlar</a>
            <a href="#location" style={{ fontWeight: 600, color: 'var(--color-text-main)', transition: 'color 0.2s' }}>İletişim</a>
          </div>

          {/* Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <button 
              onClick={onOpenReservationModal} 
              className="btn-outline"
              style={{ padding: '0.6rem 1.1rem', fontSize: '0.875rem' }}
            >
              <Calendar size={18} />
              <span style={{ display: 'none', smDisplay: 'inline' }}>Masa Rezerve Et</span>
            </button>

            <button 
              onClick={onOpenOrderModal} 
              className="btn-primary"
              style={{ padding: '0.6rem 1.25rem', fontSize: '0.875rem', position: 'relative' }}
            >
              <ShoppingBag size={18} />
              <span>Sipariş Ver</span>
              {cartCount > 0 && (
                <span style={{
                  position: 'absolute',
                  top: '-6px',
                  right: '-6px',
                  backgroundColor: 'var(--color-secondary)',
                  color: '#FFF',
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.3)'
                }}>
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile menu button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                padding: '0.5rem',
                color: 'var(--color-text-main)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              className="mobile-toggle"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div style={{
            background: 'var(--color-bg-card)',
            borderTop: '1px solid var(--color-border)',
            padding: '1.25rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            boxShadow: 'var(--shadow-lg)'
          }}>
            <a href="#hero" onClick={() => setMobileMenuOpen(false)} style={{ fontWeight: 600, fontSize: '1.1rem' }}>Ana Sayfa</a>
            <a href="#heritage" onClick={() => setMobileMenuOpen(false)} style={{ fontWeight: 600, fontSize: '1.1rem' }}>Hikayemiz</a>
            <a href="#menu" onClick={() => setMobileMenuOpen(false)} style={{ fontWeight: 600, fontSize: '1.1rem' }}>Menümüz & Fiyatlar</a>
            <a href="#gallery" onClick={() => setMobileMenuOpen(false)} style={{ fontWeight: 600, fontSize: '1.1rem' }}>Fotoğraf Galerisi</a>
            <a href="#reviews" onClick={() => setMobileMenuOpen(false)} style={{ fontWeight: 600, fontSize: '1.1rem' }}>Müşteri Yorumları</a>
            <a href="#location" onClick={() => setMobileMenuOpen(false)} style={{ fontWeight: 600, fontSize: '1.1rem' }}>Konum & İletişim</a>
          </div>
        )}
      </nav>

      <style>{`
        @media (min-width: 992px) {
          .desktop-links { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </header>
  );
}
