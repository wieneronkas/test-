import { component$, useStore } from '@builder.io/qwik';
import IconMenu from '~/components/icons/IconMenu';

interface ItemProps {
  iconClass?: string;
}

export default component$((props: ItemProps) => {
  const { iconClass } = props;

  const store = useStore({
    isExpanded: false,
  });

  return (
    <button
      type='button'
      class={`ml-1.5 inline-flex items-center rounded-sm bg-primary p-2.5 text-sm text-white transition hover:bg-primary-300 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-black dark:focus:ring-gray-700 ${
        store.isExpanded ? 'expanded' : ''
      }`}
      aria-label='Toggle Menu'
      onClick$={() => {
        store.isExpanded = store.isExpanded ? false : true;

        // TODO:
        document.body.classList.toggle('overflow-hidden');
        document.getElementById('header')?.classList.toggle('h-screen');
        document.querySelector('#header nav')?.classList.toggle('hidden');
      }}
    >
      <IconMenu class={iconClass} />
    </button>
  );
});
