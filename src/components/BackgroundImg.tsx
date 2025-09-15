import React from 'react';

interface BackgroundImgProps {
  src: string;
  alt?: string;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const BackgroundImg: React.FC<BackgroundImgProps> = ({
  src,
  alt = '',
  children,
  className = '',
  style = {},
}) => (
  <div
    className={`background-img-container ${className}`}
    style={{
      position: 'fixed',
      inset: 0,
      width: '100vw',
      height: '100vh',
      zIndex: -1,
      overflow: 'hidden',
      ...style,
    }}
  >
    <img
      src={src}
      alt={alt}
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: -1,
      }}
      draggable={false}
    />
    {children}
  </div>
);

export default BackgroundImg;
