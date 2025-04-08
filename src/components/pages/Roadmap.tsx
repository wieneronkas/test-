import { component$ } from '@builder.io/qwik';
import { PageWrapper } from '../common/PageWrapper';
import { RoadmapContent } from '../common/RoadmapContent';

/**
 * Roadmap page component.
 *
 * - Provides a **standalone** page for roadmap content.
 * - Uses `RoadmapContent`, wrapped inside `PageWrapper` for consistent layout.
 * - Unlike `RoadmapHome.tsx`, this component is meant to be a **dedicated page** rather than a section on the home page.
 *
 * @returns {JSX.Element} The rendered Roadmap page.
 */
export default component$(() => {
  return <RoadmapContent PageWrapperComponent={PageWrapper} />;
});
