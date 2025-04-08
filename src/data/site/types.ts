import type { SiteImage } from '~/types/common';

export interface BrandInfo {
  default: string;
  description: string;
  name: string;
  token: string;
  tokenCTA: string;
  tokenUrl: string;
  logo: SiteImage;
}

export interface HeroButtonItem {
  label: string;
  url: string;
  style?: string;
  fileName?: string;
  icon?: string;
}

export interface HeroContent {
  title: {
    pre: string;
    highlight: string;
    post: string;
  };
  description?: string;
  image: SiteImage;
  alert: {
    label: string;
    text: string;
    url: string;
  };
  buttons?: HeroButtonItem[];
}

export interface FooterLinkItem {
  title: string;
  href: string;
}

export interface FooterLinkSection {
  title: string;
  items: FooterLinkItem[];
}

export interface FooterInfo {
  title: string;
  description: string;
  copyright: string;
  donation: {
    text: string;
    icon: string;
    address: string;
    link: string;
  };
  links: FooterLinkSection[];
}

export interface NavigationItem {
  text: string;
  href?: string;
  icon?: string;
  items?: NavigationSubItem[];
}

export interface NavigationSubItem {
  text: string;
  href: string;
  icon?: string;
}

export interface SocialLink {
  id: string;
  icon: string;
  title: string;
  subtitle?: string;
  url: string;
  meta?: Record<string, any>;
}

export interface ContactLink {
  icon: string;
  title: string;
  url: string;
}

export interface SiteContent {
  brand: BrandInfo;
  hero: HeroContent;
  footer: FooterInfo;
  navigation: NavigationItem[];
  social: SocialLink[];
  contact: {
    email: ContactLink;
  };
}
