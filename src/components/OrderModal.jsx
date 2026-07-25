import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, Send, ShoppingBag, MapPin, Phone } from 'lucide-react';
import { restaurantInfo } from '../data/restaurantData';

export default function OrderModal({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, onClearCart }) {
  const [customerName, setCustomerName] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [orderNote, setOrderNote] = useState('');

  if (!isOpen) return null;

  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleSendWhatsApp = () => {
    if (cartItems.length === 0) return;

    let text = `Merhaba Develi Etli Pide Zeytinburnu!\n\n`;
    text += `*SİPARİŞ DETAYLARI:*\n`;
    cartItems.forEach((item, index) => {
      text += `${index + 1}. ${item.name} (${item.quantity} Adet) - ${item.price * item.quantity} TL\n`;
    });
    text += `\n*TOPLAM TUTAR:* ${totalPrice} TL\n`;
    
    if (customerName) text += `*Ad Soyad:* ${customerName}\n`;
    if (customerAddress) text += `*Teslimat Adresi:* ${customerAddress}\n`;
    if (orderNote) text += `*Sipariş Notu:* ${orderNote}\n`;
    
    text += `\nLütfen siparişimi onaylayıp teslimat süresini bildiriniz. Teşekkürler!`;

    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${restaurantInfo.whatsappPhone}?text=${encodedText}`, '_blank');
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
        maxWidth: '560px',
        maxHeight: '90vh',
        borderRadius: 'var(--radius-lg)',
        background: '#FFFFFF',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        boxShadow: '0 20px 40px rgba(0,0,0,0.25)'
      }}>
        
        {/* Modal Header */}
        <div style={{
          padding: '1.25rem 1.5rem',
          borderBottom: '1px solid var(--color-border)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: 'var(--pr-sand-100)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <div style={{ background: 'var(--color-primary)', color: '#FFF', padding: '0.4rem', borderRadius: '50%' }}>
              <ShoppingBag size={20} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, margin: 0, color: 'var(--pr-stone-900)' }}>
                Sipariş & Fiyat Hesaplayıcı
              </h3>
              <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
                Zeytinburnu Şubesi Doğrudan Sipariş
              </span>
            </div>
          </div>

          <button onClick={onClose} style={{ color: 'var(--color-text-muted)', padding: '0.25rem' }}>
            <X size={24} />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div style={{ padding: '1.5rem', overflowY: 'auto', flex: 1 }}>
          
          {cartItems.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '3rem 1rem', color: 'var(--color-text-muted)' }}>
              <ShoppingBag size={48} color="var(--color-border)" style={{ marginBottom: '1rem' }} />
              <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--pr-stone-800)' }}>Sipariş Sepetiniz Boş</h4>
              <p style={{ fontSize: '0.9rem' }}>Menümüzden dilediğiniz pideleri siparişinize ekleyerek doğrudan WhatsApp üzerinden gönderebilirsiniz.</p>
            </div>
          ) : (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-text-muted)' }}>
                  Eklenen Ürünler ({cartItems.length})
                </span>
                <button onClick={onClearCart} style={{ fontSize: '0.8rem', color: 'var(--color-primary)', fontWeight: 600 }}>
                  Sepeti Temizle
                </button>
              </div>

              {/* Items List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '1.5rem' }}>
                {cartItems.map(item => (
                  <div key={item.id} style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--pr-sand-100)',
                    border: '1px solid var(--color-border)'
                  }}>
                    <div style={{ flex: 1, paddingRight: '0.75rem' }}>
                      <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--pr-stone-900)' }}>{item.name}</div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--color-secondary)', fontWeight: 600 }}>{item.price * item.quantity} TL</div>
                    </div>

                    {/* Quantity controls */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <button 
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        style={{ background: '#FFF', border: '1px solid var(--color-border)', borderRadius: '4px', width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                      >
                        <Minus size={14} />
                      </button>
                      <span style={{ fontWeight: 700, minWidth: '20px', textAlign: 'center' }}>{item.quantity}</span>
                      <button 
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        style={{ background: '#FFF', border: '1px solid var(--color-border)', borderRadius: '4px', width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                      >
                        <Plus size={14} />
                      </button>
                      <button 
                        onClick={() => onRemoveItem(item.id)}
                        style={{ color: '#EF4444', marginLeft: '0.4rem', padding: '0.2rem' }}
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Delivery Details Form */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', borderTop: '1px solid var(--color-border)', paddingTop: '1.25rem' }}>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--pr-stone-900)' }}>Teslimat / İletişim Bilgileri (Opsiyonel)</h4>
                
                <input 
                  type="text"
                  placeholder="Adınız Soyadınız"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  style={{
                    padding: '0.65rem 0.9rem',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--color-border)',
                    fontSize: '0.9rem',
                    outline: 'none'
                  }}
                />

                <input 
                  type="text"
                  placeholder="Teslimat Adresiniz (Mahalle, Sokak, Daire)"
                  value={customerAddress}
                  onChange={(e) => setCustomerAddress(e.target.value)}
                  style={{
                    padding: '0.65rem 0.9rem',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--color-border)',
                    fontSize: '0.9rem',
                    outline: 'none'
                  }}
                />

                <textarea 
                  rows={2}
                  placeholder="Sipariş Notu (örn: Acılı olsun, limon fazla olsun)"
                  value={orderNote}
                  onChange={(e) => setOrderNote(e.target.value)}
                  style={{
                    padding: '0.65rem 0.9rem',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--color-border)',
                    fontSize: '0.9rem',
                    outline: 'none',
                    resize: 'none'
                  }}
                />
              </div>

            </div>
          )}

        </div>

        {/* Modal Footer */}
        {cartItems.length > 0 && (
          <div style={{
            padding: '1.25rem 1.5rem',
            borderTop: '1px solid var(--color-border)',
            background: 'var(--pr-sand-100)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--color-text-muted)' }}>Toplam Tutar:</span>
              <span style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-primary)' }}>{totalPrice} TL</span>
            </div>

            <button 
              onClick={handleSendWhatsApp}
              className="btn-primary"
              style={{
                width: '100%',
                padding: '0.9rem',
                fontSize: '1rem',
                background: 'linear-gradient(135deg, #16A34A, #15803D)'
              }}
            >
              <Send size={20} />
              WhatsApp İle Siparişi Gönder
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
