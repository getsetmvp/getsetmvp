import {
  Header,
  Hero,
  StartupStruggle,
  Results,
  TwoWeeksSection,
  ProcessSteps,
  QualityFirst,
  ProjectsBuilt,
  Pricing,
  FAQ,
  FinalCTA,
  Footer
} from '@/components';
import { SITE_CONFIG } from '@/constants';
import Script from 'next/script';

export default function Home() {
  // Create structured data for better SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": SITE_CONFIG.name,
    "description": SITE_CONFIG.description,
    "url": "https://getsetmvp.com",
    "logo": "https://getsetmvp.com/images/og-image.png",
    "sameAs": [
      // Social media profiles can be added here
    ],
    "offers": {
      "@type": "Offer",
      "name": "MVP Development",
      "description": "Custom MVP development in 2 weeks",
      "price": "979",
      "priceCurrency": "USD"
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Add JSON-LD structured data */}
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <Header />
      <Hero />
      <section id="problem">
        <StartupStruggle />
      </section>
      <Results />
      <section id="approach">
        <TwoWeeksSection />
      </section>
      <section id="process">
        <ProcessSteps />
      </section>
      <QualityFirst />
      <ProjectsBuilt />
      <section id="pricing">
        <Pricing />
      </section>
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}
