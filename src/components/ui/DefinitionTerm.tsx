import { component$, Slot } from '@builder.io/qwik';

/**
 * A wrapper component for a definition term (`<dt>`) element.
 *
 * Useful when building semantic definition lists (`<dl>`), such as for contact info or descriptions.
 * Accepts optional styling via `class` and renders child content using a `<Slot />`.
 *
 * @example
 * <DefinitionTerm class="font-bold text-gray-900">
 *   Email
 * </DefinitionTerm>
 */
interface DefinitionTermProps {
  class?: string;
}

export const DefinitionTerm = component$<DefinitionTermProps>(
  ({ class: className }) => {
    return (
      <dt class={className}>
        <Slot />
      </dt>
    );
  }
);
