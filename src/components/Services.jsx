import React from 'react';
import SectionHeading from './ui/SectionHeading.jsx';
import ServiceCard from './ui/ServiceCard.jsx';
import { business } from '../config/business.js';

/**
 * Services Section:
 * Elevated layout with large 16:10 image cards, gentle hover zoom,
 * 3 columns on desktop, 1 on mobile, consistent spacing.
 */
export default function Services({ onSelectService }) {
  const { services, primaryCta } = business;

  return (
    <section
      id="services"
      className="section-padding"
      style={{
        backgroundColor: 'var(--color-bg)',
      }}
    >
      <div className="container">
        <SectionHeading
          eyebrow={services.eyebrow}
          title={services.title}
          description={services.description}
          align="center"
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: 'var(--space-32)',
          }}
          className="services-grid"
        >
          {services.items.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onSelectService={onSelectService}
              primaryCtaLabel={primaryCta.label}
            />
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .services-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .services-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
