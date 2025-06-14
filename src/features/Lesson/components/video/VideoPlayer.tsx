interface Props {
  video: { name: string; url: string };
  embedUrl: string;
  videoError: boolean;
  onLoad: () => void;
  onError: () => void;
}

import { ExternalLink } from "lucide-react";

export default function VideoPlayer({
  video,
  embedUrl,
  videoError,
  onLoad,
  onError,
}: Props) {
  return (
    <div className="aspect-video bg-gray-900">
      {videoError || !embedUrl ? (
        <div className="w-full h-full flex items-center justify-center text-white">
          <div className="text-center">
            <div className="text-6xl mb-4">📹</div>
            <p className="text-lg mb-2">Video tidak dapat dimuat</p>
            <button
              onClick={() => window.open(video.url, "_blank")}
              className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Buka di YouTube
            </button>
          </div>
        </div>
      ) : (
        <iframe
          src={embedUrl}
          title={video.name}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
          onLoad={onLoad}
          onError={onError}
        />
      )}
    </div>
  );
}
