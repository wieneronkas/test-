import { component$ } from '@builder.io/qwik';
import { Image } from '@unpic/qwik';
import { siteContent } from '~/data/site';
import { iconMap } from '../icons/iconMap';
import { HeroButton } from './HeroButton';
import { Anchor } from '../ui/Anchor';

export default component$(() => {
  const { brand, hero } = siteContent;
  const IconChevronRight = iconMap['chevronRight'];

  return (
    <div class='border-radius-dot-25 relative mx-1.5 mb-2 mt-1 flex items-center justify-center overflow-hidden rounded-lg bg-white/80 dark:bg-gray-900/80'>
      <section class='not-prose border-radius-dot-25 relative m-1.5 rounded-lg bg-white/70 dark:bg-gray-900/75 md:mt-[-76px]'>
        <div class='relative mx-auto max-w-7xl px-4 sm:px-10'>
          <div class='pointer-events-none pt-0 md:pt-[60px]'></div>
          <div class='pt-6 md:py-20 lg:flex lg:h-screen lg:items-center lg:gap-8 lg:py-0'>
            <div class='mx-auto basis-1/2 pb-8 text-center md:pb-16 lg:text-left'>
              <Anchor
                href={brand.tokenUrl}
                class='mb-4 inline-flex items-center justify-between rounded-full bg-gray-100 p-1 pr-4 text-sm text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700'
                role='alert'
              >
                <span class='mr-3 rounded-full bg-primary-400 px-4 py-1.5 text-xs text-white'>
                  {hero.alert.label}
                </span>{' '}
                <span class='text-sm font-medium'>{hero.alert.text}</span>
                <IconChevronRight class='ml-2 size-5' />
              </Anchor>
              <h1 class='leading-tighter font-heading mb-4 text-5xl font-bold tracking-tighter text-primary dark:text-gray-200 md:text-7xl'>
                <span class='text-primary'>
                  {hero.title.pre}{' '}
                  <span class='text-primary-300'>{hero.title.highlight}</span>{' '}
                  {hero.title.post}
                </span>
              </h1>
              <div class='mx-auto max-w-3xl lg:max-w-none'>
                <p class='mb-6 text-xl dark:text-slate-300'>
                  {brand.description}{' '}
                </p>

                {/* CTA button section */}
                <div class='border-radius-dot-25 m-auto grid grid-cols-2 gap-3 sm:max-w-md sm:grid-cols-2 lg:max-w-7xl lg:grid-cols-2'>
                  {hero.buttons?.map((btn) => (
                    <HeroButton
                      key={btn.label}
                      href={btn.url}
                      label={btn.label}
                      style={btn.style}
                      download={btn.fileName}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div class='basis-1/2 pb-10'>
              <Image
                src={hero.image.src}
                layout={hero.image.layout}
                width={hero.image.width}
                height={hero.image.height}
                alt={hero.image.alt}
                class='object-fit mx-auto w-full rounded-md drop-shadow-2xl lg:mr-0'
                priority={hero.image.priority}
                breakpoints={hero.image.breakpoints}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
});
