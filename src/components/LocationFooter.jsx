import React from 'react';
import { MapPin, Phone, Clock, Navigation, Flame, MessageCircle, ExternalLink } from 'lucide-react';
import { restaurantInfo } from '../data/restaurantData';

export default function LocationFooter() {
  return (
    <footer id="location" style={{
      backgroundColor: 'var(--pr-stone-900)',
      color: '#E7DFD8',
      paddingTop: '5rem',
      borderTop: '3px solid var(--color-primary)'
    }}>
      <div className="container">
        
        {/* Location Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-tag" style={{ background: 'rgba(217, 119, 6, 0.15)', color: 'var(--color-accent)', margin: '0 auto 0.75rem auto' }}>
            <MapPin size={16} />
            Zeytinburnu Salonumuz
          </div>
          <h2 className="section-title" style={{ color: '#FFFFFF' }}>
            Bizi Ziyaret Edin veya <span style={{ color: 'var(--color-accent)' }}>Sipariş Verin</span>
          </h2>
          <p className="section-subtitle" style={{ color: '#A8A29E', margin: '0 auto' }}>
            Zeytinburnu Veliefendi Mahallesi'nde yer alan salonumuzda taze taş fırın lezzetlerimizle hizmetinizdeyiz.
          </p>
        </div>

        {/* Location & Map Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2.5rem',
          alignItems: 'stretch',
          marginBottom: '4rem'
        }}>
          
          {/* Info Details Card */}
          <div className="glass-card-dark" style={{
            padding: '2.5rem',
            borderRadius: 'var(--radius-lg)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  background: 'var(--color-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFF'
                }}>
                  <Flame size={24} color="var(--color-accent)" />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#FFF' }}>{restaurantInfo.name}</h3>
                  <span style={{ fontSize: '0.8rem', color: 'var(--color-accent)', fontWeight: 600 }}>Zeytinburnu Şubesi</span>
                </div>
              </div>

              {/* Items List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2rem' }}>
                
                <div style={{ display: 'flex', gap: '0.85rem' }}>
                  <MapPin size={22} color="var(--color-secondary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <div style={{ fontWeight: 700, color: '#FFF', fontSize: '0.95rem' }}>Adres:</div>
                    <div style={{ color: '#D6D3D1', fontSize: '0.9rem', lineHeight: 1.5 }}>
                      {restaurantInfo.address}
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.85rem' }}>
                  <Phone size={22} color="var(--color-secondary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <div style={{ fontWeight: 700, color: '#FFF', fontSize: '0.95rem' }}>Sipariş & Rezervasyon Telefon:</div>
                    <a href={`tel:${restaurantInfo.phone.replace(/[^0-9]/g, '')}`} style={{ color: 'var(--color-accent)', fontWeight: 700, fontSize: '1.1rem' }}>
                      {restaurantInfo.phone}
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.85rem' }}>
                  <Clock size={22} color="var(--color-secondary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <div style={{ fontWeight: 700, color: '#FFF', fontSize: '0.95rem' }}>Çalışma Saatleri:</div>
                    <div style={{ color: '#D6D3D1', fontSize: '0.9rem' }}>
                      Pazartesi - Cumartesi: {restaurantInfo.workingHours.weekdays} <br />
                      Pazar: {restaurantInfo.workingHours.sunday}
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Direct Action Buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <a 
                href={`https://www.google.com/maps/dir/?api=1&destination=Develi+Etli+Pide+Zeytinburnu`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary"
                style={{ width: '100%', padding: '0.85rem', fontSize: '0.95rem' }}
              >
                <Navigation size={18} />
                Yol Tarifi Al (Google Haritalar)
                <ExternalLink size={16} />
              </a>

              <a 
                href={`https://wa.me/${restaurantInfo.whatsappPhone}`}
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-secondary"
                style={{ width: '100%', padding: '0.85rem', fontSize: '0.95rem', background: 'linear-gradient(135deg, #16A34A, #15803D)' }}
              >
                <MessageCircle size={18} />
                WhatsApp Hızlı İletişim
              </a>
            </div>

          </div>

          {/* Interactive Google Maps Embed Frame */}
          <div style={{
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-lg)',
            border: '2px solid rgba(217, 119, 6, 0.3)',
            minHeight: '380px'
          }}>
            <iframe 
              title="Develi Etli Pide Google Haritalar Konumu"
              src={restaurantInfo.googleMapsEmbedUrl} 
              width="100%" 
              height="100%" 
              style={{ border: 0, minHeight: '380px' }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>

        {/* Bottom Sub-Footer Bar */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          padding: '2rem 0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.85rem',
          color: '#A8A29E'
        }}>
          <div>
            © {new Date().getFullYear()} {restaurantInfo.name}. Tüm hakları saklıdır.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <span>Zeytinburnu Veliefendi Mah.</span>
            <span>Tel: {restaurantInfo.phone}</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
