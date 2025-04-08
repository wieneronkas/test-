import { component$ } from '@builder.io/qwik';
import { Headline2 } from '../ui/Headline2';
import { roadmapData } from '../../data/roadmap';
import { Image } from '@unpic/qwik';
import { getImageSrc } from '../../utils/ui';
import { iconMap } from '../icons/iconMap';

/**
 * RoadmapContent Component
 *
 * This component renders the roadmap section of the site, displaying a headline,
 * a list of roadmap steps, and an accompanying image. It dynamically pulls structured
 * data (titles, descriptions, icons) from `roadmapData` and resolves icon components
 * using a map for CMS-ready flexibility.
 *
 * Features:
 * - Supports dynamic icons from CMS-provided string keys
 * - Calculates layout logic for "last step" indicators
 * - Uses semantic HTML with `role="list"` and `role="listitem"` for accessibility
 * - Supports dynamic wrapper components (e.g. full page or section layout)
 *
 * @component
 * @param {Object} props
 * @param {any} props.PageWrapperComponent - A layout wrapper component used to define whether this is a standalone page or an embedded section.
 * @returns {JSX.Element} A responsive, accessible roadmap layout.
 *
 * @example
 * <RoadmapContent PageWrapperComponent={PageWrapper} />
 */
export const RoadmapContent = component$(
  ({ PageWrapperComponent }: { PageWrapperComponent: any }) => {
    const { highlight, title, items, image } = roadmapData;
    const stepItems = items.map((item, index) => ({
      ...item,
      isLast: index === items.length - 1,
      iconComponent: iconMap[item.icon] ?? iconMap['star'],
    }));

    return (
      <PageWrapperComponent>
        <div class='flex flex-col items-center gap-6 p-4 md:flex-row md:items-start md:justify-between md:gap-8 md:p-8'>
          {/* Text Container */}
          <div class='order-1 flex w-full flex-col justify-center md:order-1 md:w-1/2'>
            <Headline2 title={title} highlight={highlight} />

            <div role='list' class='mb-4 mt-2 md:mb-0 md:py-4 md:pr-16'>
              {stepItems.map(
                (
                  { title, description, iconComponent: Icon, isLast },
                  index
                ) => (
                  <div role='listitem' key={`step-${index}`} class='flex'>
                    <div class='mr-4 flex flex-col items-center'>
                      <div
                        class={`flex size-10 items-center justify-center rounded-full border-2 border-primary-900 ${
                          isLast ? 'bg-primary-900' : ''
                        }`}
                      >
                        <Icon
                          class={`size-6 ${isLast ? 'text-white' : 'text-primary-800'} dark:text-slate-200`}
                        />
                      </div>
                      {/* Connecting line */}
                      {!isLast && (
                        <div class='h-full w-px bg-gray-300 dark:bg-slate-500'></div>
                      )}
                    </div>

                    {/* Text */}
                    <div class={`pt-1 ${!isLast ? 'pb-8' : ''}`}>
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
                )
              )}
            </div>
          </div>

          {/* Image Container */}
          <div class='order-2 w-full md:order-2 md:w-1/2'>
            <Image
              src={getImageSrc(image)}
              alt={image.alt}
              width={image.width}
              layout='constrained'
              class='h-auto w-full rounded-lg shadow-md'
            />
          </div>
        </div>
      </PageWrapperComponent>
    );
  }
);
