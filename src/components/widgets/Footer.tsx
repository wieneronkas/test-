import { component$ } from '@builder.io/qwik';
import { siteContent } from '~/data/site';
import { Anchor } from '../ui/Anchor';

export default component$(() => {
  const { footer } = siteContent;

  return (
    <footer class='bg-gradient-to-r from-primary-600 via-primary to-primary-600 p-2'>
      <div class='max-w-8xl mx-auto rounded-lg bg-white/90 px-4 shadow-lg dark:bg-gray-900/90 sm:px-6'>
        <div class='grid grid-cols-12 gap-4 pb-2 pt-6 sm:gap-8 md:pt-8'>
          <div class='col-span-12 pr-8 lg:col-span-4'>
            <div class='mb-3 flex items-center'>
              <Anchor
                class='inline-block text-xl font-bold text-primary-600 hover:text-primary'
                href={'/'}
              >
                {footer.title}
              </Anchor>
            </div>

            <div class='mb-2 text-sm text-gray-600 dark:text-gray-400'>
              {footer.description}
            </div>
          </div>

          {footer.links.map(({ title, items }, index) => (
            <div key={index} class='col-span-6 md:col-span-3 lg:col-span-2'>
              <div class='mb-3 font-medium text-gray-800 dark:text-gray-300'>
                {title}
              </div>
              {Array.isArray(items) && items.length > 0 && (
                <ul class='text-sm'>
                  {items.map(({ title, href }, index2) => (
                    <li key={index2} class='mb-1'>
                      <Anchor
                        class='text-gray-600 transition duration-150 ease-in-out hover:text-primary hover:underline dark:text-gray-400'
                        href={href}
                      >
                        {title}
                      </Anchor>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div class='pb-3 md:flex md:items-center md:justify-between md:pb-2 md:pt-8'>
          <div class='flex items-center justify-between pb-2 pt-3 text-sm text-gray-700 dark:text-slate-400 md:justify-start'>
            <span class=''>{footer.copyright}&nbsp;</span>
            <span class='hidden sm:block'>&nbsp;· &nbsp;</span>

            <span class='hidden text-gray-900 dark:text-gray-200 sm:block'>
              {' '}
              {footer.donation.text}{' '}
              <span class='mx-1 text-primary'>{footer.donation.icon}</span>{' '}
              {footer.donation.address}
            </span>
            <Anchor
              class='btn block bg-primary-300 px-2 py-1 text-xs dark:bg-primary-700 sm:hidden'
              href={footer.donation.link}
            >
              {' '}
              <span class='block text-gray-900 dark:text-gray-200 sm:hidden'>
                {footer.donation.text}
                <span class='mx-1 text-primary'>{footer.donation.icon}</span>
              </span>
            </Anchor>
          </div>
        </div>
      </div>
    </footer>
  );
});
