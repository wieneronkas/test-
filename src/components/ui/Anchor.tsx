import { component$, Slot } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

/**
 * Props for the `Anchor` component.
 * A wrapper around the native <a> element that supports common link attributes
 * and automatically applies `rel="noopener noreferrer"` for external links.
 */
interface AnchorProps {
  download?: string | boolean;
  href: string;
  class?: string;
  target?: string;
  rel?: string;
  'aria-label'?: string;
  title?: string;
  role?: string;
}

/**
 * A customizable anchor link component with accessibility and security defaults.
 * - Uses `<Link>` for internal URLs (starts with `/`)
 * - Falls back to `<a>` for external links and `mailto:`, `tel:`
 * - Accepts children via `<Slot />` and passes all common anchor attributes.
 * - Automatically adds `rel="noopener noreferrer"` if `target="_blank"` and `rel` is not provided.
 */
export const Anchor = component$<AnchorProps>(
  ({ href, class: className, target, rel, download, ...rest }) => {
    const isExternal =
      href.startsWith('http') ||
      href.startsWith('mailto:') ||
      href.startsWith('tel:') ||
      download;

    // If it's an external or downloadable link, use <a>
    if (isExternal) {
      return (
        <a
          href={href}
          class={className}
          target={target}
          rel={rel ?? (target === '_blank' ? 'noopener noreferrer' : undefined)}
          download={download}
          {...rest}
        >
          <Slot />
        </a>
      );
    }

    // Otherwise use QwikCity's <Link>
    return (
      <Link
        href={href}
        class={className}
        target={target}
        rel={rel ?? (target === '_blank' ? 'noopener noreferrer' : undefined)}
        {...rest}
      >
        <Slot />
      </Link>
    );
  }
);
