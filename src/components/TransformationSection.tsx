import React from 'react';
import { motion } from 'framer-motion';
import { Shield, TrendingUp, Landmark, Heart, CheckCircle } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';
import HoverGalaxyCard from './HoverGalaxyCard';

interface TransformationSectionProps {
  isMobile?: boolean;
}

const pillars = [
  { icon: <Shield size={20} />, title: "Protection", desc: "Securing your assets and your family's future with robust insurance and estate strategies." },
  { icon: <TrendingUp size={20} />, title: "Growth", desc: "Building sustainable wealth through proven investment philosophies and active management." },
  { icon: <Landmark size={20} />, title: "Legacy", desc: "Creating a lasting impact that transcends generations through strategic estate planning." },
  { icon: <Heart size={20} />, title: "Values", desc: "Aligning your finances with your faith and family principles for true freedom." }
];

const checks = [
  "Complete tax strategy & optimization",
  "Life, health & wealth insurance planning",
  "Investment blueprint for every income level",
  "Estate & legacy planning for your family",
  "Business owner financial mastery",
  "Faith-aligned financial philosophy"
];



const TransformationSection: React.FC<TransformationSectionProps> = ({ isMobile = false }) => {
  
  if (isMobile) {
    return (
      <section style={{ padding: '60px 20px', background: 'hsl(var(--background))', color: 'hsl(var(--foreground))' }}>
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '14px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.3em', color: '#fff', marginBottom: '1rem', backgroundColor: 'rgba(255, 255, 255, 0.08)', padding: '0.5rem 1.25rem', borderRadius: '0', display: 'inline-block' }}>
            The WealthXcelerate Way
          </p>
        </div>
        <h2 style={{ fontSize: '2.2rem', fontWeight: 900, lineHeight: 1.1, textTransform: 'uppercase', textAlign: 'center', marginBottom: '3rem', color: '#64af03' }}>
          Financial<br />
          <span style={{ fontFamily: '"Casanova Serif Display", serif', fontStyle: 'normal', fontWeight: 400, textTransform: 'none' }}>Transformation</span> For Life.
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {pillars.map((p, i) => (
            <HoverGalaxyCard key={i} particleCount={15} transition={{ duration: 0.3 }} style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '1.5rem', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <div style={{ background: 'hsl(var(--primary))', color: 'hsl(var(--primary-foreground))', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                {p.icon}
              </div>
              <div>
                <h3 style={{ fontSize: '1rem', fontWeight: 400, margin: '0 0 0.25rem 0' }}>{p.title}</h3>
                <p style={{ fontSize: '0.8rem', color: 'hsl(var(--muted-foreground))', margin: 0, lineHeight: 1.5 }}>{p.desc}</p>
              </div>
            </HoverGalaxyCard>
          ))}
        </div>

        <HoverGalaxyCard particleCount={25} transition={{ duration: 0.3 }} style={{ marginTop: '3rem', padding: '1.5rem', background: 'rgba(255,255,255,0.03)', borderRadius: '1.5rem', border: '1px solid transparent', textAlign: 'center', cursor: 'pointer' }}>
           <p style={{ fontSize: '2rem', fontWeight: 400, color: '#64af03', margin: '0 0 0.5rem 0' }}>
             <AnimatedCounter to={10} suffix="K+" />
           </p>
           <p style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'hsl(var(--muted-foreground))', margin: 0 }}>Join the Elite Movement</p>
        </HoverGalaxyCard>
      </section>
    );
  }

  // DESKTOP VERSION
  return (
    <section style={{ position: 'relative', zIndex: 2 }}>
      <div style={{
        padding: '120px 0',
        background: 'hsl(var(--background))',
        borderBottomLeftRadius: '120px',
        borderBottomRightRadius: '120px',
        borderBottom: '1px solid hsl(var(--border))',
      }}>
        <div className="container">
          <motion.div style={{ marginBottom: '6rem', textAlign: 'center' }}>
            <p style={{ fontSize: '14px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.4em', color: '#fff', marginBottom: '1.5rem', backgroundColor: 'rgba(255, 255, 255, 0.08)', padding: '0.5rem 1.25rem', borderRadius: '0', display: 'inline-block' }}>
              The WealthXcelerate Way
            </p>
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 4.5rem)', lineHeight: 1.1, textTransform: 'uppercase', margin: 0, color: '#64af03', fontWeight: 400, whiteSpace: 'nowrap' }}>
              Financial <span style={{ fontFamily: '"Casanova Serif Display", serif', fontStyle: 'normal', fontWeight: 400, textTransform: 'none' }}>Transformation</span> For Life.
            </h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              {pillars.map((p, i) => (
                <HoverGalaxyCard key={i} className="pillar-item" particleCount={20} transition={{ duration: 0.4 }} style={{ padding: '2.5rem', background: 'rgba(255,255,255,0.03)', borderRadius: '2rem', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <div style={{ color: '#64af03', marginBottom: '1rem' }}>{p.icon}</div>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 400, color: 'hsl(var(--foreground))', marginBottom: '0.75rem' }}>{p.title}</h3>
                  <p style={{ fontSize: '0.95rem', color: 'hsl(var(--muted-foreground))', lineHeight: 1.6, margin: 0 }}>{p.desc}</p>
                </HoverGalaxyCard>
              ))}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              <p style={{ fontSize: '22px', color: 'hsl(var(--muted-foreground))', lineHeight: 1.8, fontWeight: 300, marginBottom: '0.5rem', marginTop: '2rem' }}>
                We don't just manage money, we help you design a life of meaning, impact, and total financial freedom. Built on leadership, ethics, and legacy.
              </p>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                {checks.map((c, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <CheckCircle size={18} color="#64af03" />
                    <span style={{ fontSize: '0.9rem', color: 'hsl(var(--muted-foreground))' }}>{c}</span>
                  </div>
                ))}
              </div>

              <HoverGalaxyCard particleCount={10} transition={{ duration: 0.4 }} style={{ background: 'rgba(255,255,255,0.03)', padding: '2.5rem', borderRadius: '2rem', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', gap: '2rem', cursor: 'pointer', marginTop: 'auto' }}>
                <div style={{ textAlign: 'center' }}>
                  <p style={{ fontSize: '2.5rem', fontWeight: 400, color: '#64af03', margin: 0 }}>10K+</p>
                  <p style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: 'hsl(var(--muted-foreground))', margin: 0 }}>Members</p>
                </div>
                <div style={{ width: '1px', height: '40px', background: 'rgba(255,255,255,0.1)' }} />
                <div>
                  <p style={{ fontSize: '1.1rem', color: 'hsl(var(--foreground))', fontWeight: 500, margin: '0 0 0.25rem 0' }}>Join the Movement</p>
                  <p style={{ fontSize: '0.9rem', color: 'hsl(var(--muted-foreground))', margin: 0 }}>Start your path to financial sovereignty today.</p>
                </div>
              </HoverGalaxyCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformationSection;
