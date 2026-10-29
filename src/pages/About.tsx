import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import HoverGalaxyCard from '../components/HoverGalaxyCard';
import HoverGalaxyLink from '../components/HoverGalaxyLink';

const About: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const values = [
    { title: 'Leadership', desc: 'Led by a Hall of Famer and a master strategist with 23+ years of financial dominance.' },
    { title: 'Ethics', desc: 'Your family\'s prosperity is our north star. We operate with radical transparency.' },
    { title: 'Education', desc: 'We don\'t sell products. We provide a world-class financial education blueprint.' },
    { title: 'Legacy', desc: 'Designing wealth architectures that transcend generations and borders.' }
  ];

  const fadeUp: any = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": "https://wealthxcelerate.com/about",
        "url": "https://wealthxcelerate.com/about",
        "name": "The Visionaries | WealthXcelerate",
        "description": "Meet Ray Lewis and Dennis M. Postema, RFC - the co-founders and legacy architects behind WealthXcelerate."
      },
      {
        "@type": "Person",
        "name": "Ray Lewis",
        "jobTitle": "Co-Founder & Lead Coach",
        "description": "Pro Football Hall of Famer, 2x Super Bowl Champion, and co-founder of WealthXcelerate.",
        "affiliation": { "@type": "Organization", "name": "WealthXcelerate" }
      },
      {
        "@type": "Person",
        "name": "Dennis M. Postema, RFC",
        "jobTitle": "Co-Founder & Registered Financial Consultant",
        "description": "Registered Financial Consultant, international best-selling author, and financial strategist.",
        "url": "https://dennispostema.com",
        "sameAs": ["https://www.linkedin.com/in/dennispostema"],
        "affiliation": { "@type": "Organization", "name": "WealthXcelerate" }
      }
    ]
  };

  return (
    <div style={{ background: '#000000', color: '#ffffff', minHeight: '100vh', overflowX: 'hidden' }}>
      <SEO 
        title="The Visionaries | WealthXcelerate" 
        description="Meet the architects of financial freedom: Ray Lewis and Dennis M. Postema. Experience the intersection of championship leadership and financial mastery." 
        url="https://wealthxcelerate.com/about"
        structuredData={structuredData}
      />
      
      <Navbar />

      {/* ── DRAMATIC EDITORIAL HERO ── */}
      <section style={{ 
        paddingTop: 'clamp(180px, 20vh, 250px)', 
        paddingBottom: '0',
        position: 'relative'
      }}>
        {/* Decorative background text */}
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: '25vw',
          fontWeight: 950,
          color: 'rgba(255,255,255,0.02)',
          whiteSpace: 'nowrap',
          pointerEvents: 'none',
          zIndex: 0,
          letterSpacing: '-0.05em'
        }}>
          ARCHITECTS
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              show: { transition: { staggerChildren: 0.1 } }
            }}
            style={{ textAlign: 'center' }}
          >
            <motion.p variants={fadeUp} style={{ 
              fontSize: '14px', 
              fontWeight: 800, 
              textTransform: 'uppercase', 
              letterSpacing: '0.6em', 
              color: '#fff', 
              marginBottom: '3rem'
            }}>
              The Founders & Vision
            </motion.p>
            
            <motion.h1 variants={fadeUp} style={{ 
              fontSize: 'clamp(1.5rem, 6.5vw, 6.5rem)', 
              fontWeight: 400, 
              lineHeight: 0.8, 
              margin: 0, 
              letterSpacing: '-0.07em',
              textTransform: 'uppercase'
            }}>
              Mastery.<br/>
              Legacy.<br/>
              <span style={{ 
                color: '#fff',
                display: 'block'
              }}>Impact.</span>
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/* ── THE MANIFESTO PULL-QUOTE ── */}
      <section style={{ 
        padding: '220px 0 120px',
        background: 'linear-gradient(180deg, transparent 0%, rgba(100,175,3,0.05) 50%, transparent 100%)',
        position: 'relative'
      }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="manifesto-quote-container"
            style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center', position: 'relative', padding: '0 4rem' }}
          >
            <span style={{ 
              position: 'absolute', 
              top: '-8rem', 
              left: 0, 
              width: '100%',
              textAlign: 'center',
              fontSize: '15rem', 
              color: '#64af03', 
              fontFamily: 'serif', 
              fontWeight: 900,
              opacity: 0.1, 
              lineHeight: 1, 
              pointerEvents: 'none',
              zIndex: 0,
              userSelect: 'none'
            }}>“</span>
            <p style={{ 
              fontSize: 'clamp(1.5rem, 3vw, 2.4rem)', 
              fontWeight: 300, 
              lineHeight: 1.4, 
              margin: '0', 
              fontFamily: '"Casanova Serif Display", serif',
              color: 'rgba(255,255,255,0.9)',
              position: 'relative',
              zIndex: 1
            }}>
              "We didn't build WealthXcelerate to be another financial firm. We built it to be a <span style={{ color: '#64af03', fontWeight: 600 }}>sanctuary for legacy</span> where the world's most driven individuals secure their future."
            </p>
            <div style={{ width: '60px', height: '2px', background: '#64af03', margin: '3rem auto 0', position: 'relative', zIndex: 1 }} />
          </motion.div>
        </div>
      </section>

      {/* ── THE FOUNDERS SPOTLIGHT ── */}
      <section style={{ padding: '0 0 120px' }}>
        <div className="container">
          
          {/* Ray Lewis Card */}
          <div style={{ marginBottom: '120px' }}>
            <HoverGalaxyCard 
              particleCount={30}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{}}
              transition={{ duration: 0.4 }}
              style={{
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                borderRadius: '4rem',
                padding: 'clamp(2rem, 6vw, 6rem)',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                gap: '6rem',
                alignItems: 'center',
                overflow: 'hidden',
                position: 'relative'
              }}
            >
              {/* Image side */}
              <div style={{ position: 'relative' }}>
                <div style={{
                  position: 'absolute',
                  top: '-10%',
                  left: '-10%',
                  width: '120%',
                  height: '120%',
                  background: 'radial-gradient(circle, rgba(100, 175, 3, 0.1) 0%, transparent 70%)',
                  zIndex: 0
                }} />
                <div style={{
                  borderRadius: '2.5rem',
                  overflow: 'hidden',
                  aspectRatio: '4/5',
                  position: 'relative',
                  zIndex: 1,
                  boxShadow: '0 50px 100px -30px rgba(0,0,0,0.5)'
                }}>
                  <img src="/ray-lewis.png" alt="Ray Lewis" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </div>

              {/* Text side */}
              <div style={{ position: 'relative', zIndex: 1 }}>
                <p style={{ fontSize: '14px', fontWeight: 800, color: '#fff', letterSpacing: '0.5em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>The Visionary</p>
                <h2 style={{ fontSize: 'clamp(2.5rem, 8vw, 72px)', fontWeight: 400, lineHeight: 0.9, margin: '0 0 2rem 0', letterSpacing: '-0.05em', whiteSpace: 'normal', wordBreak: 'keep-all' }}>RAY LEWIS</h2>
                <div style={{ height: '1px', width: '40px', background: 'rgba(255,255,255,0.2)', marginBottom: '2rem' }} />
                <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, marginBottom: '3rem', fontWeight: 300 }}>
                  A Pro Football Hall of Famer and 2x Super Bowl Champion. Ray brings the intensity of a champion to the world of wealth architecture, proving that leadership is the ultimate currency.
                </p>
                <Link to="/contact" style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '1rem', 
                  color: '#64af03', 
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.gap = '1.5rem';
                  e.currentTarget.style.color = 'hsl(87 97% 45%)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.gap = '1rem';
                  e.currentTarget.style.color = '#64af03';
                }}>
                  Connect with Ray <ArrowUpRight size={18} />
                </Link>
              </div>
            </HoverGalaxyCard>
          </div>

          {/* Dennis M. Postema Card */}
          <div>
            <HoverGalaxyCard 
              particleCount={30}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{}}
              transition={{ duration: 0.4 }}
              style={{
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                borderRadius: '4rem',
                padding: 'clamp(2rem, 6vw, 6rem)',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                gap: '6rem',
                alignItems: 'center',
                overflow: 'hidden',
                position: 'relative'
              }}
            >
              {/* Text side (First on mobile via grid auto order or manual flex) */}
              <div style={{ position: 'relative', zIndex: 1, order: 1 }}>
                <p style={{ fontSize: '14px', fontWeight: 800, color: '#fff', letterSpacing: '0.5em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>The Strategist</p>
                <h2 style={{ fontSize: 'clamp(2.5rem, 8vw, 72px)', fontWeight: 400, lineHeight: 0.9, margin: '0 0 2rem 0', letterSpacing: '-0.05em', whiteSpace: 'normal', wordBreak: 'keep-all' }}>DENNIS M. POSTEMA</h2>
                <div style={{ height: '1px', width: '40px', background: 'rgba(255,255,255,0.2)', marginBottom: '2rem' }} />
                <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, marginBottom: '3rem', fontWeight: 300 }}>
                  A Registered Financial Consultant and serial entrepreneur. Dennis translates complex financial landscapes into actionable blueprints for high net worth individuals worldwide.
                </p>
                <Link to="/contact" style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '1rem', 
                  color: '#64af03', 
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.gap = '1.5rem';
                  e.currentTarget.style.color = 'hsl(87 97% 45%)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.gap = '1rem';
                  e.currentTarget.style.color = '#64af03';
                }}>
                  Connect with Dennis <ArrowUpRight size={18} />
                </Link>
              </div>

              {/* Image side */}
              <div style={{ position: 'relative', order: 2 }}>
                <div style={{
                  position: 'absolute',
                  top: '-10%',
                  right: '-10%',
                  width: '120%',
                  height: '120%',
                  background: 'radial-gradient(circle, rgba(100, 175, 3, 0.1) 0%, transparent 70%)',
                  zIndex: 0
                }} />
                <div style={{
                  borderRadius: '2.5rem',
                  overflow: 'hidden',
                  aspectRatio: '4/5',
                  position: 'relative',
                  zIndex: 1,
                  boxShadow: '0 50px 100px -30px rgba(0,0,0,0.5)',
                  maxWidth: '450px',
                  margin: '0 auto'
                }}>
                  <img src="/dennis-postema.png" alt="Dennis M. Postema" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </div>
            </HoverGalaxyCard>
          </div>

        </div>
      </section>

      {/* ── THE PILLARS (ORIGINAL STYLE) ── */}
      <section style={{ 
        padding: '0 0 120px', 
        backgroundColor: 'rgba(255,255,255,0.01)', 
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderTop: '1px solid rgba(255,255,255,0.05)' 
      }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
            <h2 className="foundational-pillars-header" style={{ fontSize: '72px', fontWeight: 400, color: '#64af03', marginBottom: '1.5rem', letterSpacing: '-0.03em' }}>Our Foundational Pillars</h2>
            <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.5)', maxWidth: '700px', margin: '0 auto', lineHeight: 1.6, textWrap: 'balance' }}>
              Built on championship leadership meets decades of real-world financial expertise.
            </p>
          </div>

          <div className="pillars-grid" style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(4, 1fr)', 
            gap: '2rem' 
          }}>
            {values.map((val, i) => (
              <HoverGalaxyCard 
                key={i}
                particleCount={15}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{}}
                style={{ 
                  padding: '3rem 2rem',
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.05)',
                  borderRadius: '2.5rem',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.5rem',
                  justifyContent: 'center',
                  transition: 'background-color 0.3s ease, border-color 0.3s ease'
                }}
              >
                <h4 style={{ 
                  fontSize: '1.5rem', 
                  fontWeight: 400, 
                  color: '#64af03', 
                  textTransform: 'uppercase', 
                  margin: 0, 
                  letterSpacing: '0.02em'
                }}>
                  {val.title}
                </h4>
                <p style={{ 
                  fontSize: '1.1rem', 
                  color: 'rgba(255,255,255,0.7)', 
                  lineHeight: 1.6, 
                  margin: 0,
                  fontWeight: 300
                }}>
                  {val.desc}
                </p>
              </HoverGalaxyCard>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CALL TO ACTION ── */}
      <section style={{ padding: '0 0 200px', textAlign: 'center' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            style={{ 
              background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
              border: '1px solid rgba(255,255,255,0.05)',
              borderRadius: '5rem',
              padding: 'clamp(3rem, 8vw, 8rem)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Background Glow */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '100%',
              height: '100%',
              background: 'radial-gradient(circle, rgba(100, 175, 3, 0.1) 0%, transparent 70%)',
              pointerEvents: 'none'
            }} />

            <h2 style={{ 
              fontSize: '72px', 
              fontWeight: 400, 
              letterSpacing: '-0.06em', 
              margin: '0 0 2rem 0',
              lineHeight: 0.9,
              textTransform: 'uppercase'
            }}>
              Your Legacy<br/>
              Starts Now.
            </h2>
            <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.6)', marginBottom: '4rem', maxWidth: '500px', margin: '0 auto 4rem' }}>
              Join the elite circle of individuals who don't just dream of the future—they architect it.
            </p>
            
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <HoverGalaxyLink to="/contact" className="btn btn-outline" style={{ 
                padding: '1.5rem 3.5rem', 
                borderRadius: '8px', 
                color: 'hsl(87 97% 45%)', 
                border: '1px solid hsl(87 97% 45%)',
                backgroundColor: 'transparent',
                textDecoration: 'none', 
                fontWeight: 800, 
                fontSize: '14px',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                transition: 'all 0.3s ease',
                whiteSpace: 'nowrap'
              }}
              whileHover={{ backgroundColor: 'rgba(100, 175, 3, 0.1)', color: 'hsl(87 97% 45%)', borderColor: 'hsl(87 97% 45%)' }}
              >
                Secure Your Blueprint
              </HoverGalaxyLink>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <style>{`
        @media (max-width: 768px) {
          .pillars-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 899px) {
          .foundational-pillars-header {
            white-space: normal !important;
            word-break: keep-all;
          }
          .manifesto-quote-container {
            padding: 0 1.5rem !important;
            overflow: hidden !important;
          }
          .manifesto-quote-container span:first-child {
            display: none !important;
          }
          .manifesto-quote-container p {
            font-size: 1.35rem !important;
            line-height: 1.5 !important;
            padding: 2.5rem 0 !important;
            border-top: 1px solid rgba(100, 175, 3, 0.4);
            border-bottom: 1px solid rgba(100, 175, 3, 0.4);
            color: #fff !important;
          }
          .manifesto-quote-container p span {
            font-size: inherit !important;
          }
        }
      `}</style>
    </div>
  );
};

export default About;
