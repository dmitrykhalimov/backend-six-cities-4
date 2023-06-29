import { Author } from './author.type';
import { Features } from './features.enum';
import { Flat } from './flat.enum';
import { Location } from './location.type';

export type Offer = {
  title: string;
  description: string;
  offerDate: Date;
  city: string;
  preview: string;
  photos: string[];
  isPremium: boolean;
  isFavorite: boolean;
  rating: number;
  flatType: Flat;
  rooms: number;
  guests: number;
  price: number;
  features: Features[];
  author: Author;
  location: Location;
}
