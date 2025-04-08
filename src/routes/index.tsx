import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import Hero from '~/components/widgets/Hero';
import { SITE } from '~/config.mjs';
import RoadmapHome from '~/components/pages/RoadmapHome';
import StoryHome from '~/components/pages/StoryHome';
import Contact from '~/components/pages/Contact';
import TokenomicsHome from '~/components/pages/TokenomicsHome';
import TradeHome from '~/components/pages/TradeHome';

export default component$(() => {
  return (
    <>
      <Hero />
      <StoryHome />
      <TradeHome />
      <RoadmapHome />

      <TokenomicsHome />

      <Contact />
      <div class='h-2'></div>
    </>
  );
});

export const head: DocumentHead = {
  title: SITE.title,
  meta: [
    {
      name: 'description',
      content: SITE.description,
    },
  ],
};
