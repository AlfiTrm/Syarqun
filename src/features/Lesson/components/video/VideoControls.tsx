import { ExternalLink, CheckCircle2 } from "lucide-react";

export default function VideoControls({
  video,
  onOpen,
  onMarkComplete,
  onMarkIncomplete,
}: {
  video: { completed?: boolean };
  onOpen: () => void;
  onMarkComplete: () => void;
  onMarkIncomplete: () => void;
}) {
  return (
    <div className="p-6 border-t flex gap-3">
      <button
        onClick={onOpen}
        className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 cursor-pointer"
      >
        <ExternalLink className="w-4 h-4" />
        Open in YouTube
      </button>
      {video.completed ? (
        <button
          onClick={onMarkIncomplete}
          className="inline-flex items-center gap-2 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 cursor-pointer"
        >
          <CheckCircle2 className="w-4 h-4" />
          Mark as Incomplete
        </button>
      ) : (
        <button
          onClick={onMarkComplete}
          className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 cursor-pointer"
        >
          <CheckCircle2 className="w-4 h-4" />
          Mark as Done
        </button>
      )}
    </div>
  );
}
