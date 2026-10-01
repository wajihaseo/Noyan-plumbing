import React from 'react';

/**
 * Reusable Button component matching the luxury design system.
 * Supports primary, secondary, outline-light, and accent variants.
 * Automatically renders as an anchor <a> if `href` is provided.
 */
export default function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  type = 'button',
  className = '',
  target,
  rel,
  ariaLabel,
  ...props
}) {
  const variantClass = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    'outline-light': 'btn-outline-light',
    accent: 'btn-accent',
  }[variant] || 'btn-primary';

  const combinedClasses = `btn ${variantClass} ${className}`.trim();

  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        onClick={onClick}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : rel}
        aria-label={ariaLabel}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={combinedClasses}
      onClick={onClick}
      aria-label={ariaLabel}
      {...props}
    >
      {children}
    </button>
  );
}
