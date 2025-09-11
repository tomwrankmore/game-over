import React from 'react';

interface SectionHeadingProps {
  children: React.ReactNode;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ children }) => {
  return (
    <h1 className="mx-auto lg:mx-0 text-4xl lg:text-5xl xl:text-7xl uppercase font-bold mb-4 border-b-8 w-fit border-boycott-light z-10 block">
      {children}
    </h1>
  );
};

export default SectionHeading;
