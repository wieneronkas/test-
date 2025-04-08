import { component$ } from '@builder.io/qwik';
import IconStar from '~/components/icons/IconStar';

export default component$(() => {
  const stepsData = {
    title: 'Our Process: From Idea to Finished Print',
    items: [
      {
        title: 'Step 1: Request a Quote',
        description:
          "Start by requesting a personalized quote for your printing needs. Share your project details, and we'll provide you with a clear and competitive estimate.",
        icon: IconStar,
      },
      {
        title: 'Step 2: Custom Design Assistance',
        description:
          'Our expert design team can help you refine your artwork or create a custom design that meets your vision. We ensure your project is print-ready and perfect for production.',
        icon: IconStar,
      },
      {
        title: 'Step 3: High-Quality Printing',
        description:
          'Once approved, we bring your project to life using state-of-the-art printing technology. We guarantee vibrant colors, sharp details, and exceptional quality in every print.',
        icon: IconStar,
      },
      {
        title: 'Step 4: Quality Check & Delivery',
        description:
          'Before your order leaves our shop, we conduct a thorough quality check to ensure perfection. Then, we pack and deliver your prints right to your doorstep, on time and in perfect condition.',
        icon: IconStar,
      },
    ],
    image: {
      src: '/assets/images/print-steps.webp',
      alt: 'Steps to professional printing success',
    },
  };

  const { title, items } = stepsData;

  return (
    <section class='mx-auto max-w-6xl bg-gray-100 px-4 py-16 dark:bg-gray-800 sm:px-6 lg:px-8 lg:py-20'>
      <div class='row-gap-10 grid gap-6 md:grid-cols-2'>
        <div class='mb-4 md:mb-0 md:py-4 md:pr-16'>
          {title && (
            <h2 class='font-heading mb-8 text-3xl font-bold lg:text-4xl'>
              {title}
            </h2>
          )}
          {Array.isArray(items) &&
            items.length &&
            items.map(({ title, description, icon: Icon }, index) => (
              <div key={`item-steps-${index}`} class='flex'>
                <div class='mr-4 flex flex-col items-center'>
                  <div>
                    {index !== items.length - 1 ? (
                      <div class='flex size-10 items-center justify-center rounded-full border-2 border-primary-900'>
                        {typeof Icon !== 'undefined' ? (
                          <Icon class='size-6 text-primary-800 dark:text-slate-200' />
                        ) : (
                          <IconStar class='size-6 text-primary-800 dark:text-slate-200' />
                        )}
                      </div>
                    ) : (
                      <div class='flex size-10 items-center justify-center rounded-full border-2 border-primary-900 bg-primary-900'>
                        {typeof Icon !== 'undefined' ? (
                          <Icon class='size-6 text-white dark:text-slate-200' />
                        ) : (
                          <IconStar class='size-6 text-white dark:text-slate-200' />
                        )}
                      </div>
                    )}
                  </div>
                  {index !== items.length - 1 && (
                    <div class='h-full w-px bg-gray-300 dark:bg-slate-500'></div>
                  )}
                </div>
                <div class={`pt-1 ${index !== items.length - 1 ? 'pb-8' : ''}`}>
                  {title && (
                    <p class='mb-2 text-xl font-bold text-gray-900 dark:text-slate-300'>
                      {title}
                    </p>
                  )}
                  {description && (
                    <p class='text-gray-600 dark:text-slate-400'>
                      {description}
                    </p>
                  )}
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
});
