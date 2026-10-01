import React from 'react';
import SectionHeading from './ui/SectionHeading.jsx';
import { business } from '../config/business.js';

/**
 * Why Choose Us Section:
 * 4 concise trust pillars drawn strictly from provided business parameters.
 * Uses clean editorial numbering, short titles, and straightforward owner voice.
 */
export default function WhyChooseUs() {
  const { whyChooseUs } = business;

  return (
    <section
      id="why-us"
      className="section-padding"
      style={{
        backgroundColor: 'var(--color-bg)',
      }}
    >
      <div className="container">
        <SectionHeading
          eyebrow={whyChooseUs.eyebrow}
          title={whyChooseUs.title}
          description={whyChooseUs.description}
          align="center"
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 'var(--space-32)',
          }}
          className="why-grid"
        >
          {whyChooseUs.points.map((point) => (
            <div
              key={point.number}
              className="card-base"
              style={{
                padding: 'var(--space-32)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                backgroundColor: 'var(--color-surface)',
                borderTop: '3px solid var(--color-primary)',
              }}
            >
              {/* Editorial Number */}
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.75rem',
                  fontWeight: 600,
                  color: 'var(--color-accent)',
                  lineHeight: 1,
                  marginBottom: 'var(--space-16)',
                  display: 'inline-block',
                }}
              >
                {point.number}
              </span>

              {/* Point Title */}
              <h3
                style={{
                  fontSize: '1.25rem',
                  marginBottom: 'var(--space-12)',
                  color: 'var(--color-ink)',
                }}
              >
                {point.title}
              </h3>

              {/* Point Description */}
              <p
                style={{
                  fontSize: '0.96rem',
                  lineHeight: 1.6,
                  color: 'var(--color-ink-muted)',
                }}
              >
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .why-grid {
            grid-template-columns: repeat(4, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
