import React from 'react';
import { motion } from 'framer-motion';

const Testimonials: React.FC = () => {
  return (
    <section style={{ padding: '120px 0', backgroundColor: 'transparent', position: 'relative', overflow: 'hidden' }}>
      
      {/* Background Graphical Elements */}
      <div style={{
        position: 'absolute', top: '10%', right: '-5%',
        width: '600px', height: '600px',
        background: 'radial-gradient(circle, rgba(100,175,3,0.03) 0%, transparent 60%)',
        zIndex: 0, pointerEvents: 'none'
      }} />
      <svg style={{ position: 'absolute', bottom: '-10%', left: '-10%', opacity: 0.02, zIndex: 0, pointerEvents: 'none' }} width="800" height="800" viewBox="0 0 100 100">
        <path d="M0,100 L0,80 Q25,60 50,80 T100,60 L100,100 Z" fill="#fff" />
        <path d="M0,100 L0,90 Q25,70 50,90 T100,70 L100,100 Z" fill="#64af03" />
      </svg>
      
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8 }}
          >
            <p style={{ fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.3em', color: '#fff', whiteSpace: 'nowrap', marginBottom: '1.5rem', display: 'inline-block' }}>
              The WealthX Blueprint
            </p>
            <h2 style={{ fontSize: 'clamp(3rem, 7vw, 5rem)', fontWeight: 400, lineHeight: 1, margin: '0 0 1.5rem 0', letterSpacing: '-0.02em', color: '#64af03' }}>
              Engineered <span style={{ fontFamily: '"Casanova Serif Display", serif', fontStyle: 'normal', fontWeight: 400, color: '#64af03' }}>
                Growth.
              </span>
            </h2>
            <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: 'clamp(0.85rem, 3.5vw, 1.25rem)', color: 'hsl(var(--muted-foreground))', lineHeight: 1.6, fontWeight: 300, whiteSpace: 'normal' }}>
              Precision-driven strategies and measurable outcomes.
              <br className="desktop-only" />
              {' '}We don't just plan for the future; we architect it.
            </p>
          </motion.div>
        </div>

        {/* Graphical Dashboard Layout */}
        <div className="dashboard-grid">
          
          {/* LEFT PANEL: Graphical Process & Stats */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            
            {/* Massive Progress Bar Graphic */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.2em', fontWeight: 800, color: 'hsl(var(--foreground))', marginBottom: '2rem' }}>Portfolio Architecture</h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {[
                  { label: 'Asset Protection', value: 92 },
                  { label: 'Tax Optimization', value: 85 },
                  { label: 'Legacy Planning', value: 100 }
                ].map((item, i) => (
                  <div key={i}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                      <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'hsl(var(--foreground))', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{item.label}</span>
                      <span style={{ fontSize: '0.9rem', fontWeight: 800, color: '#64af03' }}>{item.value}%</span>
                    </div>
                    <div style={{ width: '100%', height: '8px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '99px', overflow: 'hidden' }}>
                      <motion.div 
                        initial={{ width: '0%' }}
                        whileInView={{ width: `${item.value}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: i * 0.2, ease: "easeOut" }}
                        style={{ height: '100%', backgroundColor: '#64af03', borderRadius: '99px' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Graphical Chart Element */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{ padding: '2rem', border: '1px solid rgba(255,255,255,0.05)', background: 'linear-gradient(180deg, rgba(255,255,255,0.02) 0%, transparent 100%)', borderRadius: '1rem' }}
            >
              <h3 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700, color: 'hsl(var(--muted-foreground))', marginBottom: '1.5rem' }}>Growth Trajectory</h3>
              
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: '1rem', height: '120px', paddingBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                {[40, 55, 45, 70, 60, 85, 100].map((height, i) => (
                  <motion.div 
                    key={i}
                    initial={{ height: '0%' }}
                    whileInView={{ height: `${height}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                    style={{ flex: 1, backgroundColor: i === 6 ? '#64af03' : 'rgba(255,255,255,0.1)', borderRadius: '4px 4px 0 0' }}
                  />
                ))}
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '1rem' }}>
                <span style={{ fontSize: '0.75rem', color: 'hsl(var(--muted-foreground))' }}>Phase 1</span>
                <span style={{ fontSize: '0.75rem', color: '#64af03', fontWeight: 800 }}>Generational</span>
              </div>
            </motion.div>

          </div>

          {/* RIGHT PANEL: Vertical Progress Timeline & Large Metrics */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem' }}>
            
            {/* The Blueprint Timeline */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.2em', fontWeight: 800, color: 'hsl(var(--foreground))', marginBottom: '3rem' }}>Execution Process</h3>
              
              <div style={{ position: 'relative', paddingLeft: '2.5rem' }}>
                {/* Background Line */}
                <div style={{ position: 'absolute', left: '0', top: '0', bottom: '0', width: '2px', backgroundColor: 'rgba(255,255,255,0.05)' }} />
                
                {/* Animated Fill Line */}
                <motion.div 
                  initial={{ height: '0%' }}
                  whileInView={{ height: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                  style={{ position: 'absolute', left: '0', top: '0', width: '2px', backgroundColor: '#64af03' }}
                />

                {[
                  { step: '01', title: 'Discovery & Audit', desc: 'Comprehensive analysis of current financial positioning.' },
                  { step: '02', title: 'Strategy Architecture', desc: 'Customized framework design and stress-testing.' },
                  { step: '03', title: 'Active Management', desc: 'Ongoing optimization and fiduciary oversight.' }
                ].map((item, i) => (
                  <div key={i} style={{ position: 'relative', marginBottom: i === 2 ? 0 : '3.5rem' }}>
                    {/* Glowing Node */}
                    <div style={{ position: 'absolute', left: '-2.85rem', top: '0', width: '16px', height: '16px', backgroundColor: '#000', border: '2px solid #64af03', borderRadius: '50%', zIndex: 2 }} />
                    <motion.div 
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + (i * 0.4), duration: 0.5 }}
                      style={{ position: 'absolute', left: '-3.35rem', top: '-0.5rem', width: '32px', height: '32px', backgroundColor: 'rgba(100,175,3,0.2)', borderRadius: '50%', zIndex: 1 }} 
                    />
                    
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem', marginBottom: '0.5rem' }}>
                      <span style={{ fontSize: '0.85rem', fontWeight: 900, color: '#64af03', fontFamily: '"Casanova Serif Display", serif' }}>{item.step}</span>
                      <h4 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'hsl(var(--foreground))', margin: 0 }}>{item.title}</h4>
                    </div>
                    <p style={{ fontSize: '1rem', color: 'hsl(var(--muted-foreground))', margin: 0, lineHeight: 1.5 }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      <style>{`
        .dashboard-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 6rem;
          max-width: 1000px;
          margin: 0 auto;
        }
        @media (min-width: 900px) {
          .dashboard-grid {
            grid-template-columns: 1fr 1fr;
            gap: 6rem;
            align-items: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
