// components/Card.tsx
import React from 'react';

const Card = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '1rem',
      backgroundColor: '#fafafa',
      boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
    }}
  >
    {children}
  </div>
);

export default Card;
