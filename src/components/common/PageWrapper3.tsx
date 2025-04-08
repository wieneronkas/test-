// src/components/PageWrapper.tsx
import { component$, Slot } from '@builder.io/qwik';

export const PageWrapper3 = component$(() => {
  return (
    <div class='border-radius-dot-25 relative mx-1.5 mb-1.5 mt-1 flex items-center justify-center overflow-hidden rounded-lg bg-white/80 dark:bg-gray-900/80'>
      <div class='relative mx-auto w-full max-w-7xl p-1.5 lg:px-8'>
        <div class='border-radius-dot-25 w-full rounded-lg bg-gray-200/85 p-3 pt-4 dark:bg-gray-800/85'>
          <Slot />
        </div>
      </div>
    </div>
  );
});
