import React from 'react';
import { Search } from 'lucide-react';

export default function SearchBar({ query, setQuery }) {
  return (
    <div className="w-full">
      <label htmlFor="search" className="sr-only">Search drinks</label>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400" />
        <input
          id="search"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search drinks..."
          className="w-full rounded-xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-neutral-900/70 backdrop-blur px-10 py-3 outline-none focus:ring-2 focus:ring-cyan-400"
        />
      </div>
    </div>
  );
}
