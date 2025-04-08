import type { SiteImage } from '../site/types';

export interface StoryEntry {
  id: string;
  title: string;
  subtitle: string;
  highlight: string;
  image: SiteImage;
}

export interface StoryContent {
  stories: StoryEntry[];
}
