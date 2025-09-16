import React from 'react';

interface PageContainerProps {
  children: React.ReactNode;
  bgColor?: string;
  textColor?: string;
  fullHeight?: boolean;
  id?: string;
}

const PageContainer = ({
  children,
  bgColor,
  textColor,
  fullHeight,
  id,
}: PageContainerProps) => {
  return (
    <div
      id={id}
      className={`relative overflow-hidden ${bgColor ? bgColor : ''} ${textColor ? textColor : ''} ${
        fullHeight ? 'min-h-screen flex items-center pt-16' : ''
      }`}
    >
      <div className="mx-auto container py-24 px-6">{children}</div>
    </div>
  );
};

export default PageContainer;
