import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import LoadingLogo from './LoadingLogo';

const LOADING_DURATION = 4200; // ms before auto-dismiss

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, LOADING_DURATION);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: '#000000',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        overflow: 'hidden',
      }}
    >
      {/* Noise/Grain Overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")',
          opacity: 0.04,
          pointerEvents: 'none',
          zIndex: 1,
          mixBlendMode: 'multiply',
        }}
      />
      {/* Ambient radial glow that pulses behind logo */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '60vw',
          height: '60vw',
          background: 'radial-gradient(circle at center, rgba(255,255,255,0.03) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Scanning line that sweeps across the logo */}
      <motion.div
        initial={{ x: '-100%', opacity: 0 }}
        animate={{ x: '100vw', opacity: [0, 0.4, 0.4, 0] }}
        transition={{ delay: 0.3, duration: 1.8, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          left: 0,
          width: 2,
          height: '40vh',
          background: 'linear-gradient(to bottom, transparent, rgba(100, 175, 3, 0.2), transparent)',
          boxShadow: '0 0 20px 2px rgba(100, 175, 3, 0.05)',
          borderRadius: 2,
          pointerEvents: 'none',
          zIndex: 10,
        }}
      />

      {/* Corner bracket decorations - top left */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1, duration: 0.6, ease: 'easeOut' }}
        style={{ position: 'absolute', top: '12%', left: '8%' }}
      >
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path d="M40 2 L2 2 L2 40" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" opacity="0.1" />
        </svg>
      </motion.div>
      {/* top right */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.15, duration: 0.6, ease: 'easeOut' }}
        style={{ position: 'absolute', top: '12%', right: '8%' }}
      >
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path d="M0 2 L38 2 L38 40" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" opacity="0.1" />
        </svg>
      </motion.div>
      {/* bottom left */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
        style={{ position: 'absolute', bottom: '12%', left: '8%' }}
      >
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path d="M40 38 L2 38 L2 0" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" opacity="0.1" />
        </svg>
      </motion.div>
      {/* bottom right */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.25, duration: 0.6, ease: 'easeOut' }}
        style={{ position: 'absolute', bottom: '12%', right: '8%' }}
      >
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path d="M0 38 L38 38 L38 0" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" opacity="0.1" />
        </svg>
      </motion.div>

      {/* The Logo */}
      <LoadingLogo />

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0, y: 16, letterSpacing: '0.1em' }}
        animate={{ opacity: 1, y: 0, letterSpacing: '0.4em' }}
        transition={{ delay: 2.0, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        style={{
          color: '#ffffff',
          fontSize: '0.7rem',
          textTransform: 'uppercase',
          fontWeight: 700,
          marginTop: '2.5rem',
          fontFamily: 'inherit',
          opacity: 0.8
        }}
      >
        Financial Transformation
      </motion.p>

      {/* Loading bar container */}
      <div
        style={{
          marginTop: '2rem',
          width: 200,
          height: 3,
          background: 'rgba(255,255,255,0.05)',
          borderRadius: 4,
          overflow: 'hidden',
        }}
      >
        <motion.div
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ delay: 0.4, duration: LOADING_DURATION / 1000 - 0.5, ease: 'linear' }}
          style={{
            height: '100%',
            background: 'linear-gradient(to right, #ffffff, #64af03)',
            borderRadius: 4,
          }}
        />
      </div>

      {/* Status Label */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0.5, 1] }}
        transition={{ delay: 0.5, duration: 1.5, repeat: Infinity }}
        style={{
          position: 'absolute',
          bottom: '10%',
          color: '#ffffff',
          fontSize: '0.65rem',
          textTransform: 'uppercase',
          letterSpacing: '0.2em',
          fontWeight: 600,
          opacity: 0.4
        }}
      >
        Initializing Architecture
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;
