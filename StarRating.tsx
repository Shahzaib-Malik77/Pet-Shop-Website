import { Star } from 'lucide-react';

export default function StarRating({ rating, size = 16, showValue = false }: { rating: number; size?: number; showValue?: boolean }) {
  return (
    <div className="flex items-center gap-1">
      <div className="flex">
        {[0, 1, 2, 3, 4].map((i) => {
          const fill = Math.max(0, Math.min(1, rating - i));
          return (
            <span key={i} className="relative" style={{ width: size, height: size }}>
              <Star size={size} className="absolute inset-0 text-[#E86A10]/25" />
              <span className="absolute inset-0 overflow-hidden" style={{ width: `${fill * 100}%` }}>
                <Star size={size} className="text-[#E86A10]" fill="currentColor" />
              </span>
            </span>
          );
        })}
      </div>
      {showValue && <span className="text-sm font-medium text-[#1a3d1a]">{rating.toFixed(1)}</span>}
    </div>
  );
}