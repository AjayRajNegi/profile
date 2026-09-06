export const siteConfig = {
  name: "Ajay Raj Negi",
  shortName: "Ajay.Raj.Negi",
  role: "Full-Stack Developer",
  title: "Ajay Raj Negi — Full-Stack Developer & DevOps Engineer",
  description:
    "Portfolio of Ajay Raj Negi, a full-stack developer, DevOps engineer, and React Native developer based in India. Selected work includes Cnipbotics, Cnippet, Gaiaspace, Griya, and more.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://ajayhtml.online",
  locale: "en_IN",
  email: "ajayrajnegi1608@gmail.com",
  phoneDisplay: "+91 8433 038283",
  phoneE164: "+918433038283",
  location: "India",
  since: 2022,
  twitterHandle: "@AjayRajNegi1608",
  ogImageAlt: "Ajay Raj Negi — Full-Stack Developer based in India",
  keywords: [
    "Ajay Raj Negi",
    "Full-Stack Developer",
    "DevOps Engineer",
    "React Native Developer",
    "Next.js Developer",
    "TypeScript",
    "Software Developer India",
    "Portfolio",
  ],
  links: {
    github: "https://github.com/AjayRajNegi",
    linkedin: "https://www.linkedin.com/in/ajay-raj-negi-a3713a262/",
    twitter: "https://x.com/AjayRajNegi1608",
    resume:
      "https://drive.google.com/file/d/1a8IIX_DBw5PXjrfawo74Tf3AnQwf90aI/view",
    whatsapp: "https://wa.me/+918433038283?text=Hi%20Ajay",
  },
} as const;

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  url: siteConfig.url,
  email: siteConfig.email,
  telephone: siteConfig.phoneE164,
  jobTitle: siteConfig.role,
  description: siteConfig.description,
  image: `${siteConfig.url}/profile.jpg`,
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
  },
  sameAs: [
    siteConfig.links.github,
    siteConfig.links.linkedin,
    siteConfig.links.twitter,
  ],
  knowsAbout: [
    "Full-Stack Development",
    "DevOps",
    "React Native",
    "Next.js",
    "TypeScript",
  ],
} as const;
