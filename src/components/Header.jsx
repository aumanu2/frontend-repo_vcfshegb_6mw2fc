import React from 'react';
import { CupSoda, Settings } from 'lucide-react';

export default function Header({ onOpenAdd }) {
  return (
    <header className="sticky top-0 z-20 backdrop-blur bg-white/60 dark:bg-neutral-950/60 border-b border-black/5 dark:border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <CupSoda className="h-6 w-6 text-cyan-600" />
          <span className="font-semibold tracking-tight">Canned Drink Rater</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={onOpenAdd}
            className="inline-flex items-center gap-2 rounded-lg bg-cyan-600 text-white px-4 py-2 text-sm hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          >
            <span className="font-medium">Add Drink</span>
          </button>
          <button
            className="inline-flex items-center justify-center rounded-lg border border-black/10 dark:border-white/10 px-3 py-2 hover:bg-black/5 dark:hover:bg-white/5"
            aria-label="Settings"
          >
            <Settings className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
