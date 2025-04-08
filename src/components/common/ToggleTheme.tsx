import { component$, useStore, useVisibleTask$ } from '@builder.io/qwik';
import IconSun from '~/components/icons/IconSun';
import IconMoon from '~/components/icons/IconMoon';

interface ItemProps {
  iconClass?: string;
}

export default component$((props: ItemProps) => {
  const { iconClass } = props;
  const store = useStore({
    theme:
      (typeof window !== 'undefined' && window.localStorage.theme) || undefined,
  });

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(() => {
    store.theme = document.documentElement.classList.contains('dark')
      ? 'dark'
      : 'light';
  });

  return (
    <button
      type='button'
      class='inline-flex items-center rounded-lg p-2.5 text-sm text-gray-500 hover:bg-primary-300 hover:text-white focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:focus:ring-gray-700'
      aria-label='Toggle between Dark and Light mode'
      onClick$={() => {
        switch (store.theme) {
          case 'dark':
            document.documentElement.classList.remove('dark');
            store.theme = window.localStorage.theme = 'light';
            break;
          default:
            document.documentElement.classList.add('dark');
            store.theme = window.localStorage.theme = 'dark';
            break;
        }
      }}
    >
      {store.theme == 'dark' ? (
        <IconMoon class={iconClass} />
      ) : (
        <IconSun class={iconClass} />
      )}
    </button>
  );
});
