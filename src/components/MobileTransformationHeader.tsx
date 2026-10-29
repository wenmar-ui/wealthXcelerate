import React from 'react';
import { motion } from 'framer-motion';
import { 
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
import HoverGalaxyCard from './HoverGalaxyCard';

const pillars = [
  { title: "Money Mindset", icon: <Brain size={20} /> },
  { title: "Income & Cash Flow", icon: <TrendingUp size={20} /> },
  { title: "Debt Strategy", icon: <Zap size={20} /> },
  { title: "Taxes", icon: <FileText size={20} /> },
  { title: "Insurance", icon: <ShieldCheck size={20} /> },
  { title: "College Planning", icon: <School size={20} /> },
  { title: "Retirement", icon: <PieChart size={20} /> },
  { title: "Legacy", icon: <Scroll size={20} /> },
  { title: "Life Insurance as Banking", icon: <Building2 size={20} /> },
  { title: "Estate Planning", icon: <Users size={20} /> },
];

const MobileTransformationHeader: React.FC = () => {
  return (
    <section style={{
      padding: '60px 0',
      backgroundColor: 'hsl(var(--background))',
      color: 'hsl(var(--foreground))',
      overflow: 'hidden'
    }}>
      <div className="container" style={{ padding: '0 1rem' }}>
        
        {/* Massive Editorial Header */}
        <motion.div
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <p style={{
            fontSize: '0.75rem',
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: '0.4em',
            color: '#64af03',
            marginBottom: '1rem'
          }}>The Transformation</p>
          
          <h2 style={{
            fontSize: 'clamp(1.7rem, 9.5vw, 3.2rem)',
            lineHeight: 0.9,
            fontWeight: 900,
            textTransform: 'uppercase',
            margin: 0,
            letterSpacing: '-0.05em'
          }}>
            Financial<br />
            <span style={{ color: '#64af03', display: 'block', letterSpacing: '-0.06em' }}>Transformation.</span>
          </h2>
        </motion.div>

        {/* Sophisticated Quote Block */}
        <motion.div
          style={{
            position: 'relative',
            padding: '3rem 2rem',
            background: 'rgba(100, 175, 3, 0.03)',
            borderRadius: '2rem',
            border: '1px solid rgba(100, 175, 3, 0.1)',
            marginBottom: '5rem',
            textAlign: 'center'
          }}
        >
          <div style={{
            position: 'absolute',
            top: '-25px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '50px',
            height: '50px',
            backgroundColor: '#64af03',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontSize: '2rem',
            fontFamily: 'serif',
            boxShadow: '0 10px 20px rgba(100, 175, 3, 0.2)'
          }}>“</div>
          
          <p style={{
            fontSize: '22px',
            fontFamily: '"Casanova Serif Display", serif',
            fontStyle: 'normal',
            lineHeight: 1.4,
            color: 'hsl(var(--foreground))',
            margin: 0,
            fontWeight: 500,
            textWrap: 'balance'
          }}>
            This isn't advice — it's a <span style={{ color: 'hsl(87 97% 45%)', fontWeight: 700 }}>blueprint</span> for your life.
          </p>
          
          <div style={{
            marginTop: '1.5rem',
            height: '1px',
            width: '40px',
            backgroundColor: 'rgba(100, 175, 3, 0.3)',
            margin: '1.5rem auto 0'
          }} />
        </motion.div>

        {/* The 10 Pillars Grid */}
        <div>
          <p style={{
            fontSize: '0.85rem', 
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
            color: 'hsl(var(--muted-foreground))',
            textAlign: 'center',
            marginBottom: '2rem'
          }}>The 10 Foundations</p>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1rem'
          }}>
            {pillars.map((p, i) => (
              <HoverGalaxyCard
                key={i}
                particleCount={15}
                whileHover={{}}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  gap: '0.75rem',
                  padding: '1.5rem 1rem',
                  backgroundColor: 'rgba(255,255,255,0.03)',
                  borderRadius: '1.25rem',
                  border: '1px solid rgba(255,255,255,0.08)'
                }}
              >
                <div style={{ color: '#64af03' }}>{p.icon}</div>
                <span style={{ 
                  fontSize: '0.8rem', 
                  fontWeight: 800, 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.05em',
                  lineHeight: 1.2,
                  color: 'hsl(var(--foreground))'
                }}>
                  {p.title}
                </span>
              </HoverGalaxyCard>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default MobileTransformationHeader;
