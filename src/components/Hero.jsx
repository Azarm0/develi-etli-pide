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
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '3.5rem',
          alignItems: 'center'
        }}>
          
          {/* Left Hero Column */}
          <div>


            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 800,
              color: 'var(--pr-stone-900)',
              lineHeight: 1.15,
              marginBottom: '1.25rem'
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
              fontSize: '1.2rem',
              color: 'var(--color-text-muted)',
              marginBottom: '2rem',
              maxWidth: '560px'
            }}>
              Zırh zırh doğranmış özel etler, domates ve biber harcıyla incecik taş fırın hamurunda pişen asırlık Kayseri Develi lezzeti. Zeytinburnu Veliefendi salonumuzda taptaze sunuluyor.
            </p>

            {/* Badges Grid */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1.25rem',
              marginBottom: '2.5rem'
            }}>
              <div className="glass-card" style={{ padding: '0.6rem 1.1rem', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <div style={{ background: '#FEF3C7', padding: '0.35rem', borderRadius: '50%' }}>
                  <Star size={20} color="#D97706" fill="#D97706" />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem', lineHeight: 1.1 }}>{restaurantInfo.rating} / 5.0</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>{restaurantInfo.reviewCount} Doğrulanmış Yorum</div>
                </div>
              </div>

              <div className="glass-card" style={{ padding: '0.6rem 1.1rem', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <div style={{ background: '#FFEDD5', padding: '0.35rem', borderRadius: '50%' }}>
                  <Flame size={20} color="var(--color-primary)" />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem', lineHeight: 1.1 }}>100% Odun Ateşi</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Geleneksel Meşe Odunu</div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <button onClick={onOpenOrderModal} className="btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.05rem' }}>
                <ShoppingBag size={22} />
                Hemen Sipariş Ver
                <ChevronRight size={20} />
              </button>

              <button onClick={onOpenReservationModal} className="btn-secondary" style={{ padding: '1rem 1.75rem', fontSize: '1.05rem' }}>
                Masa Rezerve Et
              </button>
            </div>
          </div>

          {/* Right Hero Visual Column (Featuring Real Scraped Google Maps Photo) */}
          <div style={{ position: 'relative' }}>
            <div style={{
              position: 'relative',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-lg)',
              border: '4px solid #FFFFFF'
            }}>
              <img 
                src="gallery/develi_civiklisi_hero.jpg" 
                alt="Meşhur Develi Cıvıklısı Taş Fırın Pidesi" 
                style={{
                  width: '100%',
                  height: '460px',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'transform 0.5s ease'
                }}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(15, 12, 10, 0.92) 0%, rgba(15, 12, 10, 0.4) 50%, rgba(0,0,0,0) 100%)',
                display: 'flex',
                alignItems: 'flex-end',
                padding: '2rem 1.75rem 2.25rem 1.75rem'
              }}>
                <div style={{ color: '#FFF', position: 'relative', zIndex: 2 }}>
                  <div style={{
                    fontSize: '0.85rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: 'var(--color-accent)',
                    fontWeight: 700,
                    marginBottom: '0.35rem'
                  }}>
                    Günün Tavsiyesi
                  </div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#FFF', marginBottom: '0.4rem', textShadow: '0 2px 4px rgba(0,0,0,0.6)' }}>
                    Meşhur Develi Cıvıklısı (Zırh Kuşbaşılı)
                  </h3>
                  <p style={{ fontSize: '0.925rem', color: '#F5EFEB', textShadow: '0 1px 3px rgba(0,0,0,0.6)' }}>
                    Taş fırından yeni çıkmış çıtır hamuru ve nefis aromasıyla.
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Card Overlay (Positioned cleanly at top right to avoid covering hero text) */}
            <div className="glass-card" style={{
              position: 'absolute',
              top: '20px',
              right: '-20px',
              padding: '0.85rem 1.1rem',
              borderRadius: 'var(--radius-md)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              boxShadow: 'var(--shadow-lg)',
              maxWidth: '250px',
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
