import { component$ } from '@builder.io/qwik';
import { Headline2 } from '../ui/Headline2';
import { Headline } from '../ui/Headline';
import { tokenomicsData } from '../../data/tokenomics';
import { Image } from '@unpic/qwik';
import { TokenomicsStats } from '../widgets/TokenomicsStats';
import { getImageSrc } from '~/utils/ui';

/**
 * TokenomicsContent component.
 *
 * Displays the tokenomics section, including a headline, image, and a grid of statistics.
 * Designed to provide a high-level overview of a project's token distribution and key metrics.
 *
 * @component
 * @param {{ PageWrapperComponent: any }} props - Layout wrapper component used to apply consistent page structure.
 * @returns {JSX.Element} Rendered tokenomics section.
 */
export const TokenomicsContent = component$(
  ({ PageWrapperComponent }: { PageWrapperComponent: any }) => {
    const { title, subtitle, highlight, image } = tokenomicsData;

    return (
      <PageWrapperComponent>
        <div class='-mt-2 flex flex-col items-center gap-6 pb-2 md:flex-row md:items-start md:justify-between md:gap-8 md:p-8'>
          {/* Left Side: Headline + Stats */}
          <div class='order-1 flex w-full flex-col gap-6 md:order-2 md:w-1/2'>
            {/* Headline */}
            <div>
              <div class='hidden sm:block'>
                <Headline2
                  title={title}
                  subtitle={subtitle}
                  highlight={highlight}
                />
              </div>
            </div>
            <div class='block sm:hidden'>
              <Headline
                title={title}
                subtitle={subtitle}
                highlight={highlight}
              />
            </div>
            {/* Stats Grid */}
            <TokenomicsStats />
          </div>

          {/* Right Side: Image */}
          <div class='order-2 w-full px-2 md:order-1 md:w-1/2'>
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
      </PageWrapperComponent>
    );
  }
);
