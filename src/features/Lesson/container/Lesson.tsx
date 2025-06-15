"use client";
import { useState } from "react";
import { lessonList } from "../data/lessonList";
import React from "react";
import Header from "../components/Header";
import LessonContent, {
} from "../components/LessonContent";
import { LinkContent, PPTContent, VideoContent } from "../types/ILesson";


export default function Lesson() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section
      id="lesson"
      className="py-20 px-4 bg-gradient-to-br from-gray-50 to-emerald-50"
    >
      <div className="max-w-6xl mx-auto">
        <Header />
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          <div className="space-y-4">
            {lessonList.map((lesson, index) => (
              <div
                key={lesson.id}
                className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                  activeTab === index
                    ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-xl"
                    : "bg-white hover:bg-gray-50 shadow-lg hover:shadow-xl"
                }`}
                onClick={() => setActiveTab(index)}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`p-3 rounded-xl ${
                      activeTab === index
                        ? "bg-white/20"
                        : "bg-gradient-to-r from-emerald-600 to-teal-600 text-white"
                    }`}
                  >
                    {React.createElement(lesson.icon, { className: "w-8 h-8" })}
                  </div>
                  <div>
                    <h3
                      className={`text-xl font-bold mb-1 ${
                        activeTab === index ? "text-white" : "text-emerald-800"
                      }`}
                    >
                      {lesson.title}
                    </h3>
                    <p
                      className={`${
                        activeTab === index
                          ? "text-emerald-100"
                          : "text-gray-600"
                      }`}
                    >
                      {lesson.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl">
            {lessonList[activeTab].type === "ppt" && (
              <LessonContent
                type="ppt"
                content={lessonList[activeTab].content as PPTContent}
              />
            )}
            {lessonList[activeTab].type === "video" && (
              <LessonContent
                type="video"
                content={lessonList[activeTab].content as VideoContent}
              />
            )}
            {lessonList[activeTab].type === "link" && (
              <LessonContent
                type="link"
                content={lessonList[activeTab].content as LinkContent}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
