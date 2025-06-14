import React from "react";

const ScrollIcon = () => {
  return (
    <section className="flex justify-center transform mt-11">
      <div className="w-6 h-10 border-2 border-emerald-600 rounded-full flex justify-center motion-safe:animate-bounce">
        <div className="w-1 h-3 bg-emerald-600 rounded-full mt-2 animate-bounce"></div>
      </div>
    </section>
  );
};

export default ScrollIcon;
