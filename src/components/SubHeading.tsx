import React from 'react';

interface SubHeadingProps {
  children: React.ReactNode;
}

const SubHeading: React.FC<SubHeadingProps> = ({ children }) => {
  return (
    <h2 className="relative z-20 text-left text-xl lg:text-2xl font-bold mb-4 lg:mb-8 block max-w-xl lg:max-w-2xl">
      {children}
    </h2>
  );
};

export default SubHeading;
