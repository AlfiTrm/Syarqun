"use client";

import React from "react";
import PDFLesson from "./pdf/PDFLesson";
import VideoLesson from "./video/VideoLessont";
import { ArticlePreviewSlider } from "./article/Article";

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
    return <PDFLesson title={title} files={files} />;
  }

  if (props.type === "link") {
    const { title, links } = props.content;
    return <ArticlePreviewSlider title={title} links={links} />;
  }

  return null;
}