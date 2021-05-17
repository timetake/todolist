import React from 'react';

export default function Input({ handleInputChange, input }) {
  return (
    <input
      value={input}
      type='text'
      onChange={(e) => handleInputChange(e.target.value)}
    />
  );
}
