import { component$ } from '@builder.io/qwik';
import { contactContent } from '../../data/contact';
import { Form } from '../ui/Form';
import { Button } from '../ui/Button';
import { FormField } from '../ui/FormField';
import { FormControl } from '../ui/FormControl';
import { getColSpanClass } from '~/utils/ui';

/**
 * The dynamic contact form component rendered inside the Contact section.
 *
 * Pulls its field configuration and button label from `contactContent.formConfig`.
 * Renders fields dynamically using `<FormField />` and `<FormControl />` based on JSON config,
 * with layout adjustments handled by `getColSpanClass`.
 *
 * The form is accessible, responsive, and styled with Tailwind. Intended to be used alongside
 * the `ContactInfo` component inside `ContactContent`.
 *
 * @example
 * <ContactForm />
 */
export default component$(() => {
  const { formConfig } = contactContent;

  return (
    <Form
      action='/'
      method='POST'
      class='px-4 pb-6 pt-8 sm:pb-32 lg:px-8 lg:py-24'
      aria-label='Contact form'
    >
      <div class='mx-auto max-w-xl lg:mr-0 lg:max-w-lg'>
        <div class='grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2'>
          {formConfig.fields.map((field) => {
            return (
              <FormField
                key={field.id}
                id={field.id}
                label={field.label}
                classDiv={getColSpanClass(field.colSpan)}
                classLabel='block text-sm/6 font-semibold text-gray-900 dark:text-white'
              >
                <div class='mt-1.5'>
                  <FormControl
                    id={field.id}
                    name={field.id}
                    rows={field.rows}
                    placeholder={field.placeholder}
                    required={field.required}
                    type={field.type}
                    class='text-md block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500'
                  />
                </div>
              </FormField>
            );
          })}
        </div>
        <div class='mt-3.5 flex'>
          <Button
            type='submit'
            class='w-full rounded-md bg-primary-700 px-5 py-3 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 sm:w-fit'
          >
            {formConfig.button.label}
          </Button>
        </div>
      </div>
    </Form>
  );
});
