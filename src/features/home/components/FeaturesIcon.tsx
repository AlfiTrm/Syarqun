import { BookOpen, Calculator, Lightbulb } from "lucide-react";
import React from "react";

const FeaturesIcon = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
      <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
        <BookOpen className="w-6 h-6 text-emerald-600" />
        <span className="text-emerald-700 font-medium">Materi Lengkap</span>
      </div>
      <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
        <Calculator className="w-6 h-6 text-teal-600" />
        <span className="text-teal-700 font-medium">Contoh Praktis</span>
      </div>
      <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
        <Lightbulb className="w-6 h-6 text-emerald-600" />
        <span className="text-emerald-700 font-medium">Mudah Dipahami</span>
      </div>
    </div>
  );
};

export default FeaturesIcon;
