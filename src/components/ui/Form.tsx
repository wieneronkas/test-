import { component$, Slot } from '@builder.io/qwik';

/**
 * A flexible and accessible HTML form wrapper component.
 *
 * Supports custom class names, form submission attributes, and ARIA labeling.
 *
 * @example
 * <Form action="/contact" method="POST" ariaLabel="Contact Form">
 *   <FormField id="email" label="Email">...</FormField>
 *   <Button type="submit">Send</Button>
 * </Form>
 */
interface FormProps {
  class?: string;
  action?: string;
  method?: 'GET' | 'POST';
  ariaLabel?: string;
}

export const Form = component$<FormProps>(
  ({ class: className, action = '/', method = 'POST', ariaLabel }) => {
    return (
      <form
        action={action}
        method={method}
        class={className}
        aria-label={ariaLabel}
      >
        <Slot />
      </form>
    );
  }
);
