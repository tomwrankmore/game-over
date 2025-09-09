import React from "react";

const Hero = () => {
  return (
    <div className="relative h-full min-h-lvh w-full max-w-3xl overflow-hidden">
      <img
        src="/gun.png"
        alt="Hero"
        className="absolute right-10 bottom-30 left-0 w-[90vw] object-contain opacity-100"
        style={{ zIndex: 0 }}
      />
    </div>
  );
};

export default Hero;
