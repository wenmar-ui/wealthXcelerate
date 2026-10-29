import React from 'react';

const AnimatedLogo: React.FC<{ className?: string; style?: React.CSSProperties }> = ({ className, style }) => {
  return (
    <div
      className={className}
      style={{
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'visible',
        width: '100%',
        ...style
      }}
    >
      <img
        src="/logo-dark.png"
        alt="WealthXcelerate"
        style={{
          width: '100%',
          height: 'auto',
          display: 'block'
        }}
      />
    </div>
  );
};

export default AnimatedLogo;
