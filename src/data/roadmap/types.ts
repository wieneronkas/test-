import type { SiteImage } from '~/types/common';

export interface RoadmapItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface RoadmapContent {
  title: string;
  highlight: string;
  itemTitle: string;
  items: RoadmapItem[];
  image: SiteImage;
}
