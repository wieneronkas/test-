import { $, component$, useStore } from '@builder.io/qwik';
import { NavMenu } from './NavMenu';
import Logo from './Logo';
import { Anchor } from '../ui/Anchor';
import { MobileMenu } from './MobileMenu';
import { DesktopMenu } from './DesktopMenu';
import { useScrollListener } from '~/hooks/useScrollListener';

/**
 * Header component for the site layout.
 *
 * This component includes:
 * - Logo linked to homepage
 * - Mobile and desktop navigation menus
 * - Scroll-aware sticky header background using `useScrollListener`
 *
 * The header becomes opaque and applies backdrop blur when the user scrolls
 * past a threshold (10px) for visual distinction from the page content.
 *
 * @returns The site header component.
 */
export default component$(() => {
  const store = useStore({
    isScrolling: false,
  });

  // Track scroll position and update background style
  useScrollListener(
    $((scrollY: number) => {
      store.isScrolling = scrollY >= 10;
    })
  );

  return (
    <header
      id='header'
      class={`sticky top-0 z-40 mx-auto w-full flex-none border-b border-gray-50/0 transition-opacity ease-in-out ${
        store.isScrolling
          ? 'bg-white dark:bg-slate-900 md:bg-white/90 md:backdrop-blur-sm dark:md:bg-slate-900/90'
          : ''
      }`}
    >
      {/* Optional background overlay */}
      <div class='absolute inset-0 bg-white/90 dark:bg-gray-900/90'></div>

      <div class='text-default relative mx-auto w-full max-w-7xl p-2.5 md:flex md:justify-between md:px-6'>
        <div class='mr-auto flex justify-between rtl:ml-auto rtl:mr-0'>
          <Anchor class='flex items-center' href='/' aria-label='Homepage'>
            <Logo />
          </Anchor>
          <MobileMenu />
        </div>
        <NavMenu />
        {/* Social Links + Theme Toggle + Mint Link on Desktop */}
        <DesktopMenu />
      </div>
    </header>
  );
});
