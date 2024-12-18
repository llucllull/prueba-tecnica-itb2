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
  location: Location;
  zones: Zone[];
  price: string
  media: Media[];
}

export interface Category {
  id: number;
  name: string;
  media: Media[];
}

export interface Media {
  externalUrl: string;
  contentUrl: string;
}

export interface Location {
  id: number;
  name: string;
  latitude: string;
  longitude: string;
}

export interface Zone {
  id: number;
  name: string;
  latitude: string;
  longitude: string;
}
