import { component$ } from '@builder.io/qwik';
import { Button } from '../ui/Button';
import { iconMap } from '../icons/iconMap';
import { Anchor } from '../ui/Anchor';

interface HeroButtonProps {
  href?: string;
  label?: string;
  style?: string;
  download?: string;
  icon?: string;
}

/**
 * A reusable call-to-action button component for the hero section.
 * Supports optional icons, download links, and custom styles.
 *
 * Internally uses the `Anchor` and `Button` components for consistent styling and behavior.
 *
 * @example
 * <HeroButton
 *   href="https://example.com"
 *   label="Join Now"
 *   style="bg-primary-200 dark:bg-primary-600"
 *   icon="telegram"
 * />
 */
export const HeroButton = component$(
  ({
    href = '#',
    label = 'Click me',
    style = 'bg-primary-400',
    download,
    icon,
  }: HeroButtonProps) => {
    const Icon = icon ? iconMap[icon] : null;
    return (
      <Anchor href={href} {...(download ? { download } : {})}>
        <div class='flex w-full'>
          <Button class={`btn w-full rounded-md py-2 ${style}`}>
            {Icon && <Icon class='size-4' />}
            {label}
          </Button>
        </div>
      </Anchor>
    );
  }
);
