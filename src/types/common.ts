export interface SectionHeadline {
  title: string;
  subtitle?: string;
  highlight?: string;
}

export interface SiteImage {
  src: string;
  fileName: string;
  alt: string;
  width: number;
  height: number;
  provider: 'local' | 'cdn';
  cdnUrl?: string;
  layout?: 'fixed' | 'constrained' | 'fullWidth';
  priority?: boolean;
  breakpoints?: number[];
}
