import { component$, Slot } from '@builder.io/qwik';

/**
 * A wrapper component for a form field's label and input.
 *
 * Renders a `<label>` element tied to the provided `id`, followed by a `<Slot />`
 * for injecting any form control (e.g., input, textarea, etc.).
 * Useful for structuring accessible and styled form fields.
 *
 * @example
 * <FormField id="email" label="Email">
 *   <input id="email" type="email" placeholder="you@example.com" />
 * </FormField>
 */
interface FormFieldProps {
  id: string;
  label: string;
  classDiv?: string;
  classLabel?: string;
}

export const FormField = component$<FormFieldProps>(
  ({ id, label, classDiv, classLabel }) => {
    return (
      <div class={classDiv}>
        <label for={id} class={classLabel}>
          {label}
        </label>
        <Slot />
      </div>
    );
  }
);
