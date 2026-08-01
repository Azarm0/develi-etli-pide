import React from 'react';
import { Star, Flame, ShoppingBag, Phone, ChevronRight, Award, Clock } from 'lucide-react';
import { restaurantInfo } from '../data/restaurantData';

export default function Hero({ onOpenOrderModal, onOpenReservationModal }) {
  return (
    <section id="hero" style={{
      position: 'relative',
      padding: '4rem 0 5rem 0',
      background: 'radial-gradient(circle at 80% 20%, rgba(234, 88, 12, 0.08) 0%, rgba(253, 251, 247, 1) 70%)',
      overflow: 'hidden'
    }}>
      {/* Decorative Warm Ambient Elements */}
      <div style={{
        position: 'absolute',
        top: '-100px',
        right: '-100px',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(217, 119, 6, 0.15) 0%, rgba(255, 255, 255, 0) 70%)',
        pointerEvents: 'none'
      }} />

      <div className="container">
        <div className="hero-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2.5rem',
          alignItems: 'center'
        }}>
          
          {/* Left Hero Column */}
          <div>
            <h1 className="hero-heading" style={{
              fontSize: 'clamp(2rem, 5vw, 3.8rem)',
              fontWeight: 800,
              color: 'var(--pr-stone-900)',
              lineHeight: 1.15,
              marginBottom: '1rem'
            }}>
              Odun Ateşinde Taş Fırından <br />
              <span style={{
                background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Meşhur Develi Cıvıklısı
              </span>
            </h1>

            <p style={{
              fontSize: '1.05rem',
              color: 'var(--color-text-muted)',
              marginBottom: '1.5rem',
              maxWidth: '560px',
              lineHeight: 1.5
            }}>
              Zırh zırh doğranmış özel etler, domates ve biber harcıyla incecik taş fırın hamurunda pişen asırlık Kayseri Develi lezzeti. Zeytinburnu'daki salonumuzda taptaze sunuluyor.
            </p>

            {/* Badges Grid */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.85rem',
              marginBottom: '1.75rem'
            }}>
              <div className="glass-card" style={{ padding: '0.5rem 0.9rem', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Star size={20} color="#D97706" fill="#D97706" />
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.875rem', lineHeight: 1.1 }}>{restaurantInfo.rating} / 5.0</div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)' }}>{restaurantInfo.reviewCount} Yorum</div>
                </div>
              </div>

              <div className="glass-card" style={{ padding: '0.5rem 0.9rem', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Flame size={20} color="var(--color-primary)" />
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.875rem', lineHeight: 1.1 }}>100% Odun Ateşi</div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)' }}>Meşe Odunu</div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              <button onClick={onOpenOrderModal} className="btn-primary" style={{ padding: '0.85rem 1.6rem', fontSize: '0.975rem' }}>
                <ShoppingBag size={20} />
                Sipariş Ver
                <ChevronRight size={18} />
              </button>

              <button onClick={onOpenReservationModal} className="btn-secondary" style={{ padding: '0.85rem 1.4rem', fontSize: '0.975rem' }}>
                Masa Rezerve Et
              </button>
            </div>
          </div>

          {/* Right Hero Visual Column */}
          <div className="hero-image-col" style={{ position: 'relative' }}>
            <div className="hero-image-card" style={{
              position: 'relative',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-lg)',
              border: '3px solid #FFFFFF'
            }}>
              <img 
                src="gallery/develi_civiklisi_hero.jpg" 
                alt="Meşhur Develi Cıvıklısı Taş Fırın Pidesi" 
                className="hero-img"
                style={{
                  width: '100%',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(15, 12, 10, 0.92) 0%, rgba(15, 12, 10, 0.3) 50%, rgba(0,0,0,0) 100%)',
                display: 'flex',
                alignItems: 'flex-end',
                padding: '1.25rem'
              }}>
                <div style={{ color: '#FFF', position: 'relative', zIndex: 2 }}>
                  <div style={{
                    fontSize: '0.75rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: 'var(--color-accent)',
                    fontWeight: 700,
                    marginBottom: '0.2rem'
                  }}>
                    Günün Tavsiyesi
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#FFF', marginBottom: '0.25rem', textShadow: '0 2px 4px rgba(0,0,0,0.6)' }}>
                    Meşhur Develi Cıvıklısı (Zırh Kuşbaşılı)
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: '#F5EFEB', textShadow: '0 1px 3px rgba(0,0,0,0.6)' }}>
                    Taş fırından yeni çıkmış çıtır hamuru ve nefis aromasıyla.
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Card Overlay */}
            <div className="glass-card hero-floating-card" style={{
              position: 'absolute',
              top: '15px',
              right: '15px',
              padding: '0.65rem 0.9rem',
              borderRadius: 'var(--radius-md)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              boxShadow: 'var(--shadow-lg)',
              maxWidth: '220px',
              zIndex: 10
            }}>
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: 'var(--color-primary)',
                color: '#FFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <Award size={24} />
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--pr-stone-900)' }}>
                  Zırh Kıyması Garantisi
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                  Makine kullanılmadan zırhla hazırlanan taze etler.
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
