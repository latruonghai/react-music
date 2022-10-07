import React from 'react';

const pauseLiner = () => {
  return (
    <div className="flex items-center justify-center gap-[2px] ">
      <div className="w-[3px] h-[15px] bg-white animate-music-liner"></div>
      <div className="w-[3px] h-[15px] bg-white animate-music-liner1"></div>
      <div className="w-[3px] h-[15px] bg-white animate-music-liner2"></div>
      <div className="w-[3px] h-[15px] bg-white animate-music-liner3"></div>
    </div>
  );
};

export default pauseLiner;
