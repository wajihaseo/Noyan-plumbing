import React from 'react';
import SectionHeading from './ui/SectionHeading.jsx';
import { business } from '../config/business.js';

/**
 * Testimonials Component:
 * Rendered ONLY if real testimonials exist in business.testimonials.
 * If none provided, this component safely returns null without leaving any filler.
 */
export default function Testimonials() {
  const testimonials = business.testimonials || [];

  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  return (
    <section
      id="testimonials"
      className="section-padding"
      style={{
        backgroundColor: 'var(--color-surface-alt)',
        borderTop: '1px solid var(--color-border-subtle)',
      }}
    >
      <div className="container">
        <SectionHeading
          eyebrow="Client Feedback"
          title="What Local Homeowners Say"
          align="center"
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'var(--space-32)',
          }}
        >
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="card-base"
              style={{
                padding: 'var(--space-32)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <blockquote
                style={{
                  fontStyle: 'italic',
                  fontSize: '1.05rem',
                  lineHeight: 1.6,
                  color: 'var(--color-ink)',
                  marginBottom: 'var(--space-24)',
                }}
              >
                "{t.quote}"
              </blockquote>
              <div>
                <div style={{ fontWeight: 600, color: 'var(--color-ink)' }}>
                  {t.author}
                </div>
                {t.location && (
                  <div style={{ fontSize: '0.88rem', color: 'var(--color-ink-muted)' }}>
                    {t.location}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
