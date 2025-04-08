import { component$ } from '@builder.io/qwik';
import { PageWrapper3 } from '../common/PageWrapper3';
import { StoryContent } from '../common/StoryContent';

/**
 * StoryHome section component.
 *
 * - Renders story-related content as a **section** on the home page.
 * - Uses `StoryContent`, wrapped inside `PageWrapper3`.
 * - Unlike `Story.tsx`, this component does **not** provide a standalone page.
 *
 * @returns {JSX.Element} The rendered story section for the home page.
 */
export default component$(() => {
  return <StoryContent PageWrapperComponent={PageWrapper3} storyId='bailey' />;
});
