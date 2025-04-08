import { component$ } from '@builder.io/qwik';
import { PageWrapper3 } from '../common/PageWrapper3';
import { TradeContent } from '../common/TradeContent';

/**
 * TradeHome section component.
 *
 * - Renders trade-related content as a **section** on the home page.
 * - Uses `TradeContent`, wrapped inside `PageWrapper3`.
 * - Unlike `Trade.tsx`, this component does **not** provide a standalone page.
 *
 * @returns {JSX.Element} The rendered trade section for the home page.
 */
export default component$(() => {
  return <TradeContent PageWrapperComponent={PageWrapper3} />;
});
