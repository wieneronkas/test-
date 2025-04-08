import { component$ } from '@builder.io/qwik';
import { Anchor } from './Anchor';
import { DefinitionDescription } from './DefinitionDescription';
import { DefinitionTerm } from './DefinitionTerm';
import { iconMap } from '../icons/iconMap';
import type { ContactItem } from '~/data/contact/types';

/**
 * A single key-value pair component for use within a semantic definition list (`<dl>`).
 *
 * Renders a platform label with an associated icon (from `iconMap`) and a hyperlink.
 * Designed specifically for contact data, based on the `ContactItem` type.
 *
 * @example
 * <DefinitionListItem
 *   platform="Email"
 *   icon="email"
 *   href="mailto:user@example.com"
 * />
 */
export const DefinitionListItem = component$<ContactItem>(
  ({ platform, icon, href }) => {
    const Icon = icon ? iconMap[icon] : undefined;
    return (
      <div class='flex gap-x-4'>
        <DefinitionTerm class='flex-none'>
          <span class='sr-only'>{platform}</span>
          {Icon && <Icon />}
        </DefinitionTerm>
        <DefinitionDescription>
          <Anchor class='hover:text-gray-900 dark:hover:text-white' href={href}>
            {href.startsWith('mailto:') ? href.replace('mailto:', '') : href}
          </Anchor>
        </DefinitionDescription>
      </div>
    );
  }
);
