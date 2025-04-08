import { component$, Slot } from '@builder.io/qwik';

/**
 * A wrapper component for a semantic definition list (`<dl>`).
 *
 * Typically used to group key-value pairs using `<DefinitionTerm />` and `<DefinitionDescription />` components.
 * Accepts an optional `class` prop for styling and renders children via `<Slot />`.
 *
 * @example
 * <DefinitionList class="space-y-4">
 *   <DefinitionTerm>Email</DefinitionTerm>
 *   <DefinitionDescription>user@example.com</DefinitionDescription>
 * </DefinitionList>
 */
interface DefinitionListProps {
  class?: string;
}

export const DefinitionList = component$<DefinitionListProps>(
  ({ class: className }) => {
    return (
      <dl class={className}>
        <Slot />
      </dl>
    );
  }
);
