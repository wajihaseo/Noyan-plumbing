import React, { useState } from 'react';
import SectionHeading from './ui/SectionHeading.jsx';
import { business } from '../config/business.js';
import { ChevronDown } from 'lucide-react';

/**
 * FAQ Section:
 * 4 practical, domain-specific plumbing questions in an accessible accordion.
 * Returns null if no FAQ items exist in business.faq.
 */
export default function Faq() {
  const { faq } = business;
  const [openIndex, setOpenIndex] = useState(0);

  if (!faq || !faq.items || faq.items.length === 0) {
    return null;
  }

  const toggleItem = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      id="faq"
      className="section-padding"
      style={{
        backgroundColor: 'var(--color-surface-alt)',
        borderTop: '1px solid var(--color-border-subtle)',
      }}
    >
      <div className="container">
        <SectionHeading
          eyebrow={faq.eyebrow}
          title={faq.title}
          description={faq.description}
          align="center"
        />

        <div
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-16)',
          }}
        >
          {faq.items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                style={{
                  backgroundColor: 'var(--color-surface)',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--color-border-subtle)',
                  overflow: 'hidden',
                  transition: 'border-color var(--transition-fast)',
                }}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  style={{
                    width: '100%',
                    padding: 'var(--space-24)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 'var(--space-16)',
                    textAlign: 'left',
                    color: 'var(--color-ink)',
                    fontSize: '1.1rem',
                    fontWeight: 600,
                  }}
                  aria-expanded={isOpen}
                >
                  <span style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.01em' }}>
                    {item.question}
                  </span>
                  <ChevronDown
                    size={20}
                    style={{
                      color: 'var(--color-accent)',
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform var(--transition-fast)',
                      flexShrink: 0,
                    }}
                  />
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: '0 var(--space-24) var(--space-24)',
                      color: 'var(--color-ink-muted)',
                      fontSize: '0.98rem',
                      lineHeight: 1.65,
                    }}
                  >
                    <p style={{ maxWidth: '100%' }}>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
