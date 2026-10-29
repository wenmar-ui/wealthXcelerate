import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';

const MotionLink = motion(Link);

interface HoverGalaxyLinkProps {
  to: string;
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  particleCount?: number;
  whileHover?: any;
  whileTap?: any;
  onMouseEnter?: (e: React.MouseEvent) => void;
  onMouseLeave?: (e: React.MouseEvent) => void;
}

const HoverGalaxyLink: React.FC<HoverGalaxyLinkProps> = ({ 
  to,
  children, 
  className = "", 
  style = {}, 
  particleCount = 15,
  whileHover = { scale: 1.05 },
  whileTap = { scale: 0.98 },
  onMouseEnter,
  onMouseLeave
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = (e: React.MouseEvent) => {
    setIsHovered(true);
    if (onMouseEnter) onMouseEnter(e);
  };

  const handleMouseLeave = (e: React.MouseEvent) => {
    setIsHovered(false);
    if (onMouseLeave) onMouseLeave(e);
  };

  return (
    <MotionLink
      to={to}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={className}
      whileHover={whileHover}
      whileTap={whileTap}
      style={{ 
        position: 'relative', 
        overflow: 'hidden', 
        zIndex: 1, 
        textDecoration: 'none',
        display: 'inline-block',
        ...style 
      }}
    >
      <AnimatePresence>
        {isHovered && (
          <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: -1 }}>
            {[...Array(particleCount)].map((_, i) => {
              const size = Math.random() * 2 + 1;
              const duration = 1 + Math.random() * 2;
              const delay = Math.random() * -3;
              const leftPos = Math.random() * 100;
              
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: [0, 1, 1, 0], y: -150, x: (Math.random() - 0.5) * 30 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration, repeat: Infinity, delay, ease: "linear" }}
                  style={{
                    position: 'absolute', left: `${leftPos}%`, bottom: '-10px',
                    width: `${size}px`, height: `${size}px`, borderRadius: '50%',
                    backgroundColor: i % 3 === 0 ? '#64af03' : 'white',
                    boxShadow: i % 3 === 0 ? `0 0 8px rgba(100, 175, 3, 0.8)` : `0 0 6px rgba(255,255,255,0.8)`
                  }}
                />
              );
            })}
          </div>
        )}
      </AnimatePresence>
      <div style={{ 
        position: 'relative', 
        zIndex: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 'inherit'
      }}>
        {children}
      </div>
    </MotionLink>
  );
};

export default HoverGalaxyLink;
