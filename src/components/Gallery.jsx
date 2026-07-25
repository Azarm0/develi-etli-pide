import React, { useState } from 'react';
import { galleryPhotos } from '../data/restaurantData';
import { Camera, X, Maximize2, Sparkles } from 'lucide-react';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('Tümü');
  const [activeLightboxImage, setActiveLightboxImage] = useState(null);

  const categories = ['Tümü', 'Pide', 'Restoran', 'Tatlı', 'Çorba', 'İçecek'];

  const filteredPhotos = selectedCategory === 'Tümü'
    ? galleryPhotos
    : galleryPhotos.filter(p => p.category === selectedCategory);

  return (
    <section id="gallery" style={{
      padding: '5.5rem 0',
      backgroundColor: '#FFFFFF',
      borderTop: '1px solid var(--color-border)'
    }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="section-tag" style={{ margin: '0 auto 0.75rem auto' }}>
            <Camera size={16} />
            Gerçek Google Haritalar Fotoğrafları
          </div>
          <h2 className="section-title">
            Develi Etli Pide <span style={{ color: 'var(--color-primary)' }}>Fotoğraf Galerisi</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Zeytinburnu salonumuzdan, fırınımızdan ve lezzetlerimizden gerçek karelere göz atın.
          </p>
        </div>

        {/* Gallery Filter Pills */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '0.6rem',
          marginBottom: '2.5rem'
        }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                padding: '0.55rem 1.2rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.875rem',
                fontWeight: 600,
                transition: 'all 0.2s ease',
                background: selectedCategory === cat ? 'var(--pr-stone-900)' : 'var(--pr-sand-100)',
                color: selectedCategory === cat ? '#FFFFFF' : 'var(--color-text-main)',
                border: selectedCategory === cat ? '1px solid var(--pr-stone-900)' : '1px solid var(--color-border)'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Photos Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: '1.25rem'
        }}>
          {filteredPhotos.map(photo => (
            <div 
              key={photo.id} 
              onClick={() => setActiveLightboxImage(photo)}
              style={{
                position: 'relative',
                height: '240px',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                cursor: 'pointer',
                boxShadow: 'var(--shadow-sm)',
                border: '1px solid var(--color-border)'
              }}
            >
              <img 
                src={photo.src} 
                alt={photo.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.4s ease'
                }}
              />
              <div className="gallery-overlay" style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(28, 25, 23, 0.85) 0%, rgba(0,0,0,0) 60%)',
                opacity: 0,
                transition: 'opacity 0.3s ease',
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'space-between',
                padding: '1.25rem'
              }}>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-accent)', fontWeight: 700, textTransform: 'uppercase' }}>
                    {photo.category}
                  </div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 600, color: '#FFF' }}>
                    {photo.title}
                  </div>
                </div>
                <Maximize2 size={20} color="#FFF" />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeLightboxImage && (
        <div 
          onClick={() => setActiveLightboxImage(null)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 2000,
            backgroundColor: 'rgba(0,0,0,0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem'
          }}
        >
          <div style={{ position: 'relative', maxWidth: '900px', width: '100%' }} onClick={e => e.stopPropagation()}>
            <button 
              onClick={() => setActiveLightboxImage(null)}
              style={{
                position: 'absolute',
                top: '-40px',
                right: '0',
                color: '#FFF',
                background: 'none',
                cursor: 'pointer'
              }}
            >
              <X size={32} />
            </button>
            <img 
              src={activeLightboxImage.src} 
              alt={activeLightboxImage.title}
              style={{
                width: '100%',
                maxHeight: '75vh',
                objectFit: 'contain',
                borderRadius: 'var(--radius-md)',
                display: 'block'
              }} 
            />
            <div style={{ textAlign: 'center', color: '#FFF', marginTop: '1rem', fontSize: '1.1rem', fontWeight: 600 }}>
              {activeLightboxImage.title}
            </div>
          </div>
        </div>
      )}

      <style>{`
        div:hover > .gallery-overlay { opacity: 1 !important; }
        div:hover > img { transform: scale(1.05); }
      `}</style>
    </section>
  );
}
