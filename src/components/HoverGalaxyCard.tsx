import { useState, forwardRef } from 'react';
import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';

interface HoverGalaxyCardProps extends Omit<HTMLMotionProps<"div">, "children"> {
  particleCount?: number;
  children?: ReactNode;
}

const HoverGalaxyCard = forwardRef<HTMLDivElement, HoverGalaxyCardProps>(
  ({ particleCount = 8, children, style, ...props }, ref) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <motion.div
        ref={ref}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ position: 'relative', overflow: 'hidden', zIndex: 1, ...style }}
        {...props}
      >
        {isHovered && (
          <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: -1 }}>
            {[...Array(particleCount)].map((_, i) => {
              const size = Math.random() * 3 + 1.5;
              const duration = 1.5 + Math.random() * 2.5;
              const delay = Math.random() * -5;
              const leftPos = Math.random() * 100;
              
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: [0, 1, 1, 0], y: -300, x: (Math.random() - 0.5) * 50 }}
                  transition={{ duration, repeat: Infinity, delay, ease: "linear" }}
                  style={{
                    position: 'absolute', left: `${leftPos}%`, bottom: '-20px',
                    width: `${size}px`, height: `${size}px`, borderRadius: '50%',
                    backgroundColor: i % 3 === 0 ? '#64af03' : 'white',
                    boxShadow: i % 3 === 0 ? `0 0 10px rgba(100, 175, 3, 0.8)` : `0 0 8px rgba(255,255,255,0.8)`
                  }}
                />
              );
            })}
          </div>
        )}
        {children}
      </motion.div>
    );
  }
);

HoverGalaxyCard.displayName = 'HoverGalaxyCard';

export default HoverGalaxyCard;
