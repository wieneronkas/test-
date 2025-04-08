import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <div
      id='tokenomics'
      class='mx-auto max-w-7xl px-4 pb-6 pt-3 sm:px-6 md:px-24 md:py-16 lg:px-8 lg:py-4 lg:pb-20'
    >
      <div class='row-gap-8 grid grid-cols-2 md:grid-cols-4'>
        <div class='mb-10 text-center md:mb-0 md:border-r dark:md:border-slate-500'>
          <div class='font-heading text-4xl font-bold text-primary-600 lg:text-5xl xl:text-6xl'>
            100%
          </div>
          <p class='text-sm font-medium uppercase tracking-widest text-gray-800 dark:text-slate-400 lg:text-base'>
            Fair Launch
          </p>
        </div>
        <div class='mb-10 text-center md:mb-0 md:border-r dark:md:border-slate-500'>
          <div class='font-heading text-4xl font-bold text-primary-600 lg:text-5xl xl:text-6xl'>
            1 Billion
          </div>
          <p class='text-sm font-medium uppercase tracking-widest text-gray-800 dark:text-slate-400 lg:text-base'>
            Total Supply
          </p>
        </div>

        <div class='font-heading text-center md:border-r dark:md:border-slate-500'>
          <div class='text-4xl font-bold text-primary-600 lg:text-5xl xl:text-6xl'>
            0.1%
          </div>
          <p class='text-sm font-medium uppercase tracking-widest text-gray-800 dark:text-slate-400 lg:text-base'>
            Team Allocation
          </p>
        </div>
        <div class='text-center'>
          <div class='font-heading text-4xl font-bold text-primary-600 lg:text-5xl xl:text-6xl'>
            100+
          </div>
          <p class='text-sm font-medium uppercase tracking-widest text-gray-800 dark:text-slate-400 lg:text-base'>
            Community Members
          </p>
        </div>
      </div>
    </div>
  );
});
