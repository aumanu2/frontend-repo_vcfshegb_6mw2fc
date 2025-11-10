import React, { useMemo, useState } from 'react';
import Header from './components/Header';
import HeroSpline from './components/HeroSpline';
import SearchBar from './components/SearchBar';
import DrinkCard from './components/DrinkCard';
import AddDrinkModal from './components/AddDrinkModal';

function App() {
  const [query, setQuery] = useState('');
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [drinks, setDrinks] = useState([
    {
      id: '1',
      name: 'Sparkle Citrus Soda',
      imageUrl: 'https://images.unsplash.com/photo-1613478223719-914ab47f7438?q=80&w=1200&auto=format&fit=crop',
      about: 'Zesty lemon-lime fizz, subtly sweet and ultra refreshing.',
      category: 'Soda',
      healthRating: 'Indulgent',
      likes: 12,
      dislikes: 2,
    },
    {
      id: '2',
      name: 'Matcha Green Tea',
      imageUrl: 'https://images.unsplash.com/photo-1497534446932-c925b458314e?q=80&w=1200&auto=format&fit=crop',
      about: 'Earthy and smooth with a gentle caffeine lift.',
      category: 'Tea',
      healthRating: 'Healthy',
      likes: 22,
      dislikes: 1,
    },
    {
      id: '3',
      name: 'Cold Brew Black',
      imageUrl: 'https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=1200&auto=format&fit=crop',
      about: 'Bold, chocolatey notes with zero sugar.',
      category: 'Coffee',
      healthRating: 'Neutral',
      likes: 18,
      dislikes: 3,
    },
  ]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return drinks;
    return drinks.filter((d) =>
      [d.name, d.about, d.category, d.healthRating]
        .filter(Boolean)
        .some((v) => String(v).toLowerCase().includes(q))
    );
  }, [query, drinks]);

  const handleAdd = (newDrink) => {
    const withId = { id: String(Date.now()), ...newDrink };
    setDrinks((prev) => [withId, ...prev]);
  };

  const handleLike = (drink) => {
    setDrinks((prev) => prev.map((d) => (d.id === drink.id ? { ...d, likes: (d.likes ?? 0) + 1 } : d)));
  };

  const handleDislike = (drink) => {
    setDrinks((prev) => prev.map((d) => (d.id === drink.id ? { ...d, dislikes: (d.dislikes ?? 0) + 1 } : d)));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-cyan-50 dark:from-neutral-950 dark:to-neutral-900 text-neutral-900 dark:text-neutral-50">
      <Header onOpenAdd={() => setIsAddOpen(true)} />
      <HeroSpline />

      <main className="max-w-6xl mx-auto px-4 pb-16">
        <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <SearchBar query={query} setQuery={setQuery} />
          <div className="text-sm text-neutral-600 dark:text-neutral-300">
            {filtered.length} result{filtered.length !== 1 ? 's' : ''}
          </div>
        </div>

        <section className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((drink) => (
            <DrinkCard key={drink.id} drink={drink} onLike={handleLike} onDislike={handleDislike} />
          ))}
        </section>
      </main>

      <AddDrinkModal
        open={isAddOpen}
        onClose={() => setIsAddOpen(false)}
        onSubmit={handleAdd}
      />
    </div>
  );
}

export default App;
