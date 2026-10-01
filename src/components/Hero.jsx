import React from 'react';
import Button from './ui/Button.jsx';
import { business } from '../config/business.js';
import { MapPin, Phone } from 'lucide-react';

/**
 * Hero Section:
 * Full-height (min-height: 90vh) with an atmospheric, luxury backdrop.
 * Clean, restrained single tonal overlay for crisp text contrast.
 * High-hierarchy typography: small caps eyebrow -> large confident H1 -> concise supporting copy -> dual CTAs.
 */
export default function Hero() {
  const { hero, primaryCta, secondaryCta, phone, displayPhone } = business;

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '92vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '120px',
        paddingBottom: 'var(--space-64)',
        backgroundColor: '#1E0E23',
        overflow: 'hidden',
      }}
    >
      {/* Background Image Container */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
        }}
      >
        <img
          src={hero.imageUrl}
          alt={hero.imageAlt}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 40%',
          }}
          loading="eager"
          referrerPolicy="no-referrer"
        />
        {/* Single Tonal Overlay (Deep plum/ink gradient for pristine legibility) */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(135deg, rgba(30, 14, 35, 0.90) 0%, rgba(38, 17, 44, 0.82) 45%, rgba(24, 11, 28, 0.65) 100%)',
          }}
        />
      </div>

      {/* Content Container */}
      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 2,
        }}
      >
        <div
          style={{
            maxWidth: '780px',
            color: '#FFFFFF',
          }}
        >
          {/* Eyebrow */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 'var(--space-8)',
              fontSize: '0.82rem',
              fontWeight: 600,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#EAD7BD', // Warm luxury beige
              marginBottom: 'var(--space-24)',
            }}
          >
            <MapPin size={15} style={{ color: '#EAD7BD' }} />
            <span>{hero.eyebrow}</span>
          </div>

          {/* H1 Headline */}
          <h1
            style={{
              color: '#FFFFFF',
              marginBottom: 'var(--space-24)',
              lineHeight: 1.08,
            }}
          >
            {hero.headline}
          </h1>

          {/* Supporting Copy */}
          <p
            style={{
              fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)',
              lineHeight: 1.6,
              color: 'rgba(255, 255, 255, 0.85)',
              marginBottom: 'var(--space-32)',
              maxWidth: '58ch',
            }}
          >
            {hero.subheadline}
          </p>

          {/* Action CTAs */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: 'var(--space-16)',
              marginBottom: 'var(--space-48)',
            }}
          >
            <Button
              href={primaryCta.target}
              variant="secondary"
              style={{
                backgroundColor: '#F5EFEB',
                color: 'var(--color-primary)',
                fontWeight: 600,
                padding: '16px 32px',
                fontSize: '1rem',
              }}
            >
              {primaryCta.label}
            </Button>

            <Button
              href={secondaryCta.target}
              variant="outline-light"
              style={{
                padding: '16px 32px',
                fontSize: '1rem',
              }}
            >
              {secondaryCta.label}
            </Button>
          </div>

          {/* Quiet Trust Line */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: 'var(--space-16)',
              paddingTop: 'var(--space-24)',
              borderTop: '1px solid rgba(255, 255, 255, 0.15)',
              fontSize: '0.88rem',
              color: 'rgba(255, 255, 255, 0.72)',
            }}
          >
            <span>{hero.trustText}</span>
            {phone && (
              <>
                <span aria-hidden="true">·</span>
                <a
                  href={`tel:${phone}`}
                  style={{
                    color: '#EAD7BD',
                    fontWeight: 500,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  <Phone size={14} />
                  <span>Call {displayPhone || phone}</span>
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
