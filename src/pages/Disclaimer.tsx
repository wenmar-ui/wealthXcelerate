import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';

const Disclaimer: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://wealthxcelerate.com/disclaimer",
    "url": "https://wealthxcelerate.com/disclaimer",
    "name": "Disclaimer | WealthXcelerate",
    "description": "WealthXcelerate legal, regulatory, and educational disclaimers."
  };

  return (
    <div style={{ background: 'transparent', color: 'hsl(var(--foreground))', minHeight: '100vh' }}>
      <SEO 
        title="Disclaimer | WealthXcelerate" 
        description="WealthXcelerate legal, financial, and educational disclosures and regulatory disclaimers." 
        url="https://wealthxcelerate.com/disclaimer"
        structuredData={structuredData}
      />
      <Navbar />

      {/* ── HERO SECTION ── */}
      <section style={{ paddingTop: '160px', paddingBottom: '80px', position: 'relative', overflow: 'hidden' }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span style={{ 
                fontSize: '0.8rem', 
                fontWeight: 800, 
                textTransform: 'uppercase', 
                letterSpacing: '0.2em', 
                color: '#64af03',
                backgroundColor: 'rgba(100, 175, 3, 0.1)',
                padding: '0.5rem 1rem',
                borderRadius: '4px',
                display: 'inline-block',
                marginBottom: '1.5rem'
              }}>
                Legal
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{ 
                fontSize: 'clamp(3rem, 5vw, 4.5rem)', 
                fontWeight: 900, 
                lineHeight: 1.1, 
                letterSpacing: '-0.03em',
                margin: '0 0 1.5rem 0',
                color: 'hsl(var(--foreground))',
                textTransform: 'uppercase'
              }}
            >
              Website <span style={{ fontFamily: '"Casanova Serif Display", serif', fontStyle: 'normal', fontWeight: 400, textTransform: 'none', color: '#64af03' }}>Disclaimer</span>
            </motion.h1>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section style={{ paddingBottom: '120px', position: 'relative', zIndex: 1 }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="privacy-content"
            style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', fontSize: '1.1rem', lineHeight: 1.8, color: 'hsl(var(--muted-foreground))', fontWeight: 300 }}
          >
            <div>
              <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'hsl(var(--foreground))', marginBottom: '1rem' }}>General Disclaimer</h2>
              <p>The information provided on WealthXcelerate.com (the “Site”) is for informational and educational purposes only. All content is provided in good faith; however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.</p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'hsl(var(--foreground))', marginBottom: '1rem' }}>No Guarantees of Results</h2>
              <p>Any statements regarding success, income, personal growth, or other outcomes are examples only and are not guarantees of results. Individual results may vary significantly based on factors including, but not limited to, effort, experience, background, and individual circumstances.</p>
              <p style={{ marginTop: '1rem' }}>You acknowledge that we have not made any guarantees about the results you may achieve by using the information, products, or services provided on this Site.</p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'hsl(var(--foreground))', marginBottom: '1rem' }}>Not Professional Advice</h2>
              <p>The content on this Site does not constitute professional, financial, legal, or business advice. You should consult with a qualified professional before making any decisions based on the information provided.</p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'hsl(var(--foreground))', marginBottom: '1rem' }}>Limitation of Liability</h2>
              <p>Under no circumstance shall WealthXcelerate.com or its owners be liable for any loss or damage of any kind incurred as a result of the use of the Site or reliance on any information provided. Your use of the Site and your reliance on any information is solely at your own risk.</p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'hsl(var(--foreground))', marginBottom: '1rem' }}>External Links Disclaimer</h2>
              <p>The Site may contain links to third-party websites. We do not monitor or guarantee the accuracy or reliability of any information on these external sites.</p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'hsl(var(--foreground))', marginBottom: '1rem' }}>Testimonials Disclaimer</h2>
              <p>Testimonials and examples on the Site are individual experiences and do not guarantee that you will achieve the same or similar results.</p>
            </div>
            
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Disclaimer;
