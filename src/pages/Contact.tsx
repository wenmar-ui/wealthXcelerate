import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    // Inject the LeadConnector embed script once
    if (!document.getElementById('lc-form-embed-script')) {
      const script = document.createElement('script');
      script.id = 'lc-form-embed-script';
      script.src = 'https://link.msgsndr.com/js/form_embed.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": "https://wealthxcelerate.com/contact",
        "url": "https://wealthxcelerate.com/contact",
        "name": "Contact WealthXcelerate",
        "description": "Connect with the WealthXcelerate team for executive consultations, speaking requests, or media inquiries."
      },
      {
        "@type": "LocalBusiness",
        "name": "WealthXcelerate",
        "image": "https://wealthxcelerate.com/logo-dark.png",
        "telephone": "419-782-2500",
        "email": "media@wealthxcelerate.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "2014 Baltimore Street",
          "addressLocality": "Defiance",
          "addressRegion": "OH",
          "postalCode": "43512",
          "addressCountry": "US"
        },
        "url": "https://wealthxcelerate.com"
      }
    ]
  };

  return (
    <div style={{ background: 'transparent', color: 'hsl(var(--foreground))', minHeight: '100vh' }}>
      <SEO 
        title="Contact WealthXcelerate | Consultations & Media Inquiries" 
        description="Connect with Ray Lewis, Dennis M. Postema, and the WealthXcelerate team. Located at 2014 Baltimore St, Defiance OH or call 419-782-2500." 
        url="https://wealthxcelerate.com/contact"
        structuredData={structuredData}
      />
      <Navbar />

      {/* ── HERO SECTION ── */}
      <section className="contact-hero" style={{ paddingTop: '160px', paddingBottom: '80px', position: 'relative', overflow: 'hidden' }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span style={{ 
                fontSize: '14px', 
                fontWeight: 800, 
                textTransform: 'uppercase', 
                letterSpacing: '0.2em', 
                color: '#fff',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                padding: '0.5rem 1rem',
                borderRadius: '4px',
                display: 'inline-block',
                marginBottom: '1.5rem'
              }}>
                Reach Out
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="contact-title"
              style={{ 
                fontSize: 'clamp(1.5rem, 6.5vw, 6.5rem)', 
                fontWeight: 400, 
                lineHeight: 1.1, 
                letterSpacing: '-0.03em',
                margin: '0 0 1.5rem 0',
                color: 'hsl(var(--foreground))'
              }}
            >
              Start Your Financial <span style={{ color: '#64af03' }}>Transformation.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="contact-hero-desc"
              style={{ fontSize: '22px', color: 'hsl(var(--muted-foreground))', lineHeight: 1.6, fontWeight: 300 }}
            >
              Whether you're looking for speaking engagements, media inquiries, or to begin building your legacy blueprint, our team is ready.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section style={{ paddingBottom: '120px', position: 'relative', zIndex: 1 }}>
        <div className="container">
          <div className="mobile-stack contact-container" style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(280px, 0.8fr) minmax(520px, 1.2fr)',
            gap: '4rem',
            alignItems: 'start'
          }}>
            
            {/* Left: Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="contact-info-section"
              style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}
            >
              <div>
                <h3 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '1rem', color: 'hsl(var(--foreground))' }}>Get in Touch</h3>
                <p className="contact-getintouch-desc" style={{ color: 'hsl(var(--muted-foreground))', lineHeight: 1.6, marginBottom: '2rem', fontSize: '14px' }}>
                  The WealthXcelerate blueprint isn't for everyone. It's for those ready to take absolute control of their legacy. Contact us to schedule an executive consultation.
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(100, 175, 3, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64af03', flexShrink: 0 }}>
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '0.25rem', color: 'hsl(var(--foreground))' }}>Headquarters</h4>
                    <p style={{ color: 'hsl(var(--muted-foreground))', lineHeight: 1.5, fontSize: '14px' }}>
                      WealthXcelerate<br />
                      2014 Baltimore Street<br />
                      Defiance, OH 43512
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(100, 175, 3, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64af03', flexShrink: 0 }}>
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '0.25rem', color: 'hsl(var(--foreground))' }}>Direct Line</h4>
                    <p style={{ color: 'hsl(var(--muted-foreground))', lineHeight: 1.5, fontSize: '14px' }}>
                      419-782-2500 24/7
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(100, 175, 3, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64af03', flexShrink: 0 }}>
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '0.25rem', color: 'hsl(var(--foreground))' }}>Email</h4>
                    <p style={{ color: 'hsl(var(--muted-foreground))', lineHeight: 1.5, fontSize: '14px' }}>
                      media@wealthxcelerate.com
                    </p>
                  </div>
                </div>

                <div className="contact-logo-panel" style={{
                  marginTop: '1rem',
                  minHeight: '220px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <img
                    src="/logo-white.png"
                    alt="WealthXcelerate"
                    style={{
                      width: '100%',
                      maxWidth: '320px',
                      height: 'auto',
                      display: 'block',
                      filter: 'drop-shadow(0 18px 34px rgba(0, 0, 0, 0.35))'
                    }}
                  />
                </div>
              </div>
            </motion.div>

            {/* Right: LeadConnector Embedded Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{
                borderRadius: '1.5rem',
                overflow: 'hidden',
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(100, 175, 3, 0.35)',
                padding: '0.75rem',
                boxShadow: '0 0 40px rgba(100, 175, 3, 0.05)'
              }}
            >
              <iframe
                src="https://api.leadconnectorhq.com/widget/form/U3qschksecbcYg4a6RvV"
                style={{ width: '100%', height: '860px', border: 'none', borderRadius: '8px', display: 'block' }}
                id="inline-U3qschksecbcYg4a6RvV"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="New Leads Opt-in"
                data-height="860"
                data-layout-iframe-id="inline-U3qschksecbcYg4a6RvV"
                data-form-id="U3qschksecbcYg4a6RvV"
                title="New Leads Opt-in"
              />
            </motion.div>
            
          </div>
        </div>
      </section>

      <Footer />
      <style>{`
        @media (max-width: 768px) {
          .contact-hero {
            padding-top: 100px !important;
            padding-bottom: 40px !important;
          }
          .contact-container {
            gap: 2.5rem !important;
            grid-template-columns: 1fr !important;
          }
          .contact-title {
            font-size: 2.5rem !important;
          }
          .contact-info-section {
            gap: 2rem !important;
          }
          .contact-logo-panel {
            min-height: 160px !important;
            padding: 1.5rem !important;
          }
          .contact-hero-desc, .contact-getintouch-desc {
            text-wrap: balance;
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;
