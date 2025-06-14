import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { useState } from "react";

export function ArticlePreviewSlider({
  title,
  links,
}: {
  title: string;
  links: { name: string; url: string }[];
}) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % links.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + links.length) % links.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const currentArticle = links[currentSlide];

  return (
    <div className="w-full max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">{title}</h2>

      <div className="flex items-center justify-between mb-4">
        <button
          onClick={prevSlide}
          disabled={links.length <= 1}
          className="p-2 bg-gray-200 rounded-lg hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors cursor-pointer"
        >
          <ChevronLeft size={20} />
        </button>

        <div className="flex-1 mx-4">
          <div className="flex justify-center space-x-2">
            {links.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? "bg-green-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        <button
          onClick={nextSlide}
          disabled={links.length <= 1}
          className="p-2 bg-gray-200 rounded-lg hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors cursor-pointer"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="relative">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-8 min-h-[400px] flex flex-col justify-center items-center text-center">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
            <div className="text-green-600 mb-4">
              <ExternalLink size={48} className="mx-auto" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              {currentArticle.name}
            </h3>
            <a
              href={currentArticle.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium"
            >
              <ExternalLink size={18} />
              Baca Artikel
            </a>
          </div>
        </div>

        <div className="absolute top-4 right-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm">
          {currentSlide + 1} / {links.length}
        </div>
      </div>

      <div className="mt-6">
        <h4 className="text-lg font-semibold text-gray-700 mb-3">
          Daftar Artikel
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {links.map((link, index) => (
            <div
              key={index}
              className={`p-3 border border-gray-300 rounded-lg cursor-pointer transition-all ${
                index === currentSlide
                  ? "bg-green-50 border-green-300 scale-105"
                  : "hover:bg-gray-50"
              }`}
            >
              <div onClick={() => goToSlide(index)} className="mb-2">
                <span className="text-sm font-medium text-gray-800">
                  {link.name}
                </span>
              </div>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800"
              >
                <ExternalLink size={12} />
                Buka
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
