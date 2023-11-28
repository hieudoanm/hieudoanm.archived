import React from 'react';

export const YellowButton: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  return (
    <button
      type="button"
      className="rounded-3xl px-4 py-1 font-PS2P uppercase transition duration-700 border-4 border-dashed flex items-center justify-center focus:ring-transparent focus:outline-none btn-yellow bg-yellow text-tiny"
    >
      {children}
    </button>
  );
};

export default YellowButton;
