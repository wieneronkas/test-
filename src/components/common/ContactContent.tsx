import { component$ } from '@builder.io/qwik';
import ContactInfo from '../widgets/ContactInfo';
import ContactForm from '../widgets/ContactForm';

/**
 * The main contact section of the page.
 *
 * Combines a visual contact information panel (`ContactInfo`) with a dynamic contact form (`ContactForm`)
 * into a responsive two-column layout. On large screens, both sections sit side by side;
 * on smaller screens, they stack vertically.
 *
 * This component is designed to be wrapped with a layout component via the `PageWrapperComponent` prop,
 * allowing for flexible page section reuse and consistent spacing or background styling.
 *
 * @example
 * <ContactContent PageWrapperComponent={SectionWrapper} />
 */
export const ContactContent = component$(
  ({ PageWrapperComponent }: { PageWrapperComponent: any }) => {
    return (
      <PageWrapperComponent>
        <div class='relative isolate rounded-lg bg-gray-200 dark:bg-gray-800'>
          <div class='mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2'>
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </PageWrapperComponent>
    );
  }
);
