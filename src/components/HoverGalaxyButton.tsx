import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { ReactNode } from 'react';

interface HoverGalaxyButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
  particleCount?: number;
  whileHover?: any;
  whileTap?: any;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const HoverGalaxyButton: React.FC<HoverGalaxyButtonProps> = ({ 
  children, 
  onClick, 
  className = "", 
  style = {}, 
  particleCount = 6,
  whileHover = { scale: 1.05 },
  whileTap = { scale: 0.98 },
  type = 'button',
  disabled = false
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.button
      type={type}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={className}
      whileHover={whileHover}
      whileTap={whileTap}
      style={{ 
        position: 'relative', 
        overflow: 'hidden', 
        zIndex: 1, 
        border: 'none',
        cursor: 'pointer',
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
        gap: 'inherit' // Inherit gap from parent button if set
      }}>
        {children}
      </div>
    </motion.button>
  );
};

export default HoverGalaxyButton;
