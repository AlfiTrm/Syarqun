import React from "react";

const Benefits = () => {
  return (
    <section>
      <div className="mt-16 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-white">
        <h3 className="text-2xl font-bold mb-6 text-center">
          Mengapa Mempelajari Akuntansi Syariah?
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="bg-white/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl font-bold">1</span>
            </div>
            <h4 className="font-semibold mb-2">Kepatuhan terhadap Syariah</h4>
            <p className="text-emerald-100 text-sm">
              Menjamin setiap transaksi keuangan sesuai prinsip Islam yang adil dan transparan.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-white/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl font-bold">2</span>
            </div>
            <h4 className="font-semibold mb-2">Transparansi & Akuntabilitas</h4>
            <p className="text-emerald-100 text-sm">
              Pencatatan yang jujur dan terbuka sebagai landasan sistem ekonomi Islam.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-white/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl font-bold">3</span>
            </div>
            <h4 className="font-semibold mb-2">Peluang Karier & Industri</h4>
            <p className="text-emerald-100 text-sm">
              Meningkatkan kompetensi untuk bersaing di sektor keuangan syariah yang berkembang pesat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
