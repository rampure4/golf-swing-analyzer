// components/Card.tsx
import React from 'react';

const Card = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
    backgroundColor:"#fff",
    borderRadius:"16px",
    padding:"1rem",
    boxShadow: "0 2px 8px rdba(0,0,0,0.05",
    border: "1px solid #eee",
    }}
  >
    {children}
  </div>
);

export default Card;
