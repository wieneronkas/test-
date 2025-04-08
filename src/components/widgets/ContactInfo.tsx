import { component$ } from '@builder.io/qwik';
import { Headline2 } from '../ui/Headline2';
import { contactContent } from '~/data/contact';
import { DefinitionList } from '../ui/DefinitionList';
import { DefinitionListItem } from '../ui/DefinitionListItem';

/**
 * The left-side panel of the contact section displaying headline and contact links.
 *
 * This component renders a decorative background, a semantic headline using `Headline2`,
 * and a list of contact methods (email, Telegram, etc.) based on the `contactContent` data.
 *
 * Intended to be used alongside the `ContactForm` component inside the `ContactContent` layout.
 *
 * @example
 * <ContactInfo />
 */
export default component$(() => {
  const { headline, contacts } = contactContent;
  return (
    <div class='relative px-6 py-8 sm:pt-32 lg:static lg:px-8 lg:py-24'>
      <div class='mx-auto max-w-xl lg:mx-0 lg:max-w-lg'>
        <div class='absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 dark:bg-gray-900 dark:ring-white/5 lg:w-1/2'>
          <div
            class='absolute -left-56 top-[calc(100%-13rem)] transform-gpu blur-3xl lg:left-[max(-14rem,calc(100%-59rem))] lg:top-[calc(50%-7rem)]'
            aria-hidden='true'
          >
            <div
              class='aspect-[1155/678] w-[72.1875rem] bg-gradient-to-br from-primary-300 to-primary opacity-20 dark:opacity-30'
              style='clip-path: polygon(74.1% 56.1%, 100% 38.6%, 97.5% 73.3%, 85.5% 100%, 80.7% 98.2%, 72.5% 67.7%, 60.2% 37.8%, 52.4% 32.2%, 47.5% 41.9%, 45.2% 65.8%, 27.5% 23.5%, 0.1% 35.4%, 17.9% 0.1%, 27.6% 23.5%, 76.1% 2.6%, 74.1% 56.1%)'
            ></div>
          </div>
        </div>
        <Headline2
          title={headline.title}
          subtitle={headline.subtitle}
          highlight={headline.highlight}
        />
        <DefinitionList class='mt-8 space-y-4 text-base/7 text-gray-600 dark:text-gray-300'>
          {contacts.map((contact, key) => (
            <DefinitionListItem key={key} {...contact} />
          ))}
        </DefinitionList>
      </div>
    </div>
  );
});
