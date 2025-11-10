import React from 'react';
import Spline from '@splinetool/react-spline';

export default function HeroSpline() {
  return (
    <section className="relative h-[420px] w-full overflow-hidden">
      <Spline scene="https://prod.spline.design/MscgRj2doJR2RRa2/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent dark:from-neutral-950 dark:via-neutral-950/20" />
      <div className="absolute inset-x-0 bottom-8 flex flex-col items-center px-4 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-blue-600">
          Rate Your Favorite Canned Drinks
        </h1>
        <p className="mt-2 text-sm sm:text-base text-neutral-600 dark:text-neutral-300 max-w-2xl">
          Browse, add, and upvote the best beverages. Real-time and responsive across devices.
        </p>
      </div>
    </section>
  );
}
