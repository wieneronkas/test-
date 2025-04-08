import { component$ } from '@builder.io/qwik';
import { PageWrapper3 } from '../common/PageWrapper3';
import { RoadmapContent } from '../common/RoadmapContent';

/**
 * RoadmapHome section component.
 *
 * - Renders roadmap-related content as a **section** on the home page.
 * - Uses `RoadmapContent`, wrapped inside `PageWrapper3`.
 * - Unlike `Roadmap.tsx`, this component does **not** provide a standalone page.
 *
 * @returns {JSX.Element} The rendered roadmap section for the home page.
 */
export default component$(() => {
  return <RoadmapContent PageWrapperComponent={PageWrapper3} />;
});
