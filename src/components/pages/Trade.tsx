import { component$ } from '@builder.io/qwik';
import { PageWrapper } from '../common/PageWrapper';
import { TradeContent } from '../common/TradeContent';

/**
 * Trade page component.
 *
 * - Provides a **standalone** page for trade-related content.
 * - Uses `TradeContent`, wrapped inside `PageWrapper` for consistent layout.
 * - Unlike `TradeHome.tsx`, this component is meant to be a **dedicated page** rather than a section on the home page.
 *
 * @returns {JSX.Element} The rendered Trade page.
 */
export default component$(() => {
  return <TradeContent PageWrapperComponent={PageWrapper} />;
});
