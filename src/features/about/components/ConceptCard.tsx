import { ChevronDown, ChevronUp } from "lucide-react";
import { IConceptCard } from "../types/IConceptCard";
import React from "react";

export default function ConceptCard({
  id,
  title,
  icon,
  summary,
  details,
  expanded,
  onToggle,
}: IConceptCard) {
  console.log(id)
  return (
    <div
      className={`bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer ${
        expanded ? "ring-2 ring-emerald-500 transition-all duration-500" : ""
      }`}
      onClick={onToggle}
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white flex items-center justify-center rounded-xl w-12 h-12">
          {React.createElement(icon, { className: "w-8 h-8" })}
        </div>

        <div className="flex-1">
          <h3 className="text-xl font-bold text-emerald-800 mb-2">{title}</h3>
          <p className="text-gray-700">{summary}</p>
        </div>
        <div className="text-emerald-600">
          {expanded ? (
            <ChevronUp className="w-5 h-5" />
          ) : (
            <ChevronDown className="w-5 h-5" />
          )}
        </div>
      </div>

      <div
        className={`overflow-hidden transition-all duration-500 ${
          expanded ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="pt-4 border-t border-emerald-200">
          <p className="text-gray-700 leading-relaxed">{details}</p>
        </div>
      </div>
    </div>
  );
}
