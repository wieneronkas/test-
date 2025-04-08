import { component$ } from '@builder.io/qwik';
import { PageWrapper } from '../common/PageWrapper';
import { TokenomicsContent } from '../common/TokenomicsContent';

/**
 * Tokenomics page component.
 *
 * - Provides a **standalone** page for Tokenomics-related content.
 * - Uses `TokenomicsContent`, wrapped inside `PageWrapper` for consistent layout.
 * - Unlike `TokenomicsHome.tsx`, this component is meant to be a **dedicated page** rather than a section on the home page.
 *
 * @returns {JSX.Element} The rendered Tokenomics page.
 */
export default component$(() => {
  return <TokenomicsContent PageWrapperComponent={PageWrapper} />;
});
