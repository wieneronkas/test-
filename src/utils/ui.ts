/**
 * Returns Tailwind class for controlling column span.
 */
export const getColSpanClass = (colSpan?: 'full' | 'half'): string =>
  colSpan === 'full' ? 'sm:col-span-2' : '';

/**
 * Represents an image object with metadata.
 */
export interface Image {
  src?: string;
  fileName: string;
  provider: string;
  cdnUrl?: string;
}

/**
 * Retrieves the appropriate image source URL based on the provider type.
 */
export function getImageSrc(image: Image): string {
  if (image.src) return image.src;
  if (!image.fileName) return '';

  const validProvider = image.provider === 'cdn' ? 'cdn' : 'local';

  return validProvider === 'local'
    ? `/images/${image.fileName}`
    : (image.cdnUrl ?? '');
}
