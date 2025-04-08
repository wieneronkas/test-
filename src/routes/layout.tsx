import { component$, Slot } from '@builder.io/qwik';

import Footer from '~/components/widgets/Footer';
import Header from '~/components/widgets/Header';

const gridItemsHTML = new Array(30)
  .fill(null)
  .map(
    () =>
      `<div class="bg-primary-600 animate-pulse" style="animation-delay: ${Math.random() * 5}s; 
    animation-duration: ${3 + Math.random() * 3}s"></div>`
  )
  .join('');

export default component$(() => {
  return (
    <>
      <div
        class='grid-background absolute inset-0 -z-10 grid grid-cols-6 gap-1 dark:bg-black'
        dangerouslySetInnerHTML={gridItemsHTML}
      ></div>
      <Header />
      <main>
        <Slot />
      </main>
      <Footer />
    </>
  );
});
