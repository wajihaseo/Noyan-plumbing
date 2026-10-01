import React from 'react';
import { business } from '../config/business.js';
import { Phone, MapPin, ArrowUp } from 'lucide-react';

/**
 * Footer Component:
 * Calm, minimal, luxury finish.
 * Includes wordmark, contact details, address, navigation links, and copyright.
 */
export default function Footer() {
  const { name, tagline, fullAddress, phone, displayPhone, navigation, footer } = business;
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        backgroundColor: '#1E0E23',
        color: '#FFFFFF',
        paddingTop: 'var(--space-64)',
        paddingBottom: 'var(--space-48)',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      <div className="container">
        {/* Main Footer Row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: 'var(--space-48)',
            marginBottom: 'var(--space-64)',
          }}
          className="footer-grid"
        >
          {/* Brand Info */}
          <div>
            <a
              href="#"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.6rem',
                fontWeight: 600,
                color: '#FFFFFF',
                letterSpacing: '-0.02em',
                display: 'inline-block',
                marginBottom: 'var(--space-12)',
              }}
            >
              {name}
            </a>
            <p
              style={{
                color: '#D8CFDD',
                fontSize: '0.95rem',
                lineHeight: 1.6,
                marginBottom: 'var(--space-24)',
                maxWidth: '38ch',
              }}
            >
              {tagline}. {footer.note}
            </p>
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 'var(--space-8)',
                color: '#D8CFDD',
                fontSize: '0.88rem',
              }}
            >
              <MapPin size={16} style={{ color: '#EAD7BD', marginTop: '3px', flexShrink: 0 }} />
              <span>{fullAddress}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{
                fontSize: '0.82rem',
                textTransform: 'uppercase',
                letterSpacing: '0.14em',
                color: '#EAD7BD',
                marginBottom: 'var(--space-24)',
                fontWeight: 600,
              }}
            >
              Navigation
            </h4>
            <ul
              style={{
                listStyle: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-12)',
              }}
            >
              {navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    style={{
                      fontSize: '0.92rem',
                      color: '#D8CFDD',
                      transition: 'color var(--transition-fast)',
                    }}
                    className="footer-link"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact Callout */}
          <div>
            <h4
              style={{
                fontSize: '0.82rem',
                textTransform: 'uppercase',
                letterSpacing: '0.14em',
                color: '#EAD7BD',
                marginBottom: 'var(--space-24)',
                fontWeight: 600,
              }}
            >
              Direct Contact
            </h4>
            <p style={{ color: '#D8CFDD', fontSize: '0.9rem', marginBottom: 'var(--space-16)' }}>
              Call directly for bookings or plumbing enquiries across Norwich and Freethorpe.
            </p>
            {phone && (
              <a
                href={`tel:${phone}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 'var(--space-8)',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  color: '#FFFFFF',
                  padding: '10px 16px',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                }}
              >
                <Phone size={18} style={{ color: '#EAD7BD' }} />
                <span>{displayPhone || phone}</span>
              </a>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            paddingTop: 'var(--space-32)',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 'var(--space-16)',
            fontSize: '0.85rem',
            color: '#A89CAE',
          }}
        >
          <div>
            © {currentYear} {name}. {footer.rights}
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 'var(--space-8)',
              color: '#D8CFDD',
              fontSize: '0.85rem',
              transition: 'color var(--transition-fast)',
            }}
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .footer-grid {
            grid-template-columns: 2fr 1fr 1.5fr !important;
          }
        }
        .footer-link:hover {
          color: #FFFFFF !important;
        }
      `}</style>
    </footer>
  );
}
