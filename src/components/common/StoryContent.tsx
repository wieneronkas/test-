import { component$ } from '@builder.io/qwik';
import { Headline2 } from '../ui/Headline2';
import { Headline } from '../ui/Headline';
import { Image } from '@unpic/qwik';
import { getImageSrc } from '~/utils/ui';
import { storyData } from '~/data/story';
import type { StoryEntry } from '~/data/story/types';

/**
 * StoryContent component.
 *
 * Displays one or more story entries, each with a headline, subtitle, and image.
 * Optionally filters to display a single story based on the provided `storyId`.
 *
 * @component
 * @param {{ PageWrapperComponent: any; storyId?: string }} props
 * - `PageWrapperComponent`: Layout wrapper component for consistent page structure.
 * - `storyId` (optional): If provided, filters and displays only the matching story.
 *
 * @returns {JSX.Element} Rendered story section.
 */
export const StoryContent = component$(
  ({
    PageWrapperComponent,
    storyId,
  }: {
    PageWrapperComponent: any;
    storyId?: string;
  }) => {
    let stories: StoryEntry[] = storyData.stories;
    if (storyId) {
      // Filter for a single story if `storyId` is provided
      stories = stories.filter((story) => story.id === storyId);
    }

    return (
      <PageWrapperComponent>
        {stories.map((story) => {
          const { title, subtitle, highlight, image } = story;

          return (
            <div
              key={story.id}
              class='flex flex-col items-center gap-6 p-4 md:flex-row md:items-start md:justify-between md:gap-8 md:p-8'
            >
              {/* Text Container */}
              <div class='order-1 flex w-full flex-col justify-center md:order-2 md:w-1/2'>
                <div class='hidden sm:block'>
                  <Headline2
                    title={title}
                    subtitle={subtitle}
                    highlight={highlight}
                  />
                </div>
                <div class='block sm:hidden'>
                  <Headline
                    title={title}
                    subtitle={subtitle}
                    highlight={highlight}
                  />
                </div>
              </div>

              {/* Image Container */}
              <div class='order-2 w-full md:order-1 md:w-1/2'>
                <Image
                  src={getImageSrc(image)}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  layout='constrained'
                  class='h-auto w-full rounded-lg shadow-md'
                />
              </div>
            </div>
          );
        })}
      </PageWrapperComponent>
    );
  }
);
