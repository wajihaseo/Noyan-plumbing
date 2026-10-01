/**
 * Single source of truth for all business data, copy, imagery, and theme tokens.
 * A non-technical owner can edit this file to update the entire site.
 */

export const business = {
  // Brand Identity
  name: "Noyan plumbing",
  tagline: "Reliable Solutions for Every Plumbing Need",
  brandStyle: "Luxury",
  businessType: "Local Plumbing Specialist",
  
  // Location & Contact
  city: "Norwich",
  area: "Freethorpe & Greater Norwich",
  fullAddress: "90 The Common, Freethorpe, Norwich, Norfolk, United Kingdom, NR13 3LT",
  phone: "+447480764027",
  displayPhone: "+44 7480 764027",
  whatsapp: "", // Left blank as not provided in initial brief
  email: "", // Left blank as not provided in initial brief
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=90+The+Common,+Freethorpe,+Norwich,+Norfolk,+NR13+3LT",
  openingHours: "", // Omitted cleanly if not specified
  
  // Call to Actions
  primaryCta: {
    label: "Get Quote",
    target: "#contact",
  },
  secondaryCta: {
    label: "View Services",
    target: "#services",
  },

  // Color Palette
  colors: {
    primary: "#3E1F47",
    primaryHover: "#2C1333",
    secondary: "#F5EFEB",
    accent: "#783988",
    ink: "#18111B",
    inkMuted: "#5E5564",
    bg: "#FAF8F5",
    surfaceAlt: "#F3ECE4",
  },

  // Navigation Links
  navigation: [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Why Us", href: "#why-us" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],

  // Hero Section
  hero: {
    eyebrow: "Norwich & Norfolk · Local Plumbing",
    headline: "Reliable Solutions for Every Plumbing Need",
    subheadline: "Based in Freethorpe, we deliver careful repairs and high-finish installations across Norwich and surrounding Norfolk villages.",
    trustText: "Direct local service · Freethorpe & Norwich area",
    imageUrl: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Modern luxury bathroom with elegant fixtures and pristine finish",
  },

  // Services Section
  services: {
    eyebrow: "Our Expertise",
    title: "Dedicated Plumbing Services",
    description: "Every installation and repair is carried out with precision, clean workmanship, and durable components.",
    items: [
      {
        id: "leak-detection",
        title: "Plumbing Leak Detection",
        description: "Accurate tracing and isolation of hidden pipe leaks behind walls, under floorboards, and around fittings.",
        imageUrl: "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&w=1600&q=80",
        imageAlt: "Clean water flow and precision plumbing inspection",
      },
      {
        id: "pipe-repair",
        title: "Pipe Repair",
        description: "Permanent repairs and pipe renewals for bursts, corroded lines, and noisy joints with minimal disruption.",
        imageUrl: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=1600&q=80",
        imageAlt: "Craftsman inspecting copper plumbing pipework",
      },
      {
        id: "tap-repair-installation",
        title: "Tap Repair & Installation",
        description: "Repairing persistent drips or fitting contemporary designer mixer taps with seamless water connections.",
        imageUrl: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1600&q=80",
        imageAlt: "Modern designer bathroom tap and polished basin",
      },
      {
        id: "toilet-repair-installation",
        title: "Toilet Repair & Installation",
        description: "Fixing fill valves, overflow faults, and flushing mechanisms, or installing complete modern sanitary units.",
        imageUrl: "https://images.unsplash.com/photo-1585909694668-0a6e0dd986b1?auto=format&fit=crop&w=1600&q=80",
        imageAlt: "Pristine luxury bathroom sanitary installation",
      },
      {
        id: "shower-repair-installation",
        title: "Shower Repair & Installation",
        description: "Thermostatic mixer valve servicing, pressure balancing, showerhead replacement, and full cubicle setups.",
        imageUrl: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=1600&q=80",
        imageAlt: "Rainfall shower head and luxury tiling",
      },
      {
        id: "drain-unblocking",
        title: "Drain Unblocking",
        description: "Clearing stubborn blockages in sinks, showers, and waste lines swiftly to restore free-flowing drainage.",
        imageUrl: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=80",
        imageAlt: "Immaculate stone basin with clear running water",
      },
    ],
  },

  // About Section
  about: {
    eyebrow: "About Noyan Plumbing",
    title: "Careful Craftsmanship, Right on Your Doorstep",
    paragraphs: [
      "Operating from 90 The Common in Freethorpe, Noyan plumbing provides residential plumbing services across Norwich and the surrounding Norfolk communities.",
      "We believe that trade work in your home should be calm, courteous, and carried out with genuine pride. We arrive promptly, diagnose the issue thoroughly, and take the time to protect your floors and surfaces.",
      "Whether it is an unexpected leak requiring urgent isolation or a planned upgrade to your bathroom fixtures, you receive direct communication from a qualified local professional from start to finish."
    ],
    imageUrl: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Architectural luxury bathroom showing immaculate finish and detail",
    badgeNumber: "NR13",
    badgeLabel: "Freethorpe & Norwich Based",
  },

  // Why Choose Us Section
  whyChooseUs: {
    eyebrow: "The Standards We Uphold",
    title: "Why Local Homeowners Rely on Us",
    description: "Straightforward communication and enduring quality on every callout.",
    points: [
      {
        number: "01",
        title: "Direct Local Contact",
        description: "Speak directly with your plumber, not an impersonal dispatch centre. Clear answers and realistic arrival windows.",
      },
      {
        number: "02",
        title: "Precision & Lasting Fixes",
        description: "We use quality brass fittings and durable parts to ensure your repairs hold properly for years to come.",
      },
      {
        number: "03",
        title: "Transparent Quotations",
        description: "Clear explanation of the work required and upfront pricing before any pipe is cut or part replaced.",
      },
      {
        number: "04",
        title: "Respect for Your Space",
        description: "We wear protective overshoes, use clean dust sheets, and always leave your kitchen or bathroom spotless.",
      },
    ],
  },

  // Testimonials (Omitted cleanly if none provided in prompt)
  testimonials: [],

  // FAQ Section (Clean, relevant, helpful for plumbing clients)
  faq: {
    eyebrow: "Common Questions",
    title: "Everything You Need to Know",
    description: "Clear answers about callouts, coverage areas, and booking a quote.",
    items: [
      {
        question: "Which areas in Norwich and Norfolk do you cover?",
        answer: "We are based at 90 The Common in Freethorpe and travel throughout Norwich, Acle, Brundall, Blofield, and nearby Norfolk villages.",
      },
      {
        question: "How quickly can you attend to a plumbing leak?",
        answer: "For active leaks, we prioritize same-day callouts wherever possible. Call +44 7480 764027 right away so we can advise you on shutting off the main isolation valve before we arrive.",
      },
      {
        question: "How does the quote process work?",
        answer: "You can submit details through our online quote form or give us a quick call. For standard fixture replacements and repairs, we can often provide an upfront estimate straight away.",
      },
      {
        question: "Do you supply the replacement parts and fixtures?",
        answer: "Yes, we carry a stock of quality valves, pipework, and common fittings in our van. For taps and shower units, we can supply premium options or fit models you have already chosen.",
      },
    ],
  },

  // Contact Section
  contact: {
    eyebrow: "Get In Touch",
    title: "Request a Prompt Quote",
    description: "Let us know what you need assistance with, or call directly for immediate questions.",
    formHeading: "Send a Quote Enquiry",
    formSubheading: "We typically respond within a few hours on business days.",
    phonePrompt: "Prefer to call?",
    directionsLabel: "View on Google Maps",
    submitButtonLabel: "Send Enquiry",
    successMessage: "Thank you for reaching out. We have received your request and will contact you shortly.",
  },

  // Footer
  footer: {
    note: "Reliable residential plumbing and installation in Norwich, Freethorpe, and wider Norfolk.",
    rights: "All rights reserved.",
  },
};
