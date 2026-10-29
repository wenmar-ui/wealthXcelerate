import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LogIn, ArrowLeft, Eye, EyeOff } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://wealthxcelerate.com/login",
    "url": "https://wealthxcelerate.com/login",
    "name": "Partner Login | WealthXcelerate",
    "description": "Secure access portal for WealthXcelerate members and partners."
  };

  return (
    <div className="mobile-stack" style={{
      minHeight: '100vh',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      overflow: 'hidden',
      background: 'transparent'
    }}>
      <SEO 
        title="Partner Login | WealthXcelerate" 
        description="Secure portal access to the WealthXcelerate partner ecosystem and training dashboard." 
        url="https://wealthxcelerate.com/login"
        structuredData={structuredData}
      />
      {/* Left: Dark green brand panel */}
      <div style={{
        background: 'hsl(var(--card))',
        borderRight: '1px solid hsl(var(--border) / 0.5)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '3rem 4rem',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background ghost text */}
        <div style={{
          position: 'absolute', bottom: '-5%', right: '-5%',
          fontSize: '18rem', fontWeight: 900, color: 'hsl(var(--background) / 0.03)',
          lineHeight: 1, userSelect: 'none', letterSpacing: '-0.05em'
        }}>WX</div>

        {/* Top: Logo */}
        <div>
          <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', color: 'hsl(var(--foreground) / 0.6)', fontSize: '0.8rem', marginBottom: '4rem' }}>
            <ArrowLeft size={16} />
            Back to Home
          </Link>
          <img
            src="/logo-white.png"
            alt="WealthXcelerate"
            style={{ height: '44px', width: 'auto', filter: 'brightness(0) invert(1)', display: 'block' }}
          />
        </div>

        {/* Middle: Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
        >
          <p style={{
            fontFamily: '"Casanova Serif Display", serif',
            fontStyle: 'italic',
            fontSize: 'clamp(1.5rem, 2.5vw, 2.25rem)',
            color: 'hsl(var(--foreground))',
            lineHeight: 1.4,
            maxWidth: '420px'
          }}>
            "Financial freedom isn't a destination — it's a daily decision."
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ width: '40px', height: '2px', backgroundColor: 'hsl(var(--primary))' }} />
            <p style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.15em', color: 'hsl(var(--primary))' }}>
              WealthXcelerate Partners
            </p>
          </div>
        </motion.div>

        {/* Bottom: Stats */}
        <div style={{ display: 'flex', gap: '3rem', paddingTop: '2rem', borderTop: '1px solid hsl(var(--background) / 0.08)' }}>
          {[{ num: '10K+', label: 'Members' }, { num: '$2B+', label: 'Wealth Built' }, { num: '15+', label: 'Years' }].map((s, i) => (
            <div key={i}>
              <p style={{ fontSize: '1.5rem', fontWeight: 900, color: 'hsl(var(--foreground))', lineHeight: 1 }}>{s.num}</p>
              <p style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'hsl(var(--foreground) / 0.4)', marginTop: '0.25rem' }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right: Login form */}
      <div style={{
        background: 'transparent',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '3rem',
        position: 'relative'
      }}>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{
            width: '100%',
            maxWidth: '420px',
            display: 'flex',
            flexDirection: 'column',
            gap: '2.5rem'
          }}
        >
          {/* Header */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <p style={{
              fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase',
              letterSpacing: '0.3em', color: 'hsl(var(--primary))'
            }}>
              Secure Access
            </p>
            <h1 style={{
              fontSize: '2.5rem', lineHeight: 0.95, textTransform: 'uppercase',
              letterSpacing: '-0.03em', margin: 0
            }}>
              Partner<br />
              <span style={{
                fontFamily: '"Casanova Serif Display", serif',
                fontStyle: 'normal',
                fontWeight: 400,
                textTransform: 'none',
                color: 'hsl(var(--foreground))'
              }}>
                Login
              </span>
            </h1>
            <p style={{ fontSize: '0.875rem', color: 'hsl(var(--muted-foreground))', marginTop: '0.5rem', lineHeight: 1.6 }}>
              Enter your credentials to access your WealthXcelerate partner dashboard.
            </p>
          </div>

          {/* Form */}
          <form style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }} onSubmit={e => e.preventDefault()}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{
                fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase',
                letterSpacing: '0.15em', color: 'hsl(var(--foreground))'
              }}>
                Email Address
              </label>
              <input
                type="email"
                placeholder="name@example.com"
                required
                style={{
                  padding: '0.875rem 1.25rem',
                  borderRadius: '0.75rem',
                  border: '1px solid hsl(var(--border))',
                  fontSize: '0.875rem',
                  outline: 'none',
                  backgroundColor: 'hsl(var(--input))',
                  color: 'hsl(var(--foreground))',
                  transition: 'border-color 0.3s ease',
                  fontFamily: 'Roboto, sans-serif',
                  width: '100%',
                  boxSizing: 'border-box' as const
                }}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <label style={{
                  fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase',
                  letterSpacing: '0.15em', color: 'hsl(var(--foreground))'
                }}>
                  Password
                </label>
                <a href="#" style={{ fontSize: '0.75rem', color: 'hsl(var(--primary))', textDecoration: 'none', fontWeight: 600 }}>
                  Forgot password?
                </a>
              </div>
              <div style={{ position: 'relative' }}>
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  required
                  style={{
                    padding: '0.875rem 3rem 0.875rem 1.25rem',
                    borderRadius: '0.75rem',
                    border: '1px solid hsl(var(--border))',
                    fontSize: '0.875rem',
                    outline: 'none',
                    backgroundColor: 'hsl(var(--input))',
                    color: 'hsl(var(--foreground))',
                    transition: 'border-color 0.3s ease',
                    fontFamily: 'Roboto, sans-serif',
                    width: '100%',
                    boxSizing: 'border-box' as const
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: 'absolute', right: '1rem', top: '50%',
                    transform: 'translateY(-50%)', background: 'none',
                    border: 'none', cursor: 'pointer', color: 'hsl(var(--muted-foreground))',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 0
                  }}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              style={{
                padding: '1rem 2rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.75rem',
                marginTop: '0.5rem',
                width: '100%',
                fontSize: '0.8rem'
              }}
            >
              <LogIn size={18} />
              Sign In to Dashboard
            </button>
          </form>

          <p style={{ textAlign: 'center', fontSize: '0.8rem', color: 'hsl(var(--muted-foreground))' }}>
            Not a partner yet?{' '}
            <a href="#" style={{ color: 'hsl(var(--foreground))', fontWeight: 700, textDecoration: 'none' }}>
              Contact us →
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
