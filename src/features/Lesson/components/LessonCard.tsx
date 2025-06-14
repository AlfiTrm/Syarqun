import React from "react";
import { ILesson } from "../types/ILesson";

export default function LessonCard({
  icon,
  title,
  description,
  index,
  active,
  onClick,
}: ILesson) {
  const Icon = icon;
  console.log(index);
  return (
    <div
      onClick={onClick}
      className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
        active
          ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-xl"
          : "bg-white hover:bg-gray-50 shadow-lg hover:shadow-xl"
      }`}
    >
      <div className="flex items-center gap-4">
        <div
          className={`p-3 rounded-xl ${
            active
              ? "bg-white/20"
              : "bg-gradient-to-r from-emerald-600 to-teal-600 text-white"
          }`}
        >
          <Icon className="w-8 h-8" />
        </div>
        <div>
          <h3
            className={`text-xl font-bold mb-1 ${
              active ? "text-white" : "text-emerald-800"
            }`}
          >
            {title}
          </h3>
          <p className={`${active ? "text-emerald-100" : "text-gray-600"}`}>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
