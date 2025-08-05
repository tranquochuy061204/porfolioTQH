import React from 'react';

const SkillCircle = ({ children }) => {
  return (
    <div className="rounded-full bg-[url(/images/card_bg.jpg)] w-[80px] h-[80px] flex-center text-4xl">{children}</div>
  );
};

export default SkillCircle;
