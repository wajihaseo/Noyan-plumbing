import React, { useState } from 'react';
import SectionHeading from './ui/SectionHeading.jsx';
import Button from './ui/Button.jsx';
import { business } from '../config/business.js';
import { MapPin, CheckCircle2 } from 'lucide-react';

/**
 * About Section:
 * Refined two-column presentation (image one side, narrative the other).
 * Calm, experienced tone focused on careful domestic service and local roots in Freethorpe & Norwich.
 */
export default function About() {
  const { about, primaryCta, fullAddress } = business;
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <section
      id="about"
      className="section-padding"
      style={{
        backgroundColor: 'var(--color-surface-alt)',
        borderTop: '1px solid var(--color-border-subtle)',
        borderBottom: '1px solid var(--color-border-subtle)',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: 'var(--space-64)',
            alignItems: 'center',
          }}
          className="about-grid"
        >
          {/* Left Column: Visual Asset with Floating Badge */}
          <div
            style={{
              position: 'relative',
            }}
          >
            <div
              className="img-cover-wrapper"
              style={{
                borderRadius: 'var(--radius-md)',
                aspectRatio: '4 / 3',
                boxShadow: 'var(--shadow-resting)',
              }}
            >
              {!imageFailed && about.imageUrl ? (
                <img
                  src={about.imageUrl}
                  alt={about.imageAlt}
                  className="img-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onError={() => setImageFailed(true)}
                />
              ) : (
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'var(--color-surface)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 'var(--space-32)',
                    color: 'var(--color-primary)',
                  }}
                >
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem' }}>
                    {business.name} · Norwich
                  </span>
                </div>
              )}
            </div>

            {/* Quiet Location Badge */}
            <div
              style={{
                position: 'absolute',
                bottom: '-20px',
                right: '24px',
                backgroundColor: 'var(--color-primary)',
                color: '#FFFFFF',
                padding: '14px 22px',
                borderRadius: 'var(--radius-sm)',
                boxShadow: 'var(--shadow-hover)',
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-12)',
              }}
              className="about-location-badge"
            >
              <MapPin size={20} style={{ color: '#EAD7BD' }} />
              <div>
                <div style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#EAD7BD' }}>
                  {about.badgeLabel}
                </div>
                <div style={{ fontSize: '0.92rem', fontWeight: 600 }}>
                  {about.badgeNumber} · Norfolk
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Values */}
          <div>
            <SectionHeading
              eyebrow={about.eyebrow}
              title={about.title}
              align="left"
              className="about-heading"
            />

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-16)',
                marginBottom: 'var(--space-32)',
              }}
            >
              {about.paragraphs.map((p, idx) => (
                <p key={idx} style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                  {p}
                </p>
              ))}
            </div>

            {/* Address callout */}
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 'var(--space-12)',
                padding: 'var(--space-16) var(--space-24)',
                backgroundColor: 'var(--color-surface)',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--color-border-subtle)',
                marginBottom: 'var(--space-32)',
                maxWidth: '560px',
              }}
            >
              <CheckCircle2 size={18} style={{ color: 'var(--color-accent)', marginTop: '3px', flexShrink: 0 }} />
              <div style={{ fontSize: '0.9rem', color: 'var(--color-ink)' }}>
                <strong>Registered Base:</strong> {fullAddress}
              </div>
            </div>

            <Button href={primaryCta.target} variant="primary">
              {primaryCta.label}
            </Button>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 960px) {
          .about-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: var(--space-64) !important;
          }
        }
        @media (max-width: 640px) {
          .about-location-badge {
            position: static !important;
            margin-top: var(--space-16);
          }
        }
      `}</style>
    </section>
  );
}
