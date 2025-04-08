import { component$ } from '@builder.io/qwik';
import { Anchor } from '../ui/Anchor';
import { siteContent } from '~/data/site';

/**
 * Call-to-action button component for the project's token.
 *
 * Pulls the token URL and CTA text from `siteContent.brand`.
 * Renders a styled `Anchor` button linking to the token page or external platform.
 */
export const TokenCTA = component$(() => {
  const { brand } = siteContent;
  return (
    <Anchor
      href={brand.tokenUrl}
      class='btn btn-primary px-5.5 py-2.5 text-sm font-semibold shadow-none'
    >
      {brand.tokenCTA}
    </Anchor>
  );
});
