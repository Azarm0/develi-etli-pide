import React from 'react';
import { ShieldCheck, Flame, UtensilsCrossed, Sparkles } from 'lucide-react';

export default function Heritage() {
  return (
    <section id="heritage" style={{
      padding: '5rem 0',
      backgroundColor: '#FFFFFF',
      borderTop: '1px solid var(--color-border)',
      borderBottom: '1px solid var(--color-border)'
    }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-tag" style={{ margin: '0 auto 0.75rem auto' }}>
            <Sparkles size={16} />
            Geleneksel Lezzet Sırrımız
          </div>
          <h2 className="section-title">
            Kayseri Develi'den Zeytinburnu'na <br />
            <span style={{ color: 'var(--color-primary)' }}>Asırlık Taş Fırın Mirası</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Develi Cıvıklısı, sıradan bir etli pide değildir. Özel zırh bıçağı ile elde kıyılan etlerin, meşe odununda pişen taş fırının sıcaklığıyla buluştuğu tescilli bir gastronomi harikasıdır.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem'
        }}>
          
          {/* Card 1 */}
          <div className="glass-card" style={{
            padding: '2rem',
            borderRadius: 'var(--radius-lg)',
            textAlign: 'center',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
          }}>
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              background: '#FFF7ED',
              color: 'var(--color-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.25rem auto',
              border: '2px solid #FFEDD5'
            }}>
              <UtensilsCrossed size={32} />
            </div>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--pr-stone-900)' }}>
              1. Zırh İle Kıyılan Etler
            </h3>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.975rem' }}>
              Etlerimiz asla kıyma makinesinden geçmez. Usta ellerde zırh bıçağı ile küçük küpler halinde kıyılarak suyunun ve aromasının etin içinde kalması sağlanır.
            </p>
          </div>

          {/* Card 2 */}
          <div className="glass-card" style={{
            padding: '2rem',
            borderRadius: 'var(--radius-lg)',
            textAlign: 'center',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
          }}>
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              background: '#FEF3C7',
              color: 'var(--color-secondary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.25rem auto',
              border: '2px solid #FDE68A'
            }}>
              <Flame size={32} />
            </div>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--pr-stone-900)' }}>
              2. Meşe Odunu Taş Fırın
            </h3>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.975rem' }}>
              Pidelerimiz sadece doğal meşe odunu ile ısıtılan geleneksel kubbeli taş fırınımızda yüksek dereceli ısıda dakikalar içinde çıtır çıtır pişirilir.
            </p>
          </div>

          {/* Card 3 */}
          <div className="glass-card" style={{
            padding: '2rem',
            borderRadius: 'var(--radius-lg)',
            textAlign: 'center',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
          }}>
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              background: '#ECFDF5',
              color: 'var(--color-success)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.25rem auto',
              border: '2px solid #A7F3D0'
            }}>
              <ShieldCheck size={32} />
            </div>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--pr-stone-900)' }}>
              3. Taptaze Doğal Malzeme
            </h3>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.975rem' }}>
              Günlük taze domates, yeşil sivri biber, özel Kayseri yayla peyniri ve tereyağı kullanarak hiçbir koruyucu madde eklemeden hazırlıyoruz.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
