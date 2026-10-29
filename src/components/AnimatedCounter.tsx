import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';

interface CounterProps {
  from?: number;
  to: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  style?: React.CSSProperties;
  delay?: number;
}

const AnimatedCounter: React.FC<CounterProps> = ({
  from = 0,
  to,
  duration = 2,
  prefix = '',
  suffix = '',
  style,
  delay = 0
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: false, margin: "0px 0px -50px 0px" });
  
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => {
    return prefix + Math.round(latest).toString() + suffix;
  });

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, { 
        duration, 
        delay,
        ease: [0.16, 1, 0.3, 1] // Custom ease-out
      });
      return controls.stop;
    } else {
      count.set(from);
    }
  }, [inView, count, from, to, duration, delay]);

  return <motion.span ref={ref} style={style}>{rounded}</motion.span>;
};

export default AnimatedCounter;
