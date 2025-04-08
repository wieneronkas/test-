import { component$, Slot } from '@builder.io/qwik';

/**
 * Props for the `List` component.
 * Accepts an optional CSS class for styling.
 */
interface ListProps {
  class?: string;
}

/**
 * A wrapper component for an unordered list (`<ul>`).
 * Designed to contain navigation or layout items via `<Slot />`.
 */
export const List = component$<ListProps>(({ class: className }) => {
  return (
    <ul class={className}>
      <Slot />
    </ul>
  );
});
