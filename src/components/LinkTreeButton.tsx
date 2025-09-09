import React from "react";

interface LinkTreeButtonProps {
  children: React.ReactNode;
}

const LinkTreeButton = ({ children }: LinkTreeButtonProps) => {
  return (
    <button className="rounded bg-white px-4 py-2 text-black transition-transform duration-150 hover:scale-105">
      {children}
    </button>
  );
};

export default LinkTreeButton;

// h-14 w-full rounded-full border-0 bg-white/95 text-base font-medium text-gray-800 shadow-lg transition-all duration-200 hover:scale-[1.02] hover:bg-white hover:text-gray-900 hover:shadow-xl
