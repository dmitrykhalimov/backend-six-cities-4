import { City } from '../../../types/city.enum.js';
import { Flat } from '../../../types/flat.enum.js';
import { Features } from '../../../types/features.enum.js';
import { Location } from '../../../types/location.type.js';

export default class CreateOfferDto {
  public titled?: string;
  public descriptiond?: string;
  public offerDated?: Date;
  public cityd?: City;
  public previewd?: string;
  public photosd?: string[];
  public isPremiumd?: boolean;
  public isFavorited?: boolean;
  public ratingd?: number;
  public flatTyped?: Flat;
  public roomsd?: number;
  public guestsd?: number;
  public priced?: number;
  public featuresd?: Features[];
  public authord?: string;
  public locationd?: Location;
}