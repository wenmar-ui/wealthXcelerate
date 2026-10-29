import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { 
  ArrowRight, 
  Brain, 
  TrendingUp, 
  Zap, 
  FileText, 
  ShieldCheck, 
  School, 
  PieChart, 
  Scroll, 
  Building2, 
  Users 
} from 'lucide-react';
import AnimatedLogo from './AnimatedLogo';
import AnimatedCounter from './AnimatedCounter';
import HoverGalaxyCard from './HoverGalaxyCard';
import HoverGalaxyButton from './HoverGalaxyButton';
import HoverGalaxyLink from './HoverGalaxyLink';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } }
};

const Hero: React.FC = () => {
  


  const pillars = [
    { title: "Money Mindset", desc: "Transform how you think about wealth.", icon: <Brain size={18} /> },
    { title: "Income & Cash Flow", desc: "Maximize earnings. Keep\u00a0more.", icon: <TrendingUp size={18} /> },
    { title: "Debt Strategy", desc: "Good debt vs bad debt \u2014 eliminate what\u00a0hurts.", icon: <Zap size={18} /> },
    { title: "Taxes", desc: "Tax efficiency that keeps your money\u00a0working.", icon: <FileText size={18} /> },
    { title: "Insurance", desc: "Protect your family and\u00a0assets.", icon: <ShieldCheck size={18} /> },
    { title: "College Planning", desc: "Fund education without destroying\u00a0retirement.", icon: <School size={18} /> },
    { title: "Retirement", desc: "Income that lasts \u2014\nnot just a\u00a0number.", icon: <PieChart size={18} /> },
    { title: "Legacy", desc: "Pass on a blueprint, not just\u00a0money.", icon: <Scroll size={18} /> },
    { title: "Life Insurance as Banking", desc: "Your own personal banking\u00a0system.", icon: <Building2 size={18} /> },
    { title: "Legacy/Estate Planning", desc: "Protect and transfer your wealth for\u00a0generations.", icon: <Users size={18} /> },
  ];

  return (
    <>
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        paddingTop: '6.5rem',
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 1, width: '100%', flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          
          {/* ── CENTERED HERO CONTENT ── */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            gap: '2.5rem',
            width: '100%'
          }}>
            
            {/* Massive Centered Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              style={{
                width: '100%',
                maxWidth: '900px', // Made significantly bigger
                position: 'relative',
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              <div style={{
                position: 'absolute',
                width: '150%',
                height: '150%',
                top: '-25%',
                left: '-25%',
                background: 'radial-gradient(circle, rgba(100, 175, 3, 0.05) 0%, transparent 65%)',
                pointerEvents: 'none',
                zIndex: 0
              }} />
              <AnimatedLogo style={{ width: '100%', position: 'relative', zIndex: 1 }} />
            </motion.div>

            {/* Subtext - Desktop */}
            <motion.p className="desktop-only" variants={fadeUp} initial="hidden" animate="show" style={{
              fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
              color: 'hsl(var(--foreground))',
              lineHeight: 1.6,
              fontWeight: 300,
              maxWidth: '800px',
              margin: '0 auto'
            }}>
              A complete financial blueprint led by{' '}
              <span style={{ color: '#64af03', fontWeight: 600 }}>Ray Lewis</span>
              {' '}and{' '}
              <span style={{ color: '#64af03', fontWeight: 600, whiteSpace: 'nowrap' }}>Dennis M. Postema</span>
              <br />
              <span style={{ opacity: 0.7, fontSize: '22px' }}>
                build wealth, protect your future, live on your terms.
              </span>
            </motion.p>

            {/* Subtext - Mobile */}
            <motion.div className="mobile-only" variants={fadeUp} initial="hidden" animate="show" style={{
              display: 'none', // Overridden by CSS to flex
              flexDirection: 'column', 
              gap: '0.5rem',
              color: 'hsl(var(--foreground))',
              lineHeight: 1.4,
              fontWeight: 300,
              margin: '0 auto',
              textAlign: 'center',
              padding: '0 1rem'
            }}>
              <p style={{ fontSize: 'clamp(0.85rem, 4vw, 1.1rem)', margin: 0, lineHeight: 1.5, whiteSpace: 'nowrap' }}>
                A complete financial blueprint led by <span style={{ color: '#64af03', fontWeight: 600 }}>Ray Lewis</span> &amp;<br />
                <span style={{ color: '#64af03', fontWeight: 600 }}>Dennis M. Postema</span>. <span style={{ opacity: 0.7 }}>Build wealth, protect your</span><br />
                <span style={{ opacity: 0.7 }}>future, live on your&nbsp;terms.</span>
              </p>
            </motion.div>

            {/* Buttons */}
            <motion.div variants={fadeUp} initial="hidden" animate="show" style={{ marginTop: '1rem', display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <HoverGalaxyLink 
                to="/contact" 
                className="btn btn-primary hero-cta-btn"
                style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '0.75rem', 
                  padding: '1.2rem 3rem', 
                  fontSize: '14px', 
                  textDecoration: 'none',
                  borderRadius: '8px' 
                }}
                whileHover={{ scale: 1.05, backgroundColor: '#64af03', color: '#ffffff' }}
              >
                Start your transformation <ArrowRight className="hero-cta-icon" size={20} />
              </HoverGalaxyLink>

              <a href="https://www.pmg1.com/" target="_blank" rel="noopener noreferrer" className="hero-cta-wrapper" style={{ textDecoration: 'none' }}>
                <HoverGalaxyButton
                  className="btn btn-outline hero-cta-btn"
                  style={{ 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    gap: '0.75rem', 
                    padding: '1.2rem 3rem', 
                    fontSize: '14px', 
                    textDecoration: 'none',
                    border: '2px solid #64af03',
                    color: '#64af03',
                    borderRadius: '8px',
                    fontWeight: 600,
                    transition: 'all 0.3s ease',
                    backgroundColor: 'transparent'
                  }}
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(100, 175, 3, 0.1)', color: '#64af03' }}
                >
                  Find a WealthX Coach
                </HoverGalaxyButton>
              </a>
            </motion.div>

          </div>
        </div>

        {/* ── MARQUEE: Strategic Keywords ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          style={{
            width: '100%',
            overflow: 'hidden',
            padding: '2rem 0',
            position: 'relative',
            whiteSpace: 'nowrap',
          }}
        >
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            style={{ display: 'inline-flex', gap: '4rem', alignItems: 'center' }}
          >
            {Array(4).fill(["STRATEGY", "LEGACY", "GROWTH", "TRANSFORMATION", "WEALTH", "FREEDOM", "IMPACT", "ARCHITECTURE"]).flat().map((word, i) => (
              <span key={i} style={{
                fontSize: '0.85rem',
                fontWeight: 800,
                color: i % 2 === 0 ? 'hsl(87 10% 40%)' : '#64af03',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                display: 'flex',
                alignItems: 'center',
                gap: '4rem'
              }}>
                {word}
                <span style={{ color: 'rgba(100, 175, 3, 0.3)' }}>•</span>
              </span>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ── NEW SECTION: Static Reveal (Desktop Only) ── */}
      <div className="desktop-only" style={{ padding: '4rem 0', background: 'transparent' }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
          overflow: 'hidden',
          paddingTop: '3rem'
        }}>
          
          <div style={{ 
            width: '100%', 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            gap: '1rem',
            flex: 1,
            justifyContent: 'flex-start'
          }}>
            {/* "FINANCIAL" */}
            <h2
              style={{
                color: '#64af03',
                letterSpacing: '0.04em',
                fontSize: 'clamp(2rem, 10vw, 104px)',
                lineHeight: 0.85,
                fontWeight: 400,
                margin: 0,
                textAlign: 'center',
              }}
            >
              FINANCIAL
            </h2>

            {/* "TRANSFORMATION." */}
            <h2
              style={{
                color: 'hsl(87 97% 45%)',
                letterSpacing: '0.04em',
                fontSize: 'clamp(2rem, 10vw, 104px)',
                lineHeight: 0.85,
                fontWeight: 400,
                margin: 0,
                textAlign: 'center',
              }}
            >
              TRANSFORMATION.
            </h2>
            
            {/* Quote */}
            <p
              style={{
                fontSize: '22px',
                fontStyle: 'italic',
                fontWeight: 400,
                color: 'hsl(var(--foreground))',
                marginTop: '1.5rem',
                fontFamily: '"Casanova Serif Display", serif',
                textAlign: 'center',
                padding: '0 2rem',
                whiteSpace: 'nowrap'
              }}
            >
              <span style={{ color: '#64af03' }}>"</span>This isn't advice, it's a blueprint for your life.<span style={{ color: '#64af03' }}>"</span>
            </p>

            {/* 10 Transformation Pillars Grid */}
            <div
              className="pillars-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(5, 1fr)',
                gap: '1rem',
                width: '100%',
                maxWidth: '1200px',
                marginTop: '1.5rem',
                padding: '0 2rem'
              }}
            >
              {pillars.map((p, i) => (
                <HoverGalaxyCard key={i} className="pillar-item" particleCount={15} transition={{ duration: 0.3 }} style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center', 
                  textAlign: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem 0.5rem',
                  backgroundColor: 'rgba(255,255,255,0.03)',
                  borderRadius: '1rem',
                  border: '1px solid rgba(255,255,255,0.08)',
                  minHeight: '130px',
                  justifyContent: 'center'
                }}>
                  <div style={{ color: '#64af03' }}>{p.icon}</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', alignItems: 'center' }}>
                    <span style={{ 
                      fontSize: '0.85rem', 
                      fontWeight: 800, 
                      textTransform: 'uppercase', 
                      letterSpacing: '0.05em',
                      lineHeight: 1.2,
                      color: 'hsl(var(--foreground))'
                    }}>
                      {p.title}
                    </span>
                    <p style={{ 
                      fontSize: '0.75rem', 
                      color: 'hsl(87 20% 40%)', 
                      margin: '0 auto', 
                      lineHeight: 1.4,
                      maxWidth: '160px',
                      whiteSpace: 'pre-line'
                    }}>
                      {p.desc}
                    </p>
                  </div>
                </HoverGalaxyCard>
              ))}
            </div>
          </div>

          {/* ── Stats Pill: Connects to WealthXcelerate Way ── */}
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '4rem' }}>
            <div
              style={{
                width: 'calc(100% - 4rem)',
                maxWidth: '1100px',
                background: '#000000',
                borderTopLeftRadius: '60px',
                borderTopRightRadius: '60px',
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
                padding: '1.5rem 1.5rem',
                zIndex: 20,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', gap: '1.5rem', flexWrap: 'wrap' }}>
                {[
                  { to: 10, suffix: 'K+', desc: 'Dedicated members worldwide achieving financial sovereignty.', delay: 0.2 },
                  { to: 2, prefix: '$', suffix: 'B+', desc: 'Total assets preserved and multiplied through our blueprint.', delay: 0.35 },
                  { to: 15, suffix: '+', desc: 'Years of specialized expertise in legacy wealth architecture.', delay: 0.5 }
                ].map((s, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', flex: '1 1 300px', justifyContent: 'center' }}>
                    <div style={{ padding: '0 1rem', textAlign: 'center' }}>
                      <p style={{ fontSize: '3rem', fontWeight: 400, color: '#64af03', lineHeight: 1, margin: '0 0 0.5rem 0', letterSpacing: '-0.02em' }}>
                        <AnimatedCounter to={s.to} prefix={s.prefix} suffix={s.suffix} delay={s.delay} duration={2} />
                      </p>
                      <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', margin: '0 auto', lineHeight: 1.5, fontWeight: 300, maxWidth: '240px' }}>{s.desc}</p>
                    </div>
                    {i < 2 && (
                      <div style={{ width: '1px', height: '60px', background: 'hsl(0 0% 100% / 0.1)', flexShrink: 0, display: 'none' }} className="desktop-divider" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .desktop-divider {
            display: block !important;
          }
        }
        @media (max-width: 768px) {
          .pillars-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 0.75rem !important;
            margin-top: 2rem !important;
          }
          .pillar-item {
            padding: 1rem 0.5rem !important;
          }
          .pillar-item span {
            font-size: 0.6rem !important;
          }
          .hero-cta-btn {
            padding: 0.8rem 1.5rem !important;
            font-size: 0.8rem !important;
            width: 100% !important;
            min-height: 54px !important;
            justify-content: center !important;
          }
          .hero-cta-icon {
            width: 16px !important;
            height: 16px !important;
          }
          .hero-cta-wrapper {
            width: 100% !important;
            display: flex !important;
          }
        }
      `}</style>
    </>
  );
};

export default Hero;
