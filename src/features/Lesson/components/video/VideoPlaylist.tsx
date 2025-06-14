import { Play, CheckCircle2 } from "lucide-react";

interface Video {
  name: string;
  url: string;
  completed?: boolean;
}

export default function VideoPlaylist({
  videos,
  selectedUrl,
  onSelect,
}: {
  videos: Video[];
  selectedUrl: string;
  onSelect: (v: Video) => void;
}) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden sticky top-6">
      <div className="p-4 bg-gray-50 border-b">
        <h4 className="font-semibold text-gray-900">Video Playlist</h4>
        <p className="text-sm text-gray-600">
          {videos.length} video • {videos.filter((v) => v.completed).length} ditonton
        </p>
      </div>
      <div className="max-h-[500px] overflow-y-auto">
        {videos.map((video, index) => (
          <button
            key={index}
            onClick={() => onSelect(video)}
            className={`w-full p-4 text-left border-l-4 cursor-pointer ${
              selectedUrl === video.url
                ? "border-green-500 bg-green-50"
                : "border-transparent hover:bg-gray-50"
            }`}
          >
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 mt-1">
                {video.completed ? (
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                ) : (
                  <Play className="w-5 h-5 text-gray-400" />
                )}
              </div>
              <div>
                <div className="font-medium text-gray-800">{video.name}</div>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
