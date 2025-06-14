import React from "react";

const Header = () => {
  return (
    <header>
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-6">
          Memahami Akuntansi Syariah
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Pelajari prinsip, konsep, dan penerapan akuntansi berbasis syariah
          untuk memahami bagaimana sistem keuangan Islam dijalankan secara adil dan transparan.
        </p>
      </div>
    </header>
  );
};

export default Header;
