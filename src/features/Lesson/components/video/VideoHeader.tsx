import { Video, CheckCircle2 } from "lucide-react";

export default function VideoHeader({
  title,
  total,
  completed,
}: {
  title: string;
  total: number;
  completed: number;
}) {
  const percentage = total > 0 ? (completed / total) * 100 : 0;
  return (
    <div className="bg-gradient-to-r from-green-600 to-emerald-700 rounded-xl p-6 text-white">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <Video className="w-8 h-8" />
          <h2 className="text-2xl font-bold">{title}</h2>
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Progress (Auto-saved)</span>
          <span>{completed}/{total} videos completed ({Math.round(percentage)}%)</span>
        </div>
        <div className="w-full bg-green-800 rounded-full h-3">
          <div
            className="bg-white h-3 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${percentage}%` }}
          />
        </div>
        {completed === total && total > 0 && (
          <div className="flex items-center gap-2 text-sm mt-2">
            <CheckCircle2 className="w-4 h-4" />
            <span className="font-medium">WAWWWWW!!! Semua video selesai!</span>
          </div>
        )}
      </div>
    </div>
  );
}
