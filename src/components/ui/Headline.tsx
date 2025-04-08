import { twMerge } from 'tailwind-merge';

interface Props {
  title?: string;
  subtitle?: string;
  highlight?: string;
  classes?: Record<string, string>;
}

export const Headline = (props: Props) => {
  const { title = '', subtitle = '', highlight = '', classes = {} } = props;

  const {
    container: containerClass = 'max-w-3xl',
    title: titleClass = 'text-4xl md:text-5xl ',
    subtitle: subtitleClass = 'text-xl',
  } = classes;

  return title || subtitle || highlight ? (
    <div
      class={twMerge(
        'mb-4 text-center sm:mt-4 md:mx-auto md:mb-12',
        containerClass
      )}
    >
      {highlight && (
        <p
          class='text-base font-bold uppercase tracking-wide text-primary-600'
          dangerouslySetInnerHTML={highlight}
        />
      )}
      {title && (
        <h2
          class={twMerge(
            'leading-tighter font-heading text-heading font-bold tracking-tighter',
            titleClass
          )}
          dangerouslySetInnerHTML={title}
        />
      )}

      {subtitle && (
        <p
          class={twMerge('text-muted mt-4', subtitleClass)}
          dangerouslySetInnerHTML={subtitle}
        />
      )}
    </div>
  ) : null;
};
