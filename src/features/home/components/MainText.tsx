import React from "react";
import { useText } from "../hooks/useText";

const MainText = () => {
  const currentText = useText();

  return (
    <section>
      <div className="mb-8">
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-800 bg-clip-text text-transparent mb-6">
          Syarkun
        </h1>
        <div className="h-16 flex items-center justify-center">
          <h2 className="text-2xl md:text-4xl font-semibold text-emerald-700 transition-all duration-500 ease-in-out">
            {currentText}
          </h2>
        </div>
      </div>

      <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
        Platform pembelajaran komprehensif untuk memahami konsep dan
        implementasi akuntansi syariah
      </p>
    </section>
  );
};

export default MainText;
