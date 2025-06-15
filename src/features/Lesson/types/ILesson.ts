export interface ILesson {
    icon: React.ElementType;
    title: string;
    description: string;
    index: number;
    active: boolean;
    onClick: () => void;
}

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