import React from 'react';
import { ThumbsUp, ThumbsDown } from 'lucide-react';

export default function DrinkCard({ drink, onLike, onDislike }) {
  return (
    <div className="group rounded-2xl border border-black/5 dark:border-white/10 bg-white dark:bg-neutral-900 shadow-sm hover:shadow-md transition overflow-hidden">
      <div className="aspect-video w-full bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-neutral-800 dark:to-neutral-900">
        {drink.imageUrl ? (
          <img src={drink.imageUrl} alt={drink.name} className="h-full w-full object-cover" />
        ) : (
          <div className="h-full w-full flex items-center justify-center text-neutral-400">No image</div>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-semibold leading-tight">{drink.name}</h3>
            {drink.category && (
              <span className="mt-1 inline-flex items-center rounded-full bg-cyan-100 text-cyan-700 dark:bg-cyan-900/40 dark:text-cyan-200 px-2 py-0.5 text-xs">{drink.category}</span>
            )}
          </div>
          {drink.healthRating && (
            <span className="inline-flex items-center rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-200 px-2 py-0.5 text-xs">
              {drink.healthRating}
            </span>
          )}
        </div>
        {drink.about && <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300 line-clamp-2">{drink.about}</p>}
        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center gap-3 text-sm">
            <button onClick={() => onLike(drink)} className="inline-flex items-center gap-1 hover:text-cyan-600">
              <ThumbsUp className="h-4 w-4" />
              <span>{drink.likes ?? 0}</span>
            </button>
            <button onClick={() => onDislike(drink)} className="inline-flex items-center gap-1 hover:text-rose-600">
              <ThumbsDown className="h-4 w-4" />
              <span>{drink.dislikes ?? 0}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
