import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TransformationSection from '../components/TransformationSection';
import MobileTransformationHeader from '../components/MobileTransformationHeader';
import MagazineSection from '../components/MagazineSection';
import BookSection from '../components/BookSection';
import Testimonials from '../components/Testimonials';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const Home: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://wealthxcelerate.com/#website",
        "url": "https://wealthxcelerate.com",
        "name": "WealthXcelerate",
        "description": "Faith-based financial movement and legacy architecture platform led by Ray Lewis and Dennis M. Postema, RFC."
      },
      {
        "@type": "Organization",
        "@id": "https://wealthxcelerate.com/#organization",
        "name": "WealthXcelerate",
        "url": "https://wealthxcelerate.com",
        "logo": "https://wealthxcelerate.com/logo-dark.png",
        "description": "A complete financial blueprint for wealth, protection, and generational legacy.",
        "founders": [
          { "@type": "Person", "name": "Ray Lewis" },
          { "@type": "Person", "name": "Dennis M. Postema, RFC" }
        ],
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "2014 Baltimore Street",
          "addressLocality": "Defiance",
          "addressRegion": "OH",
          "postalCode": "43512",
          "addressCountry": "US"
        }
      }
    ]
  };

  return (
    <div style={{ background: 'transparent' }}>
      <SEO 
        title="WealthXcelerate | Faith-Based Financial & Legacy Blueprint"
        description="Transform your financial future with WealthXcelerate. Led by Ray Lewis and Dennis M. Postema, RFC. Faith, leadership, ethics, education, and legacy."
        url="https://wealthxcelerate.com"
        structuredData={structuredData} 
      />
      <Navbar />
      <main>
        <Hero />
        
        {/* Desktop Sequential Layout */}
        <div className="desktop-only" style={{ position: 'relative', zIndex: 10, backgroundColor: 'hsl(var(--background))' }}>
          <TransformationSection />
          <MagazineSection />
          <BookSection />
          <Testimonials />
          <CTASection />
        </div>

        {/* Mobile Sequential Layout (Hidden on Desktop) */}
        <div className="mobile-only" style={{ flexDirection: 'column', overflow: 'hidden' }}>
          <MobileTransformationHeader />
          <TransformationSection isMobile={true} />
          <MagazineSection isMobile={true} />
          <BookSection isMobile={true} />
          <Testimonials />
          <CTASection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
