import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import HoverGalaxyButton from '../components/HoverGalaxyButton';

const TVMedia: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://wealthxcelerate.com/tv",
        "url": "https://wealthxcelerate.com/tv",
        "name": "WealthX TV & Media | WealthXcelerate",
        "description": "Exclusive television segments, athlete interviews, leadership streams, and financial insights led by Ray Lewis and Dennis M. Postema."
      },
      {
        "@type": "MediaObject",
        "name": "WealthX TV & Motivation Streaming",
        "url": "https://stream.motivationandsuccess.com/",
        "description": "High-octane motivation and financial intelligence content streaming platform."
      }
    ]
  };

  return (
    <div style={{ background: 'transparent', color: 'hsl(var(--foreground))', minHeight: '100vh' }}>
      <SEO 
        title="WealthX TV & Media | WealthXcelerate" 
        description="Stream exclusive financial television segments, athlete stories, and motivational leadership content from Ray Lewis and Dennis M. Postema." 
        url="https://wealthxcelerate.com/tv"
        structuredData={structuredData}
      />
      <Navbar />
      
      {/* ── HERO SECTION ── */}
      <section style={{ position: 'relative', paddingTop: '160px', paddingBottom: '80px', overflow: 'hidden' }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              style={{ fontSize: '14px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.4em', color: '#fff', marginBottom: '1.5rem' }}
            >
              The Media Hub
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              style={{ 
                fontSize: 'clamp(1.5rem, 6.5vw, 6.5rem)', 
                fontWeight: 400, 
                lineHeight: 1.1, 
                letterSpacing: '-0.03em',
                margin: '0'
              }}
            >
              <span style={{ color: 'hsl(var(--primary))' }}>WealthX</span> <span style={{ color: '#fff', fontStyle: 'normal', fontFamily: '"Casanova Serif Display", serif' }}>TV</span>
            </motion.h1>
          </div>
                    <motion.div 
            initial={{ opacity: 0, scale: 0.98, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ 
              position: 'relative', 
              width: '100%', 
              aspectRatio: '16/9', 
              borderRadius: '2rem', 
              overflow: 'hidden', 
              backgroundColor: '#000', 
              boxShadow: '0 40px 100px rgba(0,0,0,0.5)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid rgba(255,255,255,0.05)',
              minHeight: '400px'
            }}
          >
            {/* Background with both founders */}
            <div style={{ position: 'absolute', inset: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', opacity: 1 }}>
              <div style={{ overflow: 'hidden' }}>
                <img src="/ray-lewis.png" alt="Ray Lewis" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
              </div>
              <div style={{ overflow: 'hidden' }}>
                <img src="/dennis-postema.png" alt="Dennis M. Postema" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
              </div>
            </div>
            
            {/* Overlay Gradient - Vignette style to keep center clear */}
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle, transparent 20%, rgba(0,0,0,0.6) 100%)' }} />
 
            {/* Content */}
            <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', padding: '2rem' }}>
              <div style={{ width: '80%', maxWidth: '240px', margin: '0 auto 1.5rem' }}>
                <img src="/logo-dark.png" alt="WealthXcelerate Logo" style={{ width: '100%', height: 'auto', filter: 'brightness(0) invert(1)' }} />
              </div>
              <h2 style={{ fontSize: 'clamp(2rem, 6vw, 5rem)', fontWeight: 400, color: '#64af03', textTransform: 'uppercase', letterSpacing: '0.15em', margin: 0, lineHeight: 1, textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>Coming Soon</h2>
              <p style={{ fontSize: 'clamp(0.7rem, 2vw, 1.2rem)', color: '#fff', marginTop: '1rem', letterSpacing: '0.4em', textTransform: 'uppercase', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>Streaming the transformation</p>
            </div>
          </motion.div>
        </div>
      </section>
 
      {/* ── CALL TO ACTION SECTION ── */}
      <section style={{ padding: '80px 0', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{ maxWidth: '700px', margin: '0 auto' }}
          >
            <p style={{ fontSize: '14px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.4em', color: '#fff', marginBottom: '1.5rem' }}>
              Streaming Transformation
            </p>
            <h2 style={{ fontSize: '72px', fontWeight: 400, marginBottom: '1.25rem', color: '#64af03', textTransform: 'uppercase', lineHeight: 1, whiteSpace: 'nowrap' }}>
              Watch WealthX TV
            </h2>
            <p style={{ fontSize: '1.1rem', color: 'hsl(var(--muted-foreground))', marginBottom: '2.5rem', lineHeight: 1.6 }}>
              Exclusive interviews, financial education, athlete stories, faith-driven leadership, and behind-the-scenes access to the movement.
            </p>
            <a href="https://stream.motivationandsuccess.com/" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block' }}>
              <HoverGalaxyButton
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(100, 175, 3, 0.1)', color: 'hsl(87 97% 45%)' }}
                whileTap={{ scale: 0.98 }}
                className="btn btn-outline"
                style={{ 
                  padding: '1rem 3rem', 
                  fontSize: '14px', 
                  borderRadius: '8px', 
                  fontWeight: 700,
                  color: 'hsl(87 97% 45%)',
                  border: '1px solid hsl(87 97% 45%)',
                  backgroundColor: 'transparent',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  transition: 'all 0.2s ease'
                }}
              >
                Watch now
              </HoverGalaxyButton>
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TVMedia;
