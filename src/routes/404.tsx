import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <section class='h-[calc(100vh - 72px)] flex items-center p-16'>
      <div class='container mx-auto my-8 flex flex-col items-center justify-center px-5'>
        <div class='max-w-md text-center'>
          <h2 class='mb-8 text-9xl font-bold text-primary'>
            <span class='sr-only'>Errors</span>
            <span>404</span>
          </h2>
          <p class='text-3xl font-medium md:text-3xl'>
            Sorry, we couldn't find this page.
          </p>
          <p class='text-muted mb-8 mt-4 text-lg'>
            But dont worry, you can find plenty of other things on our homepage.
          </p>
          <a rel='noopener noreferrer' href='/' class='btn'>
            Back to home!
          </a>
        </div>
      </div>
    </section>
  );
});

export const head: DocumentHead = {
  title: 'Error 404',
};
