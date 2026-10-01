import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

/**
 * Elevated Service Card component.
 * Features 16:10 or 4:3 aspect ratio image at top with gentle hover zoom,
 * clean typography below, and an intuitive direct enquiry action.
 */
export default function ServiceCard({
  service,
  onSelectService,
  primaryCtaLabel = 'Enquire',
}) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <article
      className="card-base"
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        backgroundColor: 'var(--color-surface)',
      }}
    >
      <div
        className="img-cover-wrapper"
        style={{
          width: '100%',
          aspectRatio: '16 / 10',
          position: 'relative',
        }}
      >
        {!imageFailed && service.imageUrl ? (
          <img
            src={service.imageUrl}
            alt={service.imageAlt || service.title}
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
              backgroundColor: 'var(--color-surface-alt)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--color-accent)',
              padding: 'var(--space-24)',
              textAlign: 'center',
            }}
          >
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem' }}>
              {service.title}
            </span>
          </div>
        )}
      </div>

      <div
        style={{
          padding: 'var(--space-32)',
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          justifyContent: 'space-between',
        }}
      >
        <div>
          <h3
            style={{
              marginBottom: 'var(--space-12)',
              fontSize: '1.35rem',
              color: 'var(--color-ink)',
            }}
          >
            {service.title}
          </h3>
          <p
            style={{
              fontSize: '0.98rem',
              lineHeight: 1.6,
              color: 'var(--color-ink-muted)',
              marginBottom: 'var(--space-24)',
            }}
          >
            {service.description}
          </p>
        </div>

        <div>
          <a
            href="#contact"
            onClick={() => onSelectService && onSelectService(service.title)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 'var(--space-8)',
              fontSize: '0.92rem',
              fontWeight: 600,
              color: 'var(--color-primary)',
              letterSpacing: '0.01em',
              transition: 'gap var(--transition-fast)',
            }}
            className="service-card-link"
          >
            <span>{primaryCtaLabel}</span>
            <ArrowUpRight size={18} style={{ color: 'var(--color-accent)' }} />
          </a>
        </div>
      </div>
    </article>
  );
}
