import React from "react";

const Pattern = () => {
  return (
    <div className="absolute inset-0 opacity-16">
      <div className="absolute top-50 left-20 w-32 h-32 border-4 border-emerald-600 rounded-full animate-pulse"></div>
      <div className="absolute top-20 right-10 w-32 h-32 border-4 border-emerald-600 rounded-full animate-pulse"></div>
      <div className="absolute bottom-60 right-30 w-24 h-24 border-4 border-teal-600 rounded-full  animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 border-4 border-teal-600 rounded-full  animate-pulse"></div>
      <div className="absolute top-1/5 left-40 w-16 h-16 border-4 border-emerald-400 rounded-full animate-pulse"></div>
      <div className="absolute top-1/2 right-10 w-16 h-16 border-4 border-emerald-400 rounded-full animate-pulse"></div>
    </div>
  );
};

export default Pattern;
