import React, { useState, useEffect } from 'react';
import SectionHeading from './ui/SectionHeading.jsx';
import Button from './ui/Button.jsx';
import { business } from '../config/business.js';
import { Phone, MapPin, Navigation, Clock, CheckCircle, Mail, MessageSquare } from 'lucide-react';

/**
 * Contact Section:
 * Conversion-focused with address, phone callout, directions action,
 * and a styled, fully functional lead capture form.
 */
export default function Contact({ selectedService }) {
  const { contact, fullAddress, phone, displayPhone, whatsapp, email, openingHours, googleMapsUrl, services } = business;

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    postcode: '',
    service: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Update selected service if parent component triggered it
  useEffect(() => {
    if (selectedService) {
      setFormData((prev) => ({ ...prev, service: selectedService }));
    }
  }, [selectedService]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorMessage('Please provide your name and phone number so we can reach you.');
      return;
    }
    // Simulate successful form handling
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      postcode: '',
      service: '',
      message: '',
    });
    setIsSubmitted(false);
    setErrorMessage('');
  };

  return (
    <section
      id="contact"
      className="section-padding"
      style={{
        backgroundColor: 'var(--color-bg)',
      }}
    >
      <div className="container">
        <SectionHeading
          eyebrow={contact.eyebrow}
          title={contact.title}
          description={contact.description}
          align="center"
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: 'var(--space-48)',
            maxWidth: '1100px',
            margin: '0 auto',
          }}
          className="contact-layout"
        >
          {/* Contact Details & Direct Actions */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-24)',
            }}
          >
            {/* Direct Phone Card */}
            {phone && (
              <div
                className="card-base"
                style={{
                  padding: 'var(--space-32)',
                  backgroundColor: 'var(--color-primary)',
                  color: '#FFFFFF',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-12)', marginBottom: 'var(--space-12)' }}>
                  <Phone size={22} style={{ color: '#EAD7BD' }} />
                  <span style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#EAD7BD' }}>
                    Direct Telephone
                  </span>
                </div>
                <h3 style={{ color: '#FFFFFF', fontSize: '1.6rem', marginBottom: 'var(--space-12)' }}>
                  {displayPhone || phone}
                </h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.82)', fontSize: '0.95rem', marginBottom: 'var(--space-24)' }}>
                  Speak directly with your plumber for urgent callouts or immediate advice.
                </p>
                <Button
                  href={`tel:${phone}`}
                  variant="secondary"
                  style={{
                    backgroundColor: '#F5EFEB',
                    color: 'var(--color-primary)',
                    fontWeight: 600,
                  }}
                >
                  Call Now
                </Button>
              </div>
            )}

            {/* Address & Directions Card */}
            <div
              className="card-base"
              style={{
                padding: 'var(--space-32)',
                backgroundColor: 'var(--color-surface)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-12)', marginBottom: 'var(--space-12)' }}>
                <MapPin size={22} style={{ color: 'var(--color-accent)' }} />
                <span style={{ fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--color-accent)', fontWeight: 600 }}>
                  Service Address
                </span>
              </div>
              <p style={{ fontSize: '1.05rem', color: 'var(--color-ink)', fontWeight: 500, marginBottom: 'var(--space-16)' }}>
                {fullAddress}
              </p>
              <p style={{ fontSize: '0.92rem', color: 'var(--color-ink-muted)', marginBottom: 'var(--space-24)' }}>
                Serving Freethorpe, Norwich city centre, and Norfolk surrounding districts.
              </p>
              <Button
                href={googleMapsUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`}
                variant="secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Navigation size={16} />
                <span>{contact.directionsLabel}</span>
              </Button>
            </div>

            {/* Optional Channels (Render only if real data exists) */}
            {whatsapp && (
              <div
                className="card-base"
                style={{
                  padding: 'var(--space-24)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-12)' }}>
                  <MessageSquare size={20} style={{ color: '#25D366' }} />
                  <span style={{ fontWeight: 600 }}>WhatsApp Available</span>
                </div>
                <Button href={`https://wa.me/${whatsapp.replace(/[^0-9]/g, '')}`} variant="secondary" target="_blank">
                  Message on WhatsApp
                </Button>
              </div>
            )}

            {email && (
              <div
                className="card-base"
                style={{
                  padding: 'var(--space-24)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-12)',
                }}
              >
                <Mail size={20} style={{ color: 'var(--color-accent)' }} />
                <a href={`mailto:${email}`} style={{ fontWeight: 500, color: 'var(--color-primary)' }}>
                  {email}
                </a>
              </div>
            )}

            {openingHours && (
              <div
                className="card-base"
                style={{
                  padding: 'var(--space-24)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-12)',
                }}
              >
                <Clock size={20} style={{ color: 'var(--color-accent)' }} />
                <span style={{ fontSize: '0.92rem', color: 'var(--color-ink-muted)' }}>
                  {openingHours}
                </span>
              </div>
            )}
          </div>

          {/* Lead Capture Form */}
          <div
            className="card-base"
            style={{
              padding: 'var(--space-48)',
              backgroundColor: 'var(--color-surface)',
            }}
          >
            {isSubmitted ? (
              <div
                style={{
                  textAlign: 'center',
                  padding: 'var(--space-32) 0',
                }}
              >
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(120, 57, 136, 0.12)',
                    color: 'var(--color-accent)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto var(--space-24)',
                  }}
                >
                  <CheckCircle size={36} />
                </div>
                <h3 style={{ marginBottom: 'var(--space-16)', color: 'var(--color-ink)' }}>
                  Enquiry Received
                </h3>
                <p style={{ color: 'var(--color-ink-muted)', marginBottom: 'var(--space-32)', margin: '0 auto var(--space-32)' }}>
                  {contact.successMessage}
                </p>
                <Button onClick={handleReset} variant="secondary">
                  Send Another Enquiry
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div style={{ marginBottom: 'var(--space-24)' }}>
                  <h3 style={{ fontSize: '1.45rem', marginBottom: 'var(--space-8)' }}>
                    {contact.formHeading}
                  </h3>
                  <p style={{ fontSize: '0.95rem', color: 'var(--color-ink-muted)' }}>
                    {contact.formSubheading}
                  </p>
                </div>

                {errorMessage && (
                  <div
                    style={{
                      padding: '12px 16px',
                      backgroundColor: 'rgba(220, 38, 38, 0.08)',
                      border: '1px solid rgba(220, 38, 38, 0.25)',
                      borderRadius: 'var(--radius-sm)',
                      color: '#B91C1C',
                      fontSize: '0.9rem',
                      marginBottom: 'var(--space-24)',
                    }}
                  >
                    {errorMessage}
                  </div>
                )}

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: 'var(--space-16)',
                    marginBottom: 'var(--space-16)',
                  }}
                  className="form-two-col"
                >
                  {/* Name Field */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      style={{
                        display: 'block',
                        fontSize: '0.88rem',
                        fontWeight: 600,
                        color: 'var(--color-ink)',
                        marginBottom: 'var(--space-8)',
                      }}
                    >
                      Your Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Eleanor Vance"
                      required
                      style={{
                        width: '100%',
                        padding: '14px 16px',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--color-border)',
                        backgroundColor: 'var(--color-surface)',
                        color: 'var(--color-ink)',
                        fontSize: '0.95rem',
                        outline: 'none',
                      }}
                      className="form-input"
                    />
                  </div>

                  {/* Phone Field */}
                  <div>
                    <label
                      htmlFor="contact-phone"
                      style={{
                        display: 'block',
                        fontSize: '0.88rem',
                        fontWeight: 600,
                        color: 'var(--color-ink)',
                        marginBottom: 'var(--space-8)',
                      }}
                    >
                      Phone Number *
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. 07480 764027"
                      required
                      style={{
                        width: '100%',
                        padding: '14px 16px',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--color-border)',
                        backgroundColor: 'var(--color-surface)',
                        color: 'var(--color-ink)',
                        fontSize: '0.95rem',
                        outline: 'none',
                      }}
                      className="form-input"
                    />
                  </div>
                </div>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: 'var(--space-16)',
                    marginBottom: 'var(--space-16)',
                  }}
                  className="form-two-col"
                >
                  {/* Service Selection */}
                  <div>
                    <label
                      htmlFor="contact-service"
                      style={{
                        display: 'block',
                        fontSize: '0.88rem',
                        fontWeight: 600,
                        color: 'var(--color-ink)',
                        marginBottom: 'var(--space-8)',
                      }}
                    >
                      Service Required
                    </label>
                    <select
                      id="contact-service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '14px 16px',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--color-border)',
                        backgroundColor: 'var(--color-surface)',
                        color: 'var(--color-ink)',
                        fontSize: '0.95rem',
                        outline: 'none',
                      }}
                      className="form-input"
                    >
                      <option value="">Please select a service...</option>
                      {services.items.map((svc) => (
                        <option key={svc.id} value={svc.title}>
                          {svc.title}
                        </option>
                      ))}
                      <option value="General Enquiry">General Plumbing Query</option>
                    </select>
                  </div>

                  {/* Postcode */}
                  <div>
                    <label
                      htmlFor="contact-postcode"
                      style={{
                        display: 'block',
                        fontSize: '0.88rem',
                        fontWeight: 600,
                        color: 'var(--color-ink)',
                        marginBottom: 'var(--space-8)',
                      }}
                    >
                      Postcode / Village
                    </label>
                    <input
                      id="contact-postcode"
                      type="text"
                      name="postcode"
                      value={formData.postcode}
                      onChange={handleChange}
                      placeholder="e.g. NR13 or Norwich"
                      style={{
                        width: '100%',
                        padding: '14px 16px',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--color-border)',
                        backgroundColor: 'var(--color-surface)',
                        color: 'var(--color-ink)',
                        fontSize: '0.95rem',
                        outline: 'none',
                      }}
                      className="form-input"
                    />
                  </div>
                </div>

                {/* Message / Description */}
                <div style={{ marginBottom: 'var(--space-24)' }}>
                  <label
                    htmlFor="contact-message"
                    style={{
                      display: 'block',
                      fontSize: '0.88rem',
                      fontWeight: 600,
                      color: 'var(--color-ink)',
                      marginBottom: 'var(--space-8)',
                    }}
                  >
                    Brief Details of the Issue or Project
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe what needs repair or installation (e.g. dripping kitchen mixer tap, shower replacement)..."
                    style={{
                      width: '100%',
                      padding: '14px 16px',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--color-border)',
                      backgroundColor: 'var(--color-surface)',
                      color: 'var(--color-ink)',
                      fontSize: '0.95rem',
                      outline: 'none',
                      resize: 'vertical',
                    }}
                    className="form-input"
                  />
                </div>

                <Button type="submit" variant="primary" style={{ width: '100%', padding: '16px' }}>
                  {contact.submitButtonLabel}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .contact-layout {
            grid-template-columns: 1fr 1.3fr !important;
            align-items: start !important;
          }
        }
        @media (max-width: 600px) {
          .form-two-col {
            grid-template-columns: 1fr !important;
          }
        }
        .form-input:focus {
          border-color: var(--color-accent) !important;
          box-shadow: 0 0 0 3px rgba(120, 57, 136, 0.12) !important;
        }
      `}</style>
    </section>
  );
}
