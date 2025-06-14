"use client";
import { useState } from "react";
import { FileText, Download, Eye, X } from "lucide-react";

type PDFFile = {
  name: string;
  url: string;
};

type PDFLessonProps = {
  title: string;
  files: PDFFile[];
};

export default function PDFLesson({ title, files }: PDFLessonProps) {
  const [selectedPDF, setSelectedPDF] = useState(0);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const currentPDF = files[selectedPDF];

  const handleDownload = (url: string, filename: string) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const openPreview = () => {
    setIsPreviewOpen(true);
  };

  const closePreview = () => {
    setIsPreviewOpen(false);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">{title}</h2>

      <div className="mb-6">
        <div className="bg-gray-100 rounded-lg p-8 text-center border-2 border-dashed border-gray-300">
          <FileText className="w-24 h-24 mx-auto text-red-500 mb-4" />
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            {currentPDF.name}
          </h3>
          <p className="text-sm text-gray-500 mb-4">PDF Document</p>
          <div className="flex justify-center gap-3 flex-wrap">
            <button
              onClick={openPreview}
              className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              <Eye className="w-4 h-4" />
              Preview
            </button>
            <button
              onClick={() => handleDownload(currentPDF.url, currentPDF.name)}
              className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
            >
              <Download className="w-4 h-4" />
              Download
            </button>
          </div>
        </div>
      </div>

      {files.length > 1 && (
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-700 mb-3">
            Pilih PDF Lain:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {files.map((file, index) => (
              <button
                key={index}
                onClick={() => setSelectedPDF(index)}
                className={`p-3 rounded-lg border-2 text-left transition-all ${
                  selectedPDF === index
                    ? "border-blue-500 bg-blue-50 text-blue-700"
                    : "border-gray-200 bg-white hover:border-gray-300 text-gray-700"
                }`}
              >
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-red-500" />
                  <div>
                    <p className="font-medium text-sm">{file.name}</p>
                    <p className="text-xs text-gray-500">PDF Document</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {isPreviewOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg w-full max-w-5xl h-5/6 max-h-[90vh] flex flex-col">
            <div className="flex justify-between items-center p-4 border-b bg-gray-50">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{currentPDF.name}</h3>
                <p className="text-sm text-gray-500">PDF Document</p>
              </div>
              <button
                onClick={closePreview}
                className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-200 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="flex-1 p-4 overflow-hidden">
              <div className="h-full bg-white rounded-lg border overflow-hidden">
                <iframe
                  src={currentPDF.url}
                  className="w-full h-full border-0"
                  title={`Preview ${currentPDF.name}`}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}