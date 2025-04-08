import { component$ } from '@builder.io/qwik';

interface IconProps {
  class?: string;
}

export default component$(({ class: className }: IconProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      class={`icon icon-tabler ${className || 'size-5'}`}
      width='24'
      height='24'
      viewBox='0 0 20 20'
      fill='currentColor'
      role='img'
      aria-label='Chevron Right arrow'
    >
      <path
        fill-rule='evenodd'
        d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
        clip-rule='evenodd'
      />
    </svg>
  );
});
