import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LogIn, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close menu when location changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { label: 'About', path: '/about' },
    { label: 'University', path: '/university' },
    { label: 'WealthX TV', path: '/tv' },
    { label: 'Educational Tools', path: '/books' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Fixed navbar wrapper — hidden when mobile menu is open */}
      <div style={{
        position: 'fixed',
        top: isScrolled ? '1.5rem' : '0',
        left: 0,
        right: 0,
        zIndex: 1000,
        display: isOpen ? 'none' : 'flex',
        justifyContent: 'center',
        pointerEvents: 'none',
        transition: 'top 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        boxSizing: 'border-box',
      }}>
        <motion.nav 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className={isScrolled ? "glass-pill" : ""}
          style={{
            position: 'relative',
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            alignItems: 'center',
            padding: '0 1.5rem',
            borderRadius: isScrolled ? '99px' : '0px',
            width: isScrolled ? 'calc(100% - 2rem)' : '100%',
            maxWidth: 'min(1200px, 100vw)',
            pointerEvents: 'auto',
            transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
            background: isScrolled ? undefined : 'transparent',
            border: isScrolled ? undefined : '1px solid transparent',
            boxShadow: isScrolled ? undefined : 'none',
            boxSizing: 'border-box'
          }}
        >
          {/* Scroll-activated Galaxy Particles Background */}
          <AnimatePresence>
            {isScrolled && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                style={{
                  position: 'absolute',
                  inset: 0,
                  overflow: 'hidden',
                  borderRadius: '99px',
                  zIndex: -1,
                  pointerEvents: 'none'
                }}
              >
                {[...Array(40)].map((_, i) => {
                  const size = Math.random() * 2 + 1;
                  const duration = 4 + Math.random() * 6;
                  const delay = Math.random() * -10;
                  const leftPos = Math.random() * 100;
                  
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ 
                        opacity: [0, 1, 1, 0], 
                        y: -80,
                        x: (Math.random() - 0.5) * 30
                      }}
                      transition={{ duration: duration, repeat: Infinity, delay: delay, ease: "linear" }}
                      style={{
                        position: 'absolute',
                        left: `${leftPos}%`,
                        bottom: '-10px',
                        width: `${size}px`,
                        height: `${size}px`,
                        borderRadius: '50%',
                        backgroundColor: i % 4 === 0 ? '#64af03' : 'white',
                        boxShadow: i % 4 === 0 
                          ? `0 0 6px rgba(100, 175, 3, 0.8)` 
                          : `0 0 4px rgba(255,255,255,0.8)`,
                      }}
                    />
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
          {/* Left: Logo */}
          <div style={{ gridColumn: '1', display: 'flex', justifyContent: 'flex-start' }}>
            <Link to="/" className="navbar-logo-link" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
              <img
                src="/logo-dark.png"
                alt="WealthXcelerate"
                className="navbar-logo"
                style={{ width: 'auto', display: 'block', filter: 'brightness(0) invert(1)', transition: 'height 0.3s ease' }}
              />
            </Link>
          </div>

          {/* Center: Desktop Navigation Links */}
          <div className="desktop-only" style={{ gridColumn: '2', display: 'flex', justifyContent: 'center' }}>
            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'nowrap' }}>
              {navLinks.map((link) => (
                <Link key={link.path} to={link.path} className="nav-link" style={{ whiteSpace: 'nowrap' }}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Right: Login Button + Mobile hamburger (open) */}
          <div style={{ gridColumn: '3', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
            <div className="desktop-only" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <a 
                href="https://wealthxcelerate.app.clientclub.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-login-btn"
                style={{ textDecoration: 'none' }}
              >
                <LogIn size={16} style={{ marginRight: '0.5rem', flexShrink: 0 }} />
                Log In
              </a>
            </div>

            {/* Mobile: open button only — close button is rendered separately below */}
            <div className="mobile-only" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', width: '100%' }}>
              <button 
                onClick={() => setIsOpen(true)}
                aria-label="Open Menu"
                style={{ 
                  background: 'transparent', 
                  border: 'none', 
                  padding: '0.5rem', 
                  cursor: 'pointer',
                  color: 'hsl(var(--foreground))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minWidth: '44px',
                  minHeight: '44px'
                }}
              >
                <Menu size={28} />
              </button>
            </div>
          </div>

        </motion.nav>
      </div>

      {/* Floating close button — OUTSIDE navbar stacking context, above overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.button
            key="close-btn"
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 90 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsOpen(false)}
            aria-label="Close Menu"
            style={{
              position: 'fixed',
              top: '1rem',
              right: '1rem',
              zIndex: 1100,
              background: 'transparent',
              border: 'none',
              padding: '0.5rem',
              cursor: 'pointer',
              color: 'hsl(var(--foreground))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minWidth: '44px',
              minHeight: '44px',
            }}
          >
            <X size={28} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.95)',
              backdropFilter: 'blur(40px)',
              WebkitBackdropFilter: 'blur(40px)',
              zIndex: 1050,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '4rem 2rem',
              gap: '0.5rem',
              overflowY: 'auto'
            }}
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link 
                  to={link.path} 
                  style={{ 
                    textAlign: 'center',
                    fontSize: '1rem', 
                    fontWeight: 700, 
                    textDecoration: 'none', 
                    color: 'hsl(var(--foreground))',
                    textTransform: 'uppercase',
                    letterSpacing: '0.2em',
                    display: 'block',
                    padding: '1.25rem 0',
                    borderBottom: '1px solid hsl(var(--border))',
                    fontFamily: '"Roboto", sans-serif',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.05 }}
              style={{ marginTop: 'auto' }}
            >
              <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%', maxWidth: '300px' }}>
                <a 
                  href="https://wealthxcelerate.app.clientclub.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="nav-login-btn" 
                  style={{ width: '100%', justifyContent: 'center', padding: '1.1rem', fontSize: '14px', textDecoration: 'none' }}
                >
                  <LogIn size={18} style={{ marginRight: '0.75rem' }} />
                  Log In
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>



      <style>{`
        .nav-link {
          text-decoration: none;
          color: hsl(var(--foreground) / 0.7);
          font-weight: 600;
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          transition: all 0.3s ease;
          position: relative;
        }
        .nav-link:hover {
          color: hsl(var(--foreground));
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: hsl(var(--primary));
          transition: width 0.3s ease;
        }
        .nav-link:hover::after {
          width: 100%;
        }
        .nav-login-btn {
          background: transparent;
          border: 1px solid hsl(var(--border));
          color: hsl(var(--foreground));
          padding: 0.6rem 1.5rem;
          font-size: 14px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          white-space: nowrap;
          border-radius: 8px;
          cursor: pointer;
          display: flex;
          align-items: center;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        @keyframes passiveShine {
          0% { left: -100%; }
          15% { left: 200%; }
          100% { left: 200%; }
        }
        .nav-login-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 60%;
          height: 100%;
          background: linear-gradient(
            to right,
            transparent,
            rgba(255, 255, 255, 0.3),
            transparent
          );
          transform: skewX(-25deg);
          animation: passiveShine 6s infinite cubic-bezier(0.16, 1, 0.3, 1);
        }
        .nav-login-btn:hover {
          border-color: hsl(var(--primary));
          color: hsl(var(--foreground));
          box-shadow: 0 0 15px hsl(var(--primary) / 0.15);
        }
        .nav-login-btn:hover::before {
          /* Force an immediate shine on hover by resetting animation or overriding left */
          animation: none;
          left: 200%;
          transition: left 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .navbar-logo {
          height: 80px;
        }
        @media (max-width: 900px) {
          .mobile-only {
            display: flex !important;
          }
          .navbar-logo-link {
            display: flex;
            align-items: center;
          }
          .navbar-logo {
            height: auto !important;
            max-height: 52px;
            width: auto !important;
            max-width: 150px;
            object-fit: contain;
            object-position: left center;
          }
          /* On mobile: switch from 3-col grid to simple flex so the
             collapsed center column doesn't push the hamburger off-screen */
          nav {
            display: flex !important;
            justify-content: space-between !important;
            width: 100% !important;
            max-width: 100% !important;
            padding-left: 1rem !important;
            padding-right: 1rem !important;
            box-sizing: border-box !important;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
