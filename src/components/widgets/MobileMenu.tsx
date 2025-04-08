import { component$ } from '@builder.io/qwik';
import ToggleTheme from '../common/ToggleTheme';
import HeaderSocialLinks from './HeaderSocialLinks';
import ToggleMenu from '../common/ToggleMenu';

/**
 * Mobile-only menu section displayed in the site header.
 *
 * Includes:
 * - Theme toggle (`ToggleTheme`)
 * - Social media links (`HeaderSocialLinks`)
 * - Mobile navigation toggle (`ToggleMenu`)
 *
 * Visible only on small screens (`md:hidden`).
 */
export const MobileMenu = component$(() => {
  return (
    <div class='flex items-center md:hidden'>
      <ToggleTheme />
      <HeaderSocialLinks />
      <ToggleMenu />
    </div>
  );
});
