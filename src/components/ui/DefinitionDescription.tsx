import { component$, Slot } from '@builder.io/qwik';

/**
 * A wrapper component for a definition description (`<dd>`) element.
 *
 * Used in combination with `<DefinitionTerm />` inside a `<DefinitionList />` to create semantic key-value pairs.
 * Accepts an optional `class` prop for styling and renders child content via `<Slot />`.
 *
 * @example
 * <DefinitionDescription class="text-gray-600">
 *   user@example.com
 * </DefinitionDescription>
 */
interface DefinitionDescriptionProps {
  class?: string;
}

export const DefinitionDescription = component$<DefinitionDescriptionProps>(
  ({ class: className }) => {
    return (
      <dd class={className}>
        <Slot />
      </dd>
    );
  }
);
