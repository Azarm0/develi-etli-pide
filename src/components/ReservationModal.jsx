import React, { useState } from 'react';
import { X, Calendar, Clock, Users, User, Phone, CheckCircle } from 'lucide-react';
import { restaurantInfo } from '../data/restaurantData';

export default function ReservationModal({ isOpen, onClose }) {
  const [guests, setGuests] = useState('2 Kişi');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('18:00');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [note, setNote] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    let text = `Merhaba Develi Etli Pide Zeytinburnu!\n\n`;
    text += `*MASA REZERVASYON TALEBİ:*\n`;
    text += `*Kişi Sayısı:* ${guests}\n`;
    text += `*Tarih:* ${date || 'Bugün'}\n`;
    text += `*Saat:* ${time}\n`;
    text += `*Ad Soyad:* ${name}\n`;
    text += `*Telefon:* ${phone}\n`;
    if (note) text += `*Not:* ${note}\n`;
    text += `\nMasanın hazırlanmasını rica ederim.`;

    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${restaurantInfo.whatsappPhone}?text=${encodedText}`, '_blank');
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 1000,
      backgroundColor: 'rgba(28, 25, 23, 0.75)',
      backdropFilter: 'blur(6px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem'
    }}>
      <div className="glass-card" style={{
        width: '100%',
        maxWidth: '480px',
        borderRadius: 'var(--radius-lg)',
        background: '#FFFFFF',
        overflow: 'hidden',
        boxShadow: '0 20px 40px rgba(0,0,0,0.25)'
      }}>
        
        {/* Header */}
        <div style={{
          padding: '1.25rem 1.5rem',
          borderBottom: '1px solid var(--color-border)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: 'var(--pr-sand-100)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <div style={{ background: 'var(--color-secondary)', color: '#FFF', padding: '0.4rem', borderRadius: '50%' }}>
              <Calendar size={20} />
            </div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, margin: 0, color: 'var(--pr-stone-900)' }}>
              Masa Rezerve Et
            </h3>
          </div>

          <button onClick={onClose} style={{ color: 'var(--color-text-muted)', padding: '0.25rem' }}>
            <X size={24} />
          </button>
        </div>

        {/* Body */}
        {submitted ? (
          <div style={{ padding: '3rem 1.5rem', textAlign: 'center', color: 'var(--color-success)' }}>
            <CheckCircle size={56} style={{ marginBottom: '1rem' }} />
            <h4 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--pr-stone-900)', marginBottom: '0.5rem' }}>
              Rezervasyon Talebiniz Alındı!
            </h4>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>
              WhatsApp yönlendirmesi ile talebiniz iletilmiştir. Sizi bekliyoruz!
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--pr-stone-800)', display: 'block', marginBottom: '0.35rem' }}>
                  Kişi Sayısı
                </label>
                <select 
                  value={guests} 
                  onChange={(e) => setGuests(e.target.value)}
                  style={{ width: '100%', padding: '0.65rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', outline: 'none' }}
                >
                  <option>1 Kişi</option>
                  <option>2 Kişi</option>
                  <option>3 Kişi</option>
                  <option>4 Kişi</option>
                  <option>5-6 Kişi</option>
                  <option>Grup (7+ Kişi)</option>
                </select>
              </div>

              <div>
                <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--pr-stone-800)', display: 'block', marginBottom: '0.35rem' }}>
                  Saat
                </label>
                <select 
                  value={time} 
                  onChange={(e) => setTime(e.target.value)}
                  style={{ width: '100%', padding: '0.65rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', outline: 'none' }}
                >
                  <option>12:00</option>
                  <option>13:00</option>
                  <option>14:00</option>
                  <option>15:00</option>
                  <option>17:00</option>
                  <option>18:00</option>
                  <option>19:00</option>
                  <option>20:00</option>
                  <option>21:00</option>
                </select>
              </div>
            </div>

            <div>
              <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--pr-stone-800)', display: 'block', marginBottom: '0.35rem' }}>
                Tarih
              </label>
              <input 
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                style={{ width: '100%', padding: '0.65rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', outline: 'none' }}
              />
            </div>

            <div>
              <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--pr-stone-800)', display: 'block', marginBottom: '0.35rem' }}>
                Ad Soyad *
              </label>
              <input 
                type="text"
                required
                placeholder="Ahmet Yılmaz"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ width: '100%', padding: '0.65rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', outline: 'none' }}
              />
            </div>

            <div>
              <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--pr-stone-800)', display: 'block', marginBottom: '0.35rem' }}>
                Telefon Numarası *
              </label>
              <input 
                type="tel"
                required
                placeholder="0530 000 00 00"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                style={{ width: '100%', padding: '0.65rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', outline: 'none' }}
              />
            </div>

            <div>
              <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--pr-stone-800)', display: 'block', marginBottom: '0.35rem' }}>
                Özel İstek / Not
              </label>
              <textarea 
                rows={2}
                placeholder="Pencereli masa tercihi, çocuk sandalyesi vb."
                value={note}
                onChange={(e) => setNote(e.target.value)}
                style={{ width: '100%', padding: '0.65rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', outline: 'none', resize: 'none' }}
              />
            </div>

            <button type="submit" className="btn-secondary" style={{ width: '100%', padding: '0.85rem', fontSize: '1rem', marginTop: '0.5rem' }}>
              Rezervasyon Talebini Gönder
            </button>

          </form>
        )}

      </div>
    </div>
  );
}
