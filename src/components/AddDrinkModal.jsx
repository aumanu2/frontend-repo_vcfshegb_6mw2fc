import React, { useState, useEffect } from 'react';

export default function AddDrinkModal({ open, onClose, onSubmit }) {
  const [form, setForm] = useState({
    name: '',
    imageUrl: '',
    about: '',
    category: 'Soda',
    healthRating: 'Neutral',
  });

  useEffect(() => {
    if (open) {
      setForm({ name: '', imageUrl: '', about: '', category: 'Soda', healthRating: 'Neutral' });
    }
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-30 flex items-end sm:items-center justify-center p-4 bg-black/40">
      <div className="w-full sm:max-w-md rounded-2xl bg-white dark:bg-neutral-900 border border-black/10 dark:border-white/10 shadow-xl">
        <div className="p-4 border-b border-black/5 dark:border-white/10">
          <h2 className="text-lg font-semibold">Add New Drink</h2>
        </div>
        <form
          className="p-4 space-y-3"
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit({ ...form, likes: 0, dislikes: 0 });
            onClose();
          }}
        >
          <div>
            <label className="block text-sm mb-1">Name</label>
            <input
              className="w-full rounded-xl border border-black/10 dark:border-white/10 bg-white/80 dark:bg-neutral-900/80 px-3 py-2 outline-none focus:ring-2 focus:ring-cyan-400"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Image URL</label>
            <input
              className="w-full rounded-xl border border-black/10 dark:border-white/10 bg-white/80 dark:bg-neutral-900/80 px-3 py-2 outline-none focus:ring-2 focus:ring-cyan-400"
              value={form.imageUrl}
              onChange={(e) => setForm({ ...form, imageUrl: e.target.value })}
              placeholder="https://..."
            />
          </div>
          <div>
            <label className="block text-sm mb-1">About</label>
            <textarea
              className="w-full rounded-xl border border-black/10 dark:border-white/10 bg-white/80 dark:bg-neutral-900/80 px-3 py-2 outline-none focus:ring-2 focus:ring-cyan-400"
              rows={3}
              value={form.about}
              onChange={(e) => setForm({ ...form, about: e.target.value })}
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm mb-1">Category</label>
              <select
                className="w-full rounded-xl border border-black/10 dark:border-white/10 bg-white/80 dark:bg-neutral-900/80 px-3 py-2 outline-none focus:ring-2 focus:ring-cyan-400"
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
              >
                <option>Soda</option>
                <option>Tea</option>
                <option>Coffee</option>
                <option>Energy</option>
                <option>Juice</option>
                <option>Water</option>
              </select>
            </div>
            <div>
              <label className="block text-sm mb-1">Health Rating</label>
              <select
                className="w-full rounded-xl border border-black/10 dark:border-white/10 bg-white/80 dark:bg-neutral-900/80 px-3 py-2 outline-none focus:ring-2 focus:ring-cyan-400"
                value={form.healthRating}
                onChange={(e) => setForm({ ...form, healthRating: e.target.value })}
              >
                <option>Healthy</option>
                <option>Neutral</option>
                <option>Indulgent</option>
              </select>
            </div>
          </div>
          <div className="flex items-center justify-end gap-2 pt-2">
            <button type="button" onClick={onClose} className="px-4 py-2 rounded-lg border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5">
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 rounded-lg bg-cyan-600 text-white hover:bg-cyan-700">
              Add Drink
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
