import React from 'react';

interface SlantedHeadingProps {
  children: React.ReactNode;
}

const SlantedHeading: React.FC<SlantedHeadingProps> = ({ children }) => {
  return (
    <div className="transform md:-skew-y-6 md:my-12 py-8">
      <h1 className="text-4xl lg:text-5xl xl:text-7xl uppercase font-bold md:mb-4 text-center">
        {children}
      </h1>
    </div>
  );
};

export default SlantedHeading;
