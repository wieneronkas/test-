import type { SiteImage } from '~/types/common';

export interface TokenStat {
  value: string;
  label: string;
}

export interface TokenomicsContent {
  title: string;
  subtitle: string;
  highlight: string;
  image: SiteImage;
  stats: TokenStat[];
}
