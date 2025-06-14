"use client";

import PPTLesson from "./PptLesson";
import VideoLesson from "./video/VideoLessont";

export type VideoContent = {
  title: string;
  videos: { name: string; url: string }[];
};

export type PPTContent = {
  title: string;
  files: { name: string; url: string }[];
};

export type LinkContent = {
  title: string;
  links: { name: string; url: string }[];
};

export type LessonContentProps =
  | { type: "ppt"; content: PPTContent }
  | { type: "video"; content: VideoContent }
  | { type: "link"; content: LinkContent };

export default function LessonContent(props: LessonContentProps) {
  if (props.type === "video") {
    const { title, videos } = props.content;
    return <VideoLesson title={title} videos={videos} />;
  }

  if (props.type === "ppt") {
    const { title, files } = props.content;
    return <PPTLesson title={title} files={files} />;
  }

  if (props.type === "link") {
    const { title, links } = props.content;
    return (
      <div className="w-full max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">{title}</h2>
        <div className="space-y-3">
          {links.map((link, index) => (
            <div key={index} className="p-4 border rounded-lg hover:bg-gray-50">
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                {link.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return null;
}
