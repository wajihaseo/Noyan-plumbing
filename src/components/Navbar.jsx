import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import Button from './ui/Button.jsx';
import { business } from '../config/business.js';

/**
 * Navbar Component:
 * Follows the 3-zone contract:
 * Zone 1: Single text element wordmark (Noyan plumbing) in display font.
 * Zone 2: Clean text navigation links with subtle underline/hover indicator.
 * Zone 3: Direct telephone link and primary CTA button.
 * Designed with a subtle, polished surface that ensures immediate readability
 * over the hero background without excessive glassmorphism.
 */
export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: isScrolled
          ? 'rgba(250, 248, 245, 0.96)'
          : 'rgba(250, 248, 245, 0.90)',
        backdropFilter: 'blur(10px)',
        borderBottom: isScrolled
          ? '1px solid var(--color-border)'
          : '1px solid var(--color-border-subtle)',
        transition: 'background-color var(--transition-fast), border-color var(--transition-fast)',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '76px',
          }}
        >
          {/* Zone 1: Brand Wordmark (Single text element in display serif) */}
          <a
            href="#"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.45rem',
              fontWeight: 600,
              color: 'var(--color-primary)',
              letterSpacing: '-0.02em',
              display: 'inline-block',
              whiteSpace: 'nowrap',
            }}
            onClick={closeMenu}
          >
            {business.name}
          </a>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav
            style={{
              display: 'none',
              alignItems: 'center',
              gap: 'var(--space-32)',
            }}
            className="desktop-nav"
          >
            {business.navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                style={{
                  fontSize: '0.92rem',
                  fontWeight: 500,
                  color: 'var(--color-ink)',
                  letterSpacing: '0.01em',
                  padding: 'var(--space-8) 0',
                  position: 'relative',
                }}
                className="nav-link"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action & Quick Phone (Desktop) */}
          <div
            style={{
              display: 'none',
              alignItems: 'center',
              gap: 'var(--space-16)',
            }}
            className="desktop-actions"
          >
            {business.phone && (
              <a
                href={`tel:${business.phone}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 'var(--space-8)',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  color: 'var(--color-ink)',
                  whiteSpace: 'nowrap',
                  padding: '8px 12px',
                  borderRadius: 'var(--radius-sm)',
                  transition: 'color var(--transition-fast)',
                }}
                aria-label={`Call ${business.name} at ${business.displayPhone || business.phone}`}
              >
                <Phone size={16} style={{ color: 'var(--color-accent)' }} />
                <span>{business.displayPhone || business.phone}</span>
              </a>
            )}
            <Button
              href={business.primaryCta.target}
              variant="primary"
              ariaLabel={business.primaryCta.label}
            >
              {business.primaryCta.label}
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '44px',
              height: '44px',
              borderRadius: 'var(--radius-sm)',
              color: 'var(--color-ink)',
              backgroundColor: 'var(--color-surface)',
              border: '1px solid var(--color-border-subtle)',
            }}
            className="mobile-toggle"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Panel */}
      {mobileMenuOpen && (
        <div
          style={{
            backgroundColor: 'var(--color-surface)',
            borderBottom: '1px solid var(--color-border)',
            boxShadow: 'var(--shadow-hover)',
            padding: 'var(--space-24) var(--side-padding) var(--space-32)',
          }}
          className="mobile-menu-drawer"
        >
          <nav
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-16)',
              marginBottom: 'var(--space-24)',
            }}
          >
            {business.navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                style={{
                  fontSize: '1.05rem',
                  fontWeight: 500,
                  color: 'var(--color-ink)',
                  padding: 'var(--space-8) 0',
                  borderBottom: '1px solid var(--color-border-subtle)',
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-16)',
            }}
          >
            {business.phone && (
              <a
                href={`tel:${business.phone}`}
                onClick={closeMenu}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 'var(--space-8)',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  color: 'var(--color-primary)',
                  padding: '12px',
                  backgroundColor: 'var(--color-surface-alt)',
                  borderRadius: 'var(--radius-sm)',
                }}
              >
                <Phone size={18} style={{ color: 'var(--color-accent)' }} />
                <span>{business.displayPhone || business.phone}</span>
              </a>
            )}
            <Button
              href={business.primaryCta.target}
              variant="primary"
              onClick={closeMenu}
              style={{ width: '100%' }}
            >
              {business.primaryCta.label}
            </Button>
          </div>
        </div>
      )}

      {/* Responsive Inline CSS for Desktop vs Mobile Toggle */}
      <style>{`
        @media (min-width: 900px) {
          .desktop-nav {
            display: flex !important;
          }
          .desktop-actions {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
        .nav-link:hover {
          color: var(--color-accent) !important;
        }
      `}</style>
    </header>
  );
}
