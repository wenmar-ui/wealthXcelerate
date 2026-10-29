import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, TrendingUp, Landmark } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import HoverGalaxyCard from './HoverGalaxyCard';
import HoverGalaxyButton from './HoverGalaxyButton';

interface BookSectionProps {
  isMobile?: boolean;
}

const BookSection: React.FC<BookSectionProps> = ({ isMobile = false }) => {
  const navigate = useNavigate();

  const tools = [
    { icon: <Shield size={18} />, title: 'Strategic Protection', desc: 'Bulletproof insurance & risk mitigation.' },
    { icon: <TrendingUp size={18} />, title: 'Wealth Optimization', desc: 'Tactical growth & tax efficiency.' },
    { icon: <Landmark size={18} />, title: 'Legacy Architecture', desc: 'Generational wealth & estate design.' }
  ];

  // ── MOBILE ──
  if (isMobile) {
    return (
      <section style={{ padding: '60px 20px', backgroundColor: 'hsl(var(--background))' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0', marginBottom: '2rem' }}>
            <div style={{ width: '140px', transform: 'rotate(-5deg) translateX(15px)', zIndex: 1, borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}>
              <img src="/ray-lewis.png" alt="Ray Lewis" style={{ width: '100%', aspectRatio: '4/5', objectFit: 'cover' }} />
            </div>
            <div style={{ width: '140px', transform: 'rotate(5deg) translateX(-15px)', zIndex: 2, borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 15px 40px rgba(0,0,0,0.4)' }}>
              <img src="/dennis-postema.png" alt="Dennis M. Postema" style={{ width: '100%', aspectRatio: '4/5', objectFit: 'cover' }} />
            </div>
          </div>
          <p style={{ fontSize: '0.6rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.3em', color: '#fff', marginBottom: '1rem' }}>Educational Tools</p>
          <h2 style={{ fontSize: '2.4rem', fontWeight: 900, lineHeight: 1, textTransform: 'uppercase', color: '#64af03', margin: '0 0 1.5rem' }}>
            Foundations of<br />
            <span style={{ fontFamily: '"Casanova Serif Display", serif', fontStyle: 'normal', fontWeight: 400, textTransform: 'none', color: '#64af03' }}>Financial Legacy</span>
          </h2>
          <p style={{ fontSize: '1rem', color: 'hsl(var(--muted-foreground))', lineHeight: 1.6, marginBottom: '2.5rem' }}>
            Wealth isn't just about the numbers in your bank account — it's about the knowledge in your mind.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', textAlign: 'left' }}>
            {tools.map((t, i) => (
              <HoverGalaxyCard key={i} particleCount={6} whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.06)' }} transition={{ duration: 0.3 }} style={{ padding: '1.25rem', backgroundColor: 'hsl(var(--card))', borderRadius: '1rem', border: '1px solid hsl(var(--border))', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <div style={{ color: 'hsl(var(--primary))' }}>{t.icon}</div>
                <div>
                  <h4 style={{ fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', color: 'hsl(var(--foreground))', margin: 0 }}>{t.title}</h4>
                  <p style={{ fontSize: '0.8rem', color: 'hsl(var(--muted-foreground))', margin: 0 }}>{t.desc}</p>
                </div>
              </HoverGalaxyCard>
            ))}
          </div>
          <HoverGalaxyButton
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(100, 175, 3, 0.1)', color: 'hsl(87 97% 45%)' }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate('/books')}
            className="btn btn-outline"
            style={{
              marginTop: '2.5rem',
              width: '100%',
              padding: '1.1rem',
              color: 'hsl(87 97% 45%)',
              border: '1px solid hsl(87 97% 45%)',
              backgroundColor: 'transparent',
              borderRadius: '8px',
              fontWeight: 700,
              fontSize: '14px',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              transition: 'all 0.2s ease'
            }}
          >
            Explore Full Library <ArrowRight size={18} />
          </HoverGalaxyButton>
        </div>
      </section>
    );
  }

  // ── DESKTOP ──
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      zIndex: 0,
      padding: '120px 0',
      backgroundColor: 'hsl(var(--card))',
      overflow: 'hidden',
    }}>
      {/* Subtle watermark */}
      <div style={{
        position: 'absolute', top: '50%', right: '-4%',
        fontSize: '22vw', fontWeight: 900,
        color: 'rgba(255,255,255,0.025)', pointerEvents: 'none',
        transform: 'translateY(-50%)', zIndex: 0, letterSpacing: '-0.05em',
      }}>BOOKS</div>

      <div className="container" style={{
        position: 'relative', zIndex: 1,
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        gap: '6rem', alignItems: 'stretch',
      }}>

        {/* ── LEFT PANEL ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ height: '100%' }}
        >
          {/* ── Row 1: Portraits ── */}
          <div style={{ display: 'flex', gap: '1rem', height: '100%' }}>

            {/* Ray Lewis */}
            <motion.div
              style={{ flex: 1, height: '100%' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div style={{
                position: 'relative',
                borderRadius: '1.25rem',
                overflow: 'hidden',
                height: '100%',
                boxShadow: '0 25px 60px rgba(0,0,0,0.5)',
                border: '1px solid rgba(255,255,255,0.07)',
              }}>
                <img
                  src="/ray-lewis.png"
                  alt="Ray Lewis"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', display: 'block' }}
                />
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.92) 0%, transparent 100%)',
                  padding: '2rem 1rem 1rem',
                }}>
                  <p style={{ margin: 0, fontSize: '0.55rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.2em', color: '#64af03' }}>NFL Legend</p>
                  <p style={{ margin: 0, fontSize: '1rem', fontWeight: 700, color: '#fff' }}>Ray Lewis</p>
                </div>
              </div>
            </motion.div>

            {/* Dennis M. Postema */}
            <motion.div
              style={{ flex: 1, height: '100%' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <div style={{
                position: 'relative',
                borderRadius: '1.25rem',
                overflow: 'hidden',
                height: '100%',
                boxShadow: '0 25px 60px rgba(0,0,0,0.5)',
                border: '1px solid rgba(255,255,255,0.07)',
              }}>
                <img
                  src="/dennis-postema.png"
                  alt="Dennis M. Postema"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', display: 'block' }}
                />
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.92) 0%, transparent 100%)',
                  padding: '2rem 1rem 1rem',
                }}>
                  <p style={{ margin: 0, fontSize: '0.55rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.2em', color: '#64af03' }}>Financial Expert</p>
                  <p style={{ margin: 0, fontSize: '1rem', fontWeight: 700, color: '#fff' }}>Dennis M. Postema</p>
                </div>
              </div>
            </motion.div>

          </div>
        </motion.div>

        {/* ── RIGHT PANEL: Content (untouched) ── */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p style={{ fontSize: '14px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.4em', color: '#fff', marginBottom: '1.5rem', backgroundColor: 'rgba(255, 255, 255, 0.08)', padding: '0.5rem 1.25rem', borderRadius: '0', display: 'inline-block' }}>Educational Tools</p>
          <h2 style={{ fontSize: '72px', fontWeight: 400, lineHeight: 1, textTransform: 'uppercase', color: '#64af03', marginBottom: '1.5rem' }}>
            Foundations of<br />
            <span style={{ fontFamily: '"Casanova Serif Display", serif', fontStyle: 'normal', fontWeight: 400, textTransform: 'none', color: '#64af03' }}>Financial Legacy</span>
          </h2>
          <p style={{ fontSize: '22px', color: 'hsl(var(--muted-foreground))', lineHeight: 1.8, marginBottom: '2.5rem', maxWidth: '450px' }}>
            Explore the definitive collection of blueprints used to architect generational wealth.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '3rem' }}>
            {tools.slice(0, 2).map((t, i) => (
              <HoverGalaxyCard key={i} particleCount={6} transition={{ duration: 0.3 }} style={{ padding: '1.5rem', borderRadius: '1rem', border: '1px solid transparent' }}>
                <h4 style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', color: 'hsl(var(--primary))', marginBottom: '0.5rem' }}>{t.title}</h4>
                <p style={{ fontSize: '0.85rem', color: 'hsl(var(--muted-foreground))', margin: 0 }}>{t.desc}</p>
              </HoverGalaxyCard>
            ))}
          </div>
          <HoverGalaxyButton
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(100, 175, 3, 0.1)', color: 'hsl(87 97% 45%)' }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate('/books')}
            className="btn btn-outline"
            style={{
              padding: '1.2rem 2.5rem',
              width: '100%',
              color: 'hsl(87 97% 45%)',
              border: '1px solid hsl(87 97% 45%)',
              backgroundColor: 'transparent',
              borderRadius: '8px',
              fontWeight: 700,
              fontSize: '14px',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.75rem',
              transition: 'all 0.2s ease'
            }}
          >
            Explore Library <ArrowRight size={18} />
          </HoverGalaxyButton>
        </motion.div>

      </div>
    </section>
  );
};

export default BookSection;
