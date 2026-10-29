import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const FacebookIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const LinkedinIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const XIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4l16 16"/>
    <path d="M20 4L4 20"/>
  </svg>
);

const InstagramIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const PinterestIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2C6.48 2 2 6.24 2 11.47c0 3.87 2.44 7.2 5.94 8.67-.08-.66-.15-1.68.03-2.4l1.29-5.18s-.33-.62-.33-1.55c0-1.45.89-2.54 2-2.54.94 0 1.4.67 1.4 1.47 0 .9-.6 2.24-.92 3.48-.26 1.04.55 1.88 1.62 1.88 1.94 0 3.44-1.94 3.44-4.74 0-2.48-1.88-4.21-4.56-4.21-3.1 0-4.92 2.2-4.92 4.48 0 .89.36 1.84.81 2.35.09.1.1.19.07.3l-.3 1.15c-.05.18-.16.22-.37.13-1.38-.61-2.24-2.52-2.24-4.05 0-3.3 2.53-6.34 7.31-6.34 3.84 0 6.82 2.59 6.82 6.05 0 3.62-2.41 6.54-5.76 6.54-1.12 0-2.18-.55-2.54-1.2l-.69 2.49c-.25.91-.92 2.05-1.37 2.75 1.03.3 2.12.46 3.27.46 5.52 0 10-4.24 10-9.47S17.52 2 12 2z"/>
  </svg>
);

const TikTokIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 3v11.2a4.2 4.2 0 1 1-4-4.2"/>
    <path d="M14 3c.5 3 2.3 5 5 5"/>
  </svg>
);

const YoutubeIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 12s0-3.4-.4-5a3 3 0 0 0-2.1-2.1C17.8 4.5 12 4.5 12 4.5s-5.8 0-7.5.4A3 3 0 0 0 2.4 7C2 8.6 2 12 2 12s0 3.4.4 5a3 3 0 0 0 2.1 2.1c1.7.4 7.5.4 7.5.4s5.8 0 7.5-.4a3 3 0 0 0 2.1-2.1c.4-1.6.4-5 .4-5z"/>
    <path d="M10 9.75v4.5L15 12z"/>
  </svg>
);

const BlueskyIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 11c-1.5-3.1-4-5.8-6.2-6.8-1.6-.7-2.8-.2-2.8 1.7 0 3.8 3.1 6.1 6.2 6.6-3.6.6-5.7 2.3-5 4.5.6 1.8 3.1 1.7 5.1.4 1.1-.7 2-1.9 2.7-3.1.7 1.2 1.6 2.4 2.7 3.1 2 1.3 4.5 1.4 5.1-.4.7-2.2-1.4-3.9-5-4.5C17.9 12 21 9.7 21 5.9c0-1.9-1.2-2.4-2.8-1.7C16 5.2 13.5 7.9 12 11z"/>
  </svg>
);

const ThreadsIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18.5 8.5C17.4 5.7 15.1 4 12 4c-4.4 0-7 3.3-7 8s2.7 8 7.2 8c3.2 0 5.5-1.5 6.8-4.1"/>
    <path d="M9.1 10.8c.8-1 1.8-1.5 3.1-1.5 2.5 0 4.3 1.8 4.3 4.1s-1.8 4-4.4 4c-2 0-3.4-1.1-3.4-2.8 0-1.6 1.3-2.7 3.3-2.7 1.4 0 2.9.4 4.6 1.1"/>
  </svg>
);
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  return (
    <footer className="main-footer" style={{
      backgroundColor: 'hsl(var(--background))',
      color: 'hsl(var(--foreground))',
      padding: '120px 0 60px',
      position: 'relative',
      overflow: 'hidden',
      borderTop: '1px solid hsl(var(--border))'
    }}>
      {/* High-Precision Galaxy Particle Field */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', zIndex: 0, pointerEvents: 'none' }}>
        {[...Array(40)].map((_, i) => {
          const size = Math.random() * 3 + 1.5;
          const duration = 6 + Math.random() * 10;
          const delay = Math.random() * -15;
          const leftPos = Math.random() * 100;
          
          return (
            <motion.div
              key={i}
              initial={{ 
                opacity: 0, 
                y: 50, 
              }}
              animate={{ 
                opacity: [0, 1, 1, 0], 
                y: -600,
                x: (Math.random() - 0.5) * 100
              }}
              transition={{ 
                duration: duration, 
                repeat: Infinity, 
                delay: delay,
                ease: "linear"
              }}
              style={{
                position: 'absolute',
                left: `${leftPos}%`,
                bottom: '-20px',
                width: `${size}px`,
                height: `${size}px`,
                borderRadius: '50%',
                backgroundColor: i % 4 === 0 ? '#64af03' : 'white',
                boxShadow: i % 4 === 0 
                  ? `0 0 10px rgba(100, 175, 3, 0.8)` 
                  : `0 0 8px rgba(255,255,255,0.8)`,
                zIndex: 1
              }}
            />
          );
        })}
      </div>

      {/* Decorative large text */}
      <div style={{
        position: 'absolute',
        bottom: '-5%',
        right: '-2%',
        fontSize: 'clamp(8rem, 18vw, 18rem)',
        fontWeight: 900,
        color: 'hsl(var(--foreground) / 0.02)',
        lineHeight: 1,
        userSelect: 'none',
        pointerEvents: 'none',
        letterSpacing: '-0.05em',
        zIndex: 1
      }}>
        WX
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Top section */}
        <div className="mobile-stack footer-top-section" style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr', gap: '6rem', marginBottom: '6rem' }}>
          {/* Brand column */}
          <div className="footer-brand-column" style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            <div>
              <img
                src="/logo-dark.png"
                alt="WealthXcelerate Partners"
                style={{ height: '48px', width: 'auto', display: 'block' }}
              />
            </div>
            <p style={{ fontSize: '0.95rem', color: 'hsl(var(--muted-foreground))', lineHeight: 1.8, maxWidth: '300px', fontWeight: 300 }}>
              Financial transformation for life. Built on leadership, ethics, education, and legacy.
            </p>
            <p style={{ fontSize: '1.25rem', fontStyle: 'normal', color: '#64af03', fontFamily: '"Casanova Serif Display", serif', fontWeight: 600, letterSpacing: '0.05em', margin: 0 }}>
              Faith. Family. Finances. Freedom.
            </p>

            {/* Email form */}
            <form onSubmit={(e) => { e.preventDefault(); setEmail(''); alert('Thank you!'); }}
              style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem', maxWidth: '350px' }}>
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  flex: 1,
                  padding: '1rem 1.5rem',
                  borderRadius: '99px',
                  border: '1px solid hsl(var(--border))',
                  backgroundColor: 'hsl(var(--card))',
                  color: 'hsl(var(--foreground))',
                  fontSize: '0.85rem',
                  outline: 'none',
                  fontFamily: 'Roboto, sans-serif'
                }}
              />
              <motion.button type="submit" 
                whileHover={{ scale: 1.1, backgroundColor: '#64af03', color: 'white', boxShadow: '0 0 20px rgba(100, 175, 3, 0.6)' }}
                transition={{ duration: 0.3 }}
                style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                backgroundColor: 'hsl(var(--foreground))',
                color: 'hsl(var(--background))',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
              }}>
                <ArrowRight size={20} />
              </motion.button>
            </form>
          </div>

          {/* Quick Links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <p style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.3em', color: 'hsl(var(--muted-foreground))' }}>Navigate</p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {[
                { label: 'Home', to: '/' },
                { label: 'About', to: '/about' },
                { label: 'University', to: '/university' },
                { label: 'WealthX TV', to: '/tv' },
                { label: 'Educational Tools', to: '/books' },
                { label: 'Contact', to: '/contact' },
              ].map(({ label, to }) => (
                <li key={to}>
                  <Link to={to} style={{
                    textDecoration: 'none',
                    fontSize: '0.95rem',
                    color: 'hsl(var(--muted-foreground))',
                    fontWeight: 500,
                    transition: 'all 0.3s ease',
                    display: 'inline-block'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = 'hsl(87 97% 45%)';
                    e.currentTarget.style.textShadow = '0 0 10px rgba(100, 175, 3, 0.5)';
                    e.currentTarget.style.transform = 'translateX(4px)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = 'hsl(var(--muted-foreground))';
                    e.currentTarget.style.textShadow = 'none';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <p style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.3em', color: 'hsl(var(--muted-foreground))' }}>Legal</p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {[
                { label: 'Privacy Policy', path: '/privacy' },
                { label: 'Terms of Service', path: '/terms' },
                { label: 'Disclaimer', path: '/disclaimer' }
              ].map(item => (
                <li key={item.label}>
                  {item.path === '#' ? (
                    <a href={item.path} style={{
                      textDecoration: 'none',
                      fontSize: '0.95rem',
                      color: 'hsl(var(--muted-foreground))',
                      fontWeight: 500,
                      transition: 'color 0.3s ease'
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.color = 'hsl(87 97% 45%)';
                      e.currentTarget.style.textShadow = '0 0 10px rgba(100, 175, 3, 0.5)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.color = 'hsl(var(--muted-foreground))';
                      e.currentTarget.style.textShadow = 'none';
                    }}>
                      {item.label}
                    </a>
                  ) : (
                    <Link to={item.path} style={{
                      textDecoration: 'none',
                      fontSize: '0.95rem',
                      color: 'hsl(var(--muted-foreground))',
                      fontWeight: 500,
                      transition: 'color 0.3s ease'
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.color = 'hsl(87 97% 45%)';
                      e.currentTarget.style.textShadow = '0 0 10px rgba(100, 175, 3, 0.5)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.color = 'hsl(var(--muted-foreground))';
                      e.currentTarget.style.textShadow = 'none';
                    }}>
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          paddingTop: '3rem',
          borderTop: '1px solid hsl(var(--border))',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '2rem'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <p style={{ fontSize: '0.75rem', color: 'hsl(var(--muted-foreground))', letterSpacing: '0.02em', fontWeight: 400 }}>
              © {new Date().getFullYear()} WealthXcelerate Partners. All rights reserved.
            </p>
            <p style={{ fontSize: '0.75rem', color: 'hsl(var(--muted-foreground))', letterSpacing: '0.02em', fontWeight: 400 }}>
              WealthXcelerate is owned and operated by Postema Media Management, LLC.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
            {/* Social Links */}
            <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
              {[
                { Icon: LinkedinIcon, href: 'https://www.linkedin.com/company/wealthxcelerate', label: 'LinkedIn' },
                { Icon: XIcon, href: 'https://x.com/WealthXMagazine', label: 'X' },
                { Icon: PinterestIcon, href: 'https://www.pinterest.com/wealthxmagazine/', label: 'Pinterest' },
                { Icon: TikTokIcon, href: 'https://www.tiktok.com/@wealthxmagazine', label: 'TikTok' },
                { Icon: InstagramIcon, href: 'https://www.instagram.com/wealthxcelerate/', label: 'Instagram' },
                { Icon: YoutubeIcon, href: 'https://www.youtube.com/@WealthXcelerate-mgz', label: 'YouTube' },
                { Icon: BlueskyIcon, href: 'https://bsky.app/profile/wealthxcelerate.bsky.social', label: 'Bluesky' },
                { Icon: FacebookIcon, href: 'https://www.facebook.com/profile.php?id=61561601730089', label: 'Facebook' },
                { Icon: ThreadsIcon, href: 'https://www.threads.com/@wealthx.celerate', label: 'Threads' }
              ].map(({ Icon, href, label }, i) => {
                const iconStyle = {
                  color: 'hsl(var(--muted-foreground))',
                  transition: 'color 0.3s ease, transform 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative' as const,
                  opacity: href ? 1 : 0.45,
                  cursor: href ? 'pointer' : 'default'
                };

                if (!href) {
                  return (
                    <span key={i} className="footer-social-icon" aria-label={label} style={iconStyle}>
                      <span className="footer-social-tooltip">{label}</span>
                      <Icon size={18} />
                    </span>
                  );
                }

                return (
                  <a key={i} className="footer-social-icon" href={href} target="_blank" rel="noopener noreferrer" aria-label={label} style={iconStyle}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = '#64af03';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = 'hsl(var(--muted-foreground))';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}>
                    <span className="footer-social-tooltip">{label}</span>
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>

            <a 
              href="https://wealthxcelerate.app.clientclub.net/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                textDecoration: 'none',
                fontSize: '0.75rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                color: 'hsl(var(--muted-foreground))',
                transition: 'color 0.3s ease',
                display: 'inline-block'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = 'hsl(87 97% 45%)';
                e.currentTarget.style.textShadow = '0 0 15px rgba(100, 175, 3, 0.6)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = 'hsl(var(--muted-foreground))';
                e.currentTarget.style.textShadow = 'none';
              }}
            >
              WXC University →
            </a>
          </div>
        </div>
      </div>
      <style>{`
        .footer-social-tooltip {
          position: absolute;
          left: 50%;
          bottom: calc(100% + 0.75rem);
          transform: translate(-50%, 6px);
          padding: 0.35rem 0.6rem;
          border: 1px solid rgba(100, 175, 3, 0.35);
          background: hsl(var(--background));
          color: hsl(var(--foreground));
          font-size: 0.65rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          white-space: nowrap;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.2s ease, transform 0.2s ease;
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.24);
        }
        .footer-social-icon:hover .footer-social-tooltip,
        .footer-social-icon:focus-visible .footer-social-tooltip {
          opacity: 1;
          transform: translate(-50%, 0);
        }
        @media (max-width: 768px) {
          .main-footer {
            padding: 60px 0 40px !important;
          }
          .footer-top-section {
            gap: 3rem !important;
            margin-bottom: 3rem !important;
          }
          .footer-brand-column {
            gap: 1.5rem !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
