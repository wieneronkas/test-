import { component$, Slot, type QRL } from '@builder.io/qwik';

/**
 * Props for the `Button` component.
 * Extends native button behavior with support for Qwik's `$` event handling.
 */
interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  class: string;
  onClick$?: QRL<() => void>;
}

/**
 * A customizable button component that supports Qwik's reactive event system.
 * Accepts a `Slot` for button content and supports standard button attributes.
 *
 * Automatically defaults to `type="button"` to prevent unintended form submissions.
 */
export const Button = component$<ButtonProps>(
  ({ type = 'button', class: className = '', onClick$ }) => {
    return (
      <button type={type} class={className} onClick$={onClick$}>
        <Slot />
      </button>
    );
  }
);
