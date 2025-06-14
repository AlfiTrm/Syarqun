"use client";
import { useState, useEffect } from "react";
import { Video } from "lucide-react";
import VideoHeader from "./VideoHeader";
import VideoPlayer from "./VideoPlayer";
import VideoControls from "./VideoControls";
import VideoPlaylist from "./VideoPlaylist";
import { getEmbedUrl, storage } from "../../hooks/useVideo";

interface Video {
  name: string;
  url: string;
  duration?: string;
  completed?: boolean;
  description?: string;
}

interface VideoLessonProps {
  title: string;
  videos: Video[];
}

export default function VideoLesson({ title, videos: initialVideos }: VideoLessonProps) {
  const storageKey = `video-progress-${title.toLowerCase().replace(/\s+/g, "-")}`;

  const [videos, setVideos] = useState<Video[]>(() => {
    try {
      const saved = storage.getItem(storageKey);
      if (saved) {
        const parsed = JSON.parse(saved);
        return initialVideos.map((v) => {
          const found = parsed.find((s: { url: string; }) => s.url === v.url);
          return { ...v, completed: found?.completed ?? v.completed ?? false };
        });
      }
    } catch {}
    return initialVideos;
  });

  const [selectedVideo, setSelectedVideo] = useState<Video>(videos[0]);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    const data = videos.map((v) => ({
      name: v.name,
      url: v.url,
      completed: v.completed ?? false,
    }));
    storage.setItem(storageKey, JSON.stringify(data));
  }, [videos, title, storageKey]);

  useEffect(() => {
    const updated = videos.find((v) => v.url === selectedVideo.url);
    if (updated) setSelectedVideo(updated);
  }, [videos, selectedVideo.url]);

  const completedCount = videos.filter((v) => v.completed).length;
  const embedUrl = getEmbedUrl(selectedVideo.url);

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <VideoHeader
        title={title}
        total={videos.length}
        completed={completedCount}
      />

      <div className="flex gap-6 flex-col">
        <div className="lg:col-span-3">
          <VideoPlayer
            video={selectedVideo}
            embedUrl={embedUrl}
            videoError={videoError}
            onLoad={() => setVideoError(false)}
            onError={() => setVideoError(true)}
          />

          <VideoControls
            video={selectedVideo}
            onOpen={() => window.open(selectedVideo.url, "_blank")}
            onMarkComplete={() =>
              setVideos((prev) =>
                prev.map((v) =>
                  v.url === selectedVideo.url ? { ...v, completed: true } : v
                )
              )
            }
            onMarkIncomplete={() =>
              setVideos((prev) =>
                prev.map((v) =>
                  v.url === selectedVideo.url ? { ...v, completed: false } : v
                )
              )
            }
          />
        </div>

        <VideoPlaylist
          videos={videos}
          selectedUrl={selectedVideo.url}
          onSelect={setSelectedVideo}
        />
      </div>
    </div>
  );
}
