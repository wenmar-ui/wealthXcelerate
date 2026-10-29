import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import CTASection from '../components/CTASection';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Layout, 
  TrendingUp, 
  Zap, 
  ShieldCheck, 
  Target, 
  Clock, 
  Users
} from 'lucide-react';
import HoverGalaxyCard from '../components/HoverGalaxyCard';

const University: React.FC = () => {
  const sections = [
    {
      title: "Section 1: Emotional and Psychological Attitudes",
      modules: "Modules 1-3",
      icon: <Brain className="w-8 h-8" />,
      focus: "Overcoming self-deception, leveraging personal strengths, and achieving Couples Consensus through healthy communication.",
      details: ["Honesty is the only policy", "Total responsibility", "Internal barriers to wealth"]
    },
    {
      title: "Section 2: The Budget",
      modules: "Modules 4-7",
      icon: <Layout className="w-8 h-8" />,
      focus: "A blueprint for freedom. Differentiating between primary, secondary, and tertiary needs while identifying financial waste.",
      details: ["Paying Yourself First", "Resilient financial base", "Foolproof automation"]
    },
    {
      title: "Section 3: Saving and Investing",
      modules: "Modules 8-12",
      icon: <TrendingUp className="w-8 h-8" />,
      focus: "Accumulation of wealth and the foundation of financial resilience.",
      details: ["6-12 month emergency fund", "Retirement accounts (Roth/Trad)", "Five spokes of a holistic plan"]
    },
    {
      title: "Section 4: Mastering Debt",
      modules: "Modules 13-16",
      icon: <Zap className="w-8 h-8" />,
      focus: "Challenging the idea that all debt is bad. Distinguishing between 'Good Debt' and 'Bad Debt'.",
      details: ["Tactical debt payoff", "FICO score mastery", "Mortgages & Home Equity"]
    },
    {
      title: "Section 5: Insurance",
      modules: "Modules 17-19",
      icon: <ShieldCheck className="w-8 h-8" />,
      focus: "The 'Roof' of your financial mansion — protection and legacy tools.",
      details: ["Disability insurance", "Long-term care planning", "Be your own bank"]
    }
  ];

  const features = [
    {
      title: "Ray’s Sideline Signals",
      desc: "Direct coaching moments from Ray Lewis that draw parallels between the discipline of the locker room and the boardroom.",
      icon: <Users className="text-primary" />
    },
    {
      title: "10-Minute Drills",
      desc: "High-impact, actionable exercises included in every module to turn theoretical insight into immediate practice.",
      icon: <Clock className="text-primary" />
    },
    {
      title: "Holistic Approach",
      desc: "An integrated system that coordinates spending, saving, investing, insuring, and future planning.",
      icon: <Target className="text-primary" />
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOccupationalProgram",
        "@id": "https://wealthxcelerate.com/university",
        "url": "https://wealthxcelerate.com/university",
        "name": "WealthXcelerate University",
        "description": "A comprehensive 19-module financial training curriculum across 5 core sections: Mindset, Budgeting, Investing, Debt, and Insurance.",
        "provider": {
          "@type": "Organization",
          "name": "WealthXcelerate",
          "url": "https://wealthxcelerate.com"
        },
        "numberOfLessons": 19
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is WealthXcelerate University?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "WealthXcelerate University is an integrated 19-module financial training program co-founded by Ray Lewis and Dennis M. Postema, RFC. It teaches practical budgeting, debt elimination, investing, insurance, and generational legacy."
            }
          },
          {
            "@type": "Question",
            "name": "What topics are covered in the 19 modules?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The program covers 5 core sections: 1. Psychological Attitudes & Couples Consensus, 2. Budgeting & Paying Yourself First, 3. Saving & Investing (Roth/Trad/5 Spokes), 4. Mastering Debt & FICO Scores, and 5. Insurance & Legacy Protection."
            }
          }
        ]
      }
    ]
  };

  return (
    <div style={{ backgroundColor: 'hsl(var(--background))', minHeight: '100vh' }}>
      <SEO 
        title="WealthXcelerate University | 19-Module Financial Blueprint"
        description="Complete 19-module financial training program co-founded by Ray Lewis and Dennis M. Postema, RFC. Master budgeting, debt, investments, and legacy."
        url="https://wealthxcelerate.com/university"
        structuredData={structuredData}
      />
      <Navbar />

      <main>
        {/* --- HERO SECTION --- */}
        <section style={{ 
          padding: 'clamp(100px, 15vh, 160px) 0 0', 
          position: 'relative', 
          overflow: 'hidden',
          backgroundColor: 'hsl(var(--background))'
        }}>
          <div className="container" style={{ position: 'relative', zIndex: 10 }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '1.5rem' }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span style={{ fontSize: '14px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#fff' }}>
                  The Ultimate Financial Movement
                </span>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="wealthxcelerate-title"
                style={{ 
                  fontSize: 'clamp(1.5rem, 6.5vw, 6.5rem)', 
                  fontWeight: 400, 
                  lineHeight: 0.9, 
                  textTransform: 'uppercase',
                  color: 'hsl(var(--foreground))'
                }}
              >
                Wealth<span style={{ color: '#64af03' }}>X</span>celerate
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                style={{ 
                  fontSize: 'clamp(1rem, 2.5vw, 1.4rem)', 
                  maxWidth: '800px', 
                  fontWeight: 300,
                  color: 'hsl(var(--muted-foreground))',
                  lineHeight: 1.5,
                  padding: '0 1rem'
                }}
              >
                Financing Your Life for <span style={{ fontWeight: 700, color: '#64af03' }}>Infinite Financial Potential</span>. 
                A faith-based blueprint developed by Ray Lewis and Dennis&nbsp;M.&nbsp;Postema.
              </motion.p>
            </div>

            {/* Founders Visual */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.6 }}
              style={{ 
                marginTop: '4rem', 
                display: 'grid', 
                gridTemplateColumns: 'repeat(2, 1fr)', 
                gap: '2rem',
                maxWidth: '1200px',
                margin: '4rem auto 0'
              }}
              className="mobile-stack founders-grid"
            >
              <div className="founder-card" style={{ 
                position: 'relative', 
                borderRadius: '2rem', 
                overflow: 'hidden', 
                backgroundColor: '#f0f0f0', 
                border: '1px solid rgba(0,0,0,0.05)',
                aspectRatio: '1 / 1.2'
              }}>
                <img 
                  src="/ray-lewis.png" 
                  alt="Ray Lewis" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', filter: 'grayscale(0.2)' }}
                />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: 'clamp(1.5rem, 4vw, 2.5rem)', background: 'linear-gradient(to top, #000000, transparent)', color: 'white' }}>
                  <h3 style={{ color: 'white', margin: 0, fontSize: '50px', fontWeight: 400, lineHeight: 1, letterSpacing: '-0.05em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>Ray Lewis</h3>
                  <p style={{ color: '#64af03', margin: '0.5rem 0 0 0', fontSize: '22px', fontWeight: 600 }}>NFL Legend & Lead Coach</p>
                </div>
              </div>
              <div className="founder-card" style={{ 
                position: 'relative', 
                borderRadius: '2rem', 
                overflow: 'hidden', 
                backgroundColor: '#e8e8e8', 
                border: '1px solid rgba(0,0,0,0.05)',
                aspectRatio: '1 / 1.2'
              }}>
                <img 
                  src="/dennis-postema.png" 
                  alt="Dennis M. Postema" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', filter: 'grayscale(0.2)' }}
                />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: 'clamp(1.5rem, 4vw, 2.5rem)', background: 'linear-gradient(to top, #000000, transparent)', color: 'white' }}>
                  <h3 style={{ color: 'white', margin: 0, fontSize: '50px', fontWeight: 400, lineHeight: 1, letterSpacing: '-0.05em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>Dennis M. Postema</h3>
                  <p style={{ color: '#64af03', margin: '0.5rem 0 0 0', fontSize: '22px', fontWeight: 600 }}>Financial Expert & Founder</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* --- REDESIGNED PHILOSOPHY SECTION: THE MONUMENTAL BLUEPRINT --- */}
        <section style={{ 
          padding: '120px 0 0', 
          backgroundColor: '#000', 
          position: 'relative',
          overflow: 'hidden',
          borderTop: '1px solid rgba(255,255,255,0.05)',
          borderBottom: '1px solid rgba(255,255,255,0.05)'
        }}>
          {/* Background Decorative Text */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: '25vw',
            fontWeight: 900,
            color: 'rgba(100, 175, 3, 0.03)',
            whiteSpace: 'nowrap',
            pointerEvents: 'none',
            zIndex: 0,
            letterSpacing: '-0.05em'
          }}>
            TRIAD
          </div>

          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ textAlign: 'center', marginBottom: '8rem' }}>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{ 
                  fontSize: '0.85rem', 
                  fontWeight: 800, 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.5em', 
                  color: '#fff', 
                  marginBottom: '2rem' 
                }}
              >
                The Philosophy
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                style={{ 
                  color: '#64af03', 
                  fontSize: 'clamp(2.5rem, 8vw, 72px)', 
                  fontWeight: 400, 
                  textTransform: 'uppercase', 
                  margin: 0, 
                  lineHeight: 1, 
                  letterSpacing: '-0.05em' 
                }}
              >
                The Unbreakable Formula
              </motion.h2>
            </div>

            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: '1fr 1.2fr', 
              gap: '6rem', 
              alignItems: 'center' 
            }} className="mobile-stack">
              
              {/* Monumental Pillars Side */}
              <div className="triad-container" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {['Faith', 'Family', 'Finance'].map((item, idx) => (
                  <motion.div 
                    key={item}
                    className="triad-item"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: idx * 0.2 }}
                    style={{ 
                      display: 'flex', 
                      alignItems: 'center',
                      gap: '2rem',
                      padding: '2rem',
                      background: 'rgba(255,255,255,0.02)',
                      borderRadius: '1.5rem',
                      border: '1px solid rgba(255,255,255,0.05)',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                  >
                    <span className="triad-text" style={{ 
                      fontSize: 'clamp(1rem, 4vw, 2.5rem)', 
                      fontWeight: 400, 
                      textTransform: 'uppercase', 
                      letterSpacing: '0.05em', 
                      color: '#fff',
                      fontFamily: '"Casanova Serif Display", serif',
                      paddingLeft: '3rem'
                    }}>
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Manifesto Side */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="philosophy-section-container"
                style={{ 
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)', 
                  padding: 'clamp(2rem, 5vw, 4.5rem)', 
                  borderRadius: '3rem', 
                  border: '1px solid rgba(255,255,255,0.08)',
                  backdropFilter: 'blur(20px)',
                  position: 'relative'
                }}
              >
                <span style={{ 
                  position: 'absolute', 
                  top: '-4rem', 
                  left: '-1rem', 
                  fontSize: '12rem', 
                  color: '#64af03', 
                  fontFamily: 'serif', 
                  fontWeight: 900,
                  opacity: 0.1, 
                  lineHeight: 1, 
                  pointerEvents: 'none',
                  zIndex: 0,
                  userSelect: 'none'
                }}>“</span>
                
                <p style={{ fontSize: '1.2rem', lineHeight: 1.6, color: '#fff', fontWeight: 300, marginBottom: '2.5rem', position: 'relative', zIndex: 1 }}>
                  "WealthXcelerate is designed to redefine financial education through faith-based leadership, integrity, and empowerment. 
                  This course bridges the gap between financial knowledge and consistent action overcoming what we call <span style={{ color: '#64af03', fontWeight: 600 }}>financial dissonance</span>."
                </p>
                <div style={{ height: '1px', width: '60px', background: 'rgba(100, 175, 3, 0.3)', marginBottom: '2.5rem', position: 'relative', zIndex: 1 }} />
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, fontWeight: 300, margin: 0, position: 'relative', zIndex: 1 }}>
                  Our goal is to help you achieve financial, emotional, and spiritual freedom through disciplined habits and a coordinated system.
                </p>
              </motion.div>

            </div>
          </div>
        </section>

        {/* --- CURRICULUM SECTION --- */}
        <section style={{ padding: '120px 0 0', backgroundColor: 'hsl(var(--background))' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
              <h2 className="roadmap-title" style={{ fontSize: '72px', fontWeight: 400, textTransform: 'uppercase', marginBottom: '1rem' }}>The Roadmap</h2>
              <p className="roadmap-subtitle" style={{ fontSize: '22px', color: 'hsl(var(--muted-foreground))' }}>19 Modules. 5 Core Sections. One Transformation.</p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {sections.map((section, index) => (
                <HoverGalaxyCard
                  key={index}
                  particleCount={30}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{}}
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    borderRadius: '2rem',
                    padding: '3rem',
                    border: '1px solid rgba(255,255,255,0.08)',
                    display: 'grid',
                    gridTemplateColumns: '80px 1fr 1.5fr',
                    gap: '2.5rem',
                    alignItems: 'center'
                  }}
                  className="mobile-stack curriculum-card"
                >
                  <div className="curriculum-icon-box" style={{ 
                    width: '80px', 
                    height: '80px', 
                    borderRadius: '1.5rem', 
                    backgroundColor: 'rgba(100, 175, 3, 0.05)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    color: '#64af03',
                    flexShrink: 0
                  }}>
                    {section.icon}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                    <span style={{ fontSize: '12px', fontWeight: 800, color: '#64af03', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                      {section.modules}
                    </span>
                    <h3 style={{ fontSize: '22px', margin: '0.5rem 0 1rem', color: 'hsl(var(--foreground))' }}>{section.title}</h3>
                    <p style={{ color: 'hsl(var(--muted-foreground))', lineHeight: 1.6, fontSize: '12px' }}>{section.focus}</p>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem' }}>
                    {section.details.map((detail, dIdx) => (
                      <div key={dIdx} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', padding: '0.65rem 0.4rem', background: 'rgba(255,255,255,0.05)', borderRadius: '1rem', color: 'hsl(var(--foreground))', minHeight: '3.5rem', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <span style={{ fontSize: '12px', fontWeight: 600, textAlign: 'center', lineHeight: '1.2' }}>{detail}</span>
                      </div>
                    ))}
                  </div>
                </HoverGalaxyCard>
              ))}
            </div>
          </div>
        </section>

        {/* --- FEATURES SECTION --- */}
        <section style={{ padding: '120px 0 0', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '3rem' }} className="mobile-stack">
              {features.map((feature, idx) => (
                <div key={idx} style={{ textAlign: 'center' }}>
                  <div style={{ 
                    width: '70px', 
                    height: '70px', 
                    borderRadius: '50%', 
                    backgroundColor: 'rgba(100, 175, 3, 0.05)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    margin: '0 auto 1.5rem'
                  }}>
                    {React.cloneElement(feature.icon as any, { size: 30 })}
                  </div>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'hsl(var(--foreground))' }}>{feature.title}</h3>
                  <p className="feature-desc" style={{ color: 'hsl(var(--muted-foreground))', lineHeight: 1.6, fontSize: '14px' }}>{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>

      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .founders-grid {
            gap: 1rem !important;
            margin-top: 2rem !important;
          }
          .founder-card {
            /* Handled by aspectRatio in style prop */
          }
          .curriculum-card {
            padding: 2rem !important;
            gap: 1.5rem !important;
            align-items: center !important;
            text-align: center !important;
          }
          .curriculum-icon-box {
            width: 60px !important;
            height: 60px !important;
          }
          .formula-item span {
            font-size: 1.5rem !important;
          }
          .wealthxcelerate-title {
            font-size: clamp(1.5rem, 6.5vw, 6.5rem) !important;
          }
          .roadmap-title {
            white-space: normal !important;
            word-break: keep-all;
            font-size: clamp(2rem, 8vw, 3.5rem) !important;
          }
          .triad-container {
            flex-direction: row !important;
            gap: 0 !important;
            justify-content: center !important;
            align-items: center !important;
          }
          .triad-item {
            padding: 0.5rem 1rem !important;
            background: transparent !important;
            border: none !important;
            border-left: 1px solid rgba(255,255,255,0.15) !important;
            border-radius: 0 !important;
            flex: unset !important;
          }
          .triad-item:first-child {
            border-left: none !important;
          }
          .triad-text {
            padding-left: 0 !important;
            letter-spacing: 0.05em !important;
            font-size: 1.3rem !important;
            white-space: nowrap !important;
          }
          .roadmap-subtitle, .feature-desc {
            text-wrap: balance;
          }
          .philosophy-section-container {
            padding: 2.5rem 1.5rem !important;
          }
          .philosophy-section-container span:first-child {
            display: none !important;
          }
          .philosophy-section-container p:first-of-type {
            font-size: 1.15rem !important;
            line-height: 1.5 !important;
          }
        }
      `}</style>
    </div>
  );
};

export default University;
