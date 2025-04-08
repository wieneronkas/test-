import { component$ } from '@builder.io/qwik';

/**
 * A unified input or textarea form control component.
 *
 * Renders either a `<textarea>` or an `<input>` element based on the `type` prop.
 * Useful for abstracting away form input logic in dynamic form rendering.
 *
 * @example
 * <FormControl id="email" type="email" placeholder="you@example.com" required />
 *
 * <FormControl id="message" type="textarea" placeholder="Write a message..." rows={5} />
 */
interface FormControlProps {
  id: string;
  name?: string;
  placeholder?: string;
  required?: boolean;
  type?: string;
  rows?: number;
  class?: string;
}

export const FormControl = component$<FormControlProps>((props) => {
  const {
    id,
    name = id,
    placeholder,
    required = false,
    type = 'text',
    rows = 4,
    class: className,
  } = props;

  if (type === 'textarea') {
    return (
      <textarea
        id={id}
        name={name}
        placeholder={placeholder}
        required={required}
        rows={rows}
        class={className}
      />
    );
  }

  return (
    <input
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      required={required}
      class={className}
    />
  );
});
