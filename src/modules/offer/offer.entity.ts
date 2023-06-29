import typegoose, {defaultClasses, getModelForClass, Ref} from '@typegoose/typegoose';
import { Flat } from '../../types/flat.enum.js';
import { Features } from '../../types/features.enum.js';
import { Location } from '../../types/location.type.js';
import { AuthorEntity } from '../author/author.entity.js';

const { prop, modelOptions } = typegoose;

export interface OfferEntity extends defaultClasses.Base {}

@modelOptions({
  schemaOptions: {
    collection: 'offers'
  }
})

export class OfferEntity extends defaultClasses.TimeStamps {
  @prop({ required: true })
  public title!: string;

  @prop({ required: true })
  public description!: string;

  @prop({ required: true })
  public offerDate!: Date;

  @prop()
  public city!: string;

  @prop()
  public preview!: string;

  @prop()
  public photos?: string[];

  @prop()
  public isPremium!: boolean;

  @prop()
  public isFavorite!: boolean;

  @prop()
  public rating!: number;

  @prop({ 
    type: () => String,
    enum: Flat
  })
  public flatType!: Flat;

  @prop()
  public rooms!: number;

  @prop()
  public guests!: number;

  @prop()
  public price!: number;

  @prop({ 
    type: () => String,
    enum: Features
  })
  public features!: Features;

  @prop({})
  public location!: Location;

  @prop({ 
    ref: AuthorEntity,
    required: true,
  })
  public author!: Ref<AuthorEntity>;
}

export const OfferModel = getModelForClass(OfferEntity);

