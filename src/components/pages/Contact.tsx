import { component$ } from '@builder.io/qwik';
import { PageWrapper2 } from '../common/PageWrapper2';
import { ContactContent } from '../common/ContactContent';

/**
 * Contact page component.
 *
 * - Provides a section for contact content.
 * - Uses `ContactContent`, wrapped inside `PageWrapper2` for consistent layout.
 * - Unlike `ContactHome.tsx`, this component is meant to be a section on the home page.
 *
 * @returns {JSX.Element} The rendered Contact page.
 */
export default component$(() => {
  return <ContactContent PageWrapperComponent={PageWrapper2} />;
});
