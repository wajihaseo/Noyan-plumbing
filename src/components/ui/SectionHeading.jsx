import React from 'react';

/**
 * Standard section heading with luxury typography:
 * Small-caps accent eyebrow -> Display Serif H2 -> Refined supporting body copy.
 */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className = '',
}) {
  const isCentered = align === 'center';

  return (
    <div
      className={`section-heading ${className}`}
      style={{
        textAlign: isCentered ? 'center' : 'left',
        marginBottom: 'var(--space-64)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: isCentered ? 'center' : 'flex-start',
      }}
    >
      {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
      {title && (
        <h2
          style={{
            marginBottom: description ? 'var(--space-16)' : 0,
            color: 'var(--color-ink)',
          }}
        >
          {title}
        </h2>
      )}
      {description && (
        <p
          style={{
            fontSize: '1.05rem',
            color: 'var(--color-ink-muted)',
            lineHeight: 1.65,
            marginLeft: isCentered ? 'auto' : 0,
            marginRight: isCentered ? 'auto' : 0,
          }}
        >
          {description}
        </p>
      )}
    </div>
  );
}
