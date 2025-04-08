import { component$ } from '@builder.io/qwik';
import { PageWrapper3 } from '../common/PageWrapper3';
import { TokenomicsContent } from '../common/TokenomicsContent';

/**
 * TokenomicsHome section component.
 *
 * - Renders tokenomics-related content as a **section** on the home page.
 * - Uses `TokenomicsContent`, wrapped inside `PageWrapper3`.
 * - Unlike `Tokenomics.tsx`, this component does **not** provide a standalone page.
 *
 * @returns {JSX.Element} The rendered trade section for the home page.
 */
export default component$(() => {
  return <TokenomicsContent PageWrapperComponent={PageWrapper3} />;
});
