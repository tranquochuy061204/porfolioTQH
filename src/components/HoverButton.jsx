import React from 'react';

const HoverButton = ({ className, content }) => {
  return (
    <button
      className={`${className ?? ''} rounded-full shadow-md transition-all duration-300 hover:translate-x-[-4px] 
         hover:translate-y-[-4px]  hover:shadow-[4px_4px_0px_#d6e0ff] 
         active:translate-x-[0px] active:translate-y-[0px]  active:shadow-none flex gap-1 text-center items-center`}
    >
      {content}
    </button>
  );
};

export default HoverButton;
