import { component$, useStyles$ } from '@builder.io/qwik';
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from '@builder.io/qwik-city';

import { RouterHead } from '~/components/common/RouterHead';
import { DarkThemeLauncher } from '~/components/common/DarkThemeLauncher';

// import "@fontsource-variable/inter";
import styles from '~/assets/styles/global.css?inline';

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Dont remove the `<head>` and `<body>` elements.
   */

  useStyles$(styles);

  return (
    <QwikCityProvider>
      <head>
        <meta charset='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='manifest' href='/manifest.json' />
        <RouterHead />
        <DarkThemeLauncher />
        <ServiceWorkerRegister />
      </head>
      <body class='overflow-x-hidden bg-white tracking-tight text-gray-900 antialiased dark:bg-gray-900 dark:text-slate-300'>
        <RouterOutlet />
      </body>
    </QwikCityProvider>
  );
});
