import React from 'react';

interface PageContainerProps {
  children: React.ReactNode;
  bgColor?: string;
  textColor?: string;
}

const PageContainer = ({
  children,
  bgColor,
  textColor,
}: PageContainerProps) => {
  return (
    <div
      className={`relative mx-auto p-24 overflow-hidden ${bgColor ? bgColor : ''} ${textColor ? textColor : ''}`}
    >
      {/* <div
        className="opacity-50"
        style={{
          position: 'absolute',
          // inset: 0,
          top: 0,
          bottom: 0,
          right: -10,
          left: -10,
          zIndex: 0,
          backgroundImage: `url('/PDR_netting.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '110%',
          height: '110%',
        }}
        aria-hidden="true"
      /> */}
      {children}
    </div>
  );
};

export default PageContainer;
