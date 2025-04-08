import { Slot, component$ } from '@builder.io/qwik';

interface BaseIconProps {
  class?: string;
  width?: number;
  height?: number;
  viewBox?: string;
  strokeWidth?: number;
  fill?: string;
  stroke?: string;
  ariaLabel?: string;
}

export const BaseIcon = component$(({
  class: className = 'icon icon-tabler size-5',
  width = 24,
  height = 24,
  viewBox = '0 0 24 24',
  strokeWidth = 2,
  fill = 'none',
  stroke = 'currentColor',
  ariaLabel = 'Icon'
}: BaseIconProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      class={className}
      width={width}
      height={height}
      viewBox={viewBox}
      fill={fill}
      stroke={stroke}
      stroke-width={strokeWidth}
      stroke-linecap='round'
      stroke-linejoin='round'
      role='img'
      aria-label={ariaLabel}
    >
      <Slot />
    </svg>
  );
});
