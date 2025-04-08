import { component$ } from '@builder.io/qwik';
import { PageWrapper } from '../common/PageWrapper';
import { StoryContent } from '../common/StoryContent';

/**
 * Story page component.
 *
 * - Provides a **standalone** page for story content.
 * - Uses `StoryContent`, wrapped inside `PageWrapper` for consistent layout.
 * - Unlike `StoryHome.tsx`, this component is meant to be a **dedicated page** rather than a section on the home page.
 *
 * @returns {JSX.Element} The rendered Story page.
 */
export default component$(() => {
  return <StoryContent PageWrapperComponent={PageWrapper} />;
});
