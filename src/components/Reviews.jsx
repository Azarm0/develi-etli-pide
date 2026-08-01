import React from 'react';
import { customerReviews, restaurantInfo } from '../data/restaurantData';
import { Star, MessageSquareQuote, CheckCircle, Sparkles } from 'lucide-react';

export default function Reviews() {
  return (
    <section id="reviews" style={{
      padding: '5.5rem 0',
      backgroundColor: 'var(--color-bg-main)',
      borderTop: '1px solid var(--color-border)'
    }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-tag" style={{ margin: '0 auto 0.75rem auto' }}>
            <Sparkles size={16} />
            Müşteri Deneyimleri
          </div>
          <h2 className="section-title">
            Misafirlerimizin <span style={{ color: 'var(--color-primary)' }}>Google Haritalar Yorumları</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Google Haritalar üzerinde 4.6 / 5.0 puan ile değerlendirilen salonumuzdan gerçek lezzet yorumları.
          </p>

          {/* Aggregate Rating Banner */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '1rem',
            marginTop: '1.5rem',
            padding: '0.75rem 1.5rem',
            background: '#FFFFFF',
            borderRadius: 'var(--radius-full)',
            boxShadow: 'var(--shadow-sm)',
            border: '1px solid var(--color-border)'
          }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--pr-stone-900)' }}>
              {restaurantInfo.rating}
            </div>
            <div style={{ display: 'flex', gap: '0.2rem' }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} color="#D97706" fill="#D97706" />
              ))}
            </div>
            <div style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>
              Örnek değerlendirme verisi ({restaurantInfo.reviewCount})
            </div>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.75rem'
        }}>
          {customerReviews.map(review => (
            <div key={review.id} className="glass-card" style={{
              padding: '1.75rem',
              borderRadius: 'var(--radius-lg)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div>
                {/* Rating Stars & Quote Icon */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', gap: '0.15rem' }}>
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={16} color="#D97706" fill="#D97706" />
                    ))}
                  </div>
                  <MessageSquareQuote size={24} color="var(--color-primary)" opacity={0.3} />
                </div>

                <p style={{
                  fontSize: '0.95rem',
                  color: 'var(--pr-stone-800)',
                  lineHeight: 1.6,
                  fontStyle: 'italic',
                  marginBottom: '1.5rem'
                }}>
                  "{review.comment}"
                </p>
              </div>

              {/* Author Footer */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderTop: '1px solid var(--color-border)',
                paddingTop: '1rem'
              }}>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--pr-stone-900)' }}>
                    {review.name}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                    {review.date}
                  </div>
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.25rem',
                  fontSize: '0.75rem',
                  color: 'var(--color-success)',
                  fontWeight: 600
                }}>
                  <CheckCircle size={14} /> Doğrulanmış
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
