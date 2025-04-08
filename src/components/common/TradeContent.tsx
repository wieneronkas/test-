import { component$ } from '@builder.io/qwik';
import { Headline } from '../ui/Headline';
import { tradeData } from '../../data/trade';
import { getImageSrc } from '../../utils/ui';
import { Anchor } from '../ui/Anchor';

/**
 * TradeContent component.
 *
 * Displays a section with external trading platform links and images.
 * Includes a headline and a responsive grid of logo cards that link to supported exchanges or tools.
 *
 * We're using regular <img> tags instead of the Unpic <Image> component here.
 * Why? Because <img> tags work better when we want all images to look the same size,
 * especially when the original images are different shapes (like square vs. wide).
 *
 * By setting the width and height on the <img> tag and using Tailwind's h-48 and object-cover,
 * the images get cropped and sized consistently across all screen sizes.
 *
 * @component
 * @param {{ PageWrapperComponent: any }} props - Layout wrapper component used to apply consistent page structure.
 * @returns {JSX.Element} Rendered trade section with platform links.
 */
export const TradeContent = component$(
  ({ PageWrapperComponent }: { PageWrapperComponent: any }) => {
    const { images, headline } = tradeData;

    return (
      <PageWrapperComponent>
        <div class='h-4'></div>
        <Headline
          title={headline.title}
          subtitle={headline.subtitle}
          highlight={headline.highlight}
        />
        <div class='grid grid-cols-1 gap-5 p-4 md:grid-cols-3'>
          {images.map((image) => {
            return (
              <Anchor key={image.id} href={image.link} target='_blank'>
                <img
                  src={getImageSrc(image)}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  class='h-48 w-full rounded-md object-cover hover:opacity-80'
                />
              </Anchor>
            );
          })}
        </div>
      </PageWrapperComponent>
    );
  }
);
