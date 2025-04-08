import { useVisibleTask$, type QRL } from '@builder.io/qwik';

/**
 * A reusable scroll listener hook for Qwik components.
 *
 * Attaches a scroll event listener to the window and triggers the provided
 * callback with the current `scrollY` value. The scroll event is debounced
 * to reduce performance overhead.
 *
 * @param onScroll$ - A QRL-wrapped callback that receives the current scrollY position.
 * @param debounceMs - Optional debounce time in milliseconds (default: 100ms).
 *
 * @example
 * ```tsx
 * useScrollListener(
 *   $((scrollY) => {
 *     store.isScrolling = scrollY >= 10;
 *   })
 * );
 * ```
 */
export const useScrollListener = (
  onScroll$: QRL<(scrollY: number) => void>,
  debounceMs = 100
) => {
  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(() => {
    let timeoutId: number | undefined;

    const handler = () => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => {
        onScroll$(window.scrollY);
      }, debounceMs);
    };

    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  });
};
