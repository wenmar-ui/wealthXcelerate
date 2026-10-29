import React from 'react';

const LoadingLogo: React.FC = () => {
  return (
    <div style={{ position: 'relative', width: 'min(85vw, 520px)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <img
        src="/logo-dark.png"
        alt="WealthXcelerate"
        style={{ width: '100%', height: 'auto', display: 'block' }}
      />
    </div>
  );
};

export default LoadingLogo;
