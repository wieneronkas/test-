import { component$, Slot } from '@builder.io/qwik';

/**
 * Props for the `ListItem` component.
 * Accepts an optional CSS class for styling.
 */
interface ListItemProps {
  class?: string;
}

/**
 * A wrapper component for a list item (`<li>`).
 * Typically used inside a `List` or navigation structure and renders child content via `<Slot />`.
 */
export const ListItem = component$<ListItemProps>(({ class: className }) => {
  return (
    <li class={className}>
      <Slot />
    </li>
  );
});
