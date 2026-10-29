import React from 'react';
import HoverGalaxyButton from './HoverGalaxyButton';
import HoverGalaxyLink from './HoverGalaxyLink';

const CTASection: React.FC = () => {
  return (
    <section style={{ padding: '100px 0', borderTop: '1px solid hsl(var(--border))', backgroundColor: 'hsl(var(--background))' }}>
      <div className="container">
        <div className="cta-content-wrapper" style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          textAlign: 'center',
          maxWidth: '700px',
          margin: '0 auto'
        }}>
          <h2 style={{ fontSize: '72px', fontWeight: 400, marginBottom: '1.25rem', letterSpacing: '-0.02em', color: '#64af03' }}>
            Begin Your Journey
          </h2>
          <p style={{ fontSize: '22px', color: 'hsl(var(--muted-foreground))', marginBottom: '2.5rem', lineHeight: 1.6 }}>
            Connect with our experts and start implementing the blueprint today.
          </p>
          <div className="cta-button-group" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <a href="https://www.pmg1.com/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'inline-flex', minWidth: '260px' }}>
                <HoverGalaxyButton
                  className="btn btn-primary" 
                  style={{ 
                    padding: '1rem 3rem', 
                    fontSize: '14px', 
                    borderRadius: '8px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    gap: '0.75rem',
                    fontWeight: 600,
                    transition: 'background-color 0.2s ease',
                    border: '1px solid #64af03',
                    cursor: 'pointer',
                    width: '100%',
                    minWidth: '260px'
                  }}
                  whileHover={{ scale: 1.05, backgroundColor: '#64af03', color: '#ffffff' }}
                >
                  Find a WealthX Coach
                </HoverGalaxyButton>
              </a>
              <HoverGalaxyLink 
                to="/contact" 
                className="btn btn-outline" 
                style={{ 
                  padding: '1rem 3rem', 
                  fontSize: '14px', 
                  borderRadius: '8px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  gap: '0.75rem',
                  fontWeight: 600,
                  backgroundColor: 'transparent',
                  transition: 'all 0.2s ease',
                  cursor: 'pointer',
                  border: '1px solid hsl(87 97% 45%)',
                  color: 'hsl(87 97% 45%)',
                  minWidth: '260px'
                }}
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(100, 175, 3, 0.1)', color: 'hsl(87 97% 45%)' }}
              >
                Enroll in University
              </HoverGalaxyLink>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .cta-content-wrapper {
             padding: 0 1rem !important;
          }
          .cta-content-wrapper h2 {
             font-size: 2rem !important;
          }
          .cta-button-group {
             flex-direction: column !important;
             width: 100% !important;
          }
          .cta-button-group a, .cta-button-group button {
             width: 100% !important;
             min-width: 100% !important;
             justify-content: center !important;
             min-height: 54px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default CTASection;
