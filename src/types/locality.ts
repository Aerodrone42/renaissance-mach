
export interface Locality {
  name: string;
  distance: string;
  description: string;
  attractions: string[];
}

export interface LocalityImage {
  src: string;
  alt: string;
}

export interface LocalitiesData {
  [key: string]: Locality;
}

export interface LocalityImages {
  [key: string]: LocalityImage[];
}
