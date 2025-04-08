import type { SectionHeadline, SiteImage } from '~/types/common';

export interface TradeImage extends SiteImage {
  id: string;
  link: string;
}

export interface TradeContent {
  headline: SectionHeadline;
  images: TradeImage[];
}
