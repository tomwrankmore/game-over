import React from 'react';

interface SectionHeadingProps {
  children: React.ReactNode;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ children }) => {
  return (
    <h1 className="text-4xl lg:text-5xl uppercase font-bold mb-6 border-b-8 w-fit border-boycott-light z-10 block">
      {children}
    </h1>
  );
};

export default SectionHeading;
