export interface Activity {
  id: number;
  title: string;
  slug: string;
  shortDescription: string;
  extendedDescription: string;
  includes: string;
  notIncludes: string;
  isActive: boolean;
  categories: Category[];
}

export interface Category {
  id: number;
  name: string;
  media: Media[];
}

export interface Media {
  id: number;
  name: string;
  type: string;
  externalUrl: string;
  contentUrl: string;
  alt: string;
}
