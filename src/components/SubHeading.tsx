import React from 'react';

interface SubHeadingProps {
  children: React.ReactNode;
}

const SubHeading: React.FC<SubHeadingProps> = ({ children }) => {
  return (
    <h2 className="text-center lg:text-left text-xl lg:text-2xl xl:text-4xl font-bold mb-4 lg:mb-8 z-10 block max-w-xl lg:max-w-2xl mx-auto lg:mx-0">
      {children}
    </h2>
  );
};

export default SubHeading;
