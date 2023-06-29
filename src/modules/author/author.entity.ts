import { Author } from '../../types/author.type.js';
import typegoose, { defaultClasses, getModelForClass } from '@typegoose/typegoose';
import { createSHA256 } from '../../core/helpers/common.js';

const { prop, modelOptions } = typegoose;

export interface AuthorEntity extends defaultClasses.Base{}

@modelOptions({
  schemaOptions: {
    collection: 'authors'
  }
})

export class AuthorEntity extends defaultClasses.TimeStamps implements Author {
  @prop({required: true, default: ''})
  public username: string;

  @prop({ unique: true, required: true })
  public email: string;

  @prop({ required: false, default: ''})
  public avatarPath: string;

  @prop({required: true, default: ''})
  private password?: string;

  @prop({required: true, default: ''})
  public isPro: boolean;

  constructor(authorData: Author) {
    super();

    this.email = authorData.email;
    this.avatarPath = authorData.avatarPath;
    this.username = authorData.username;
    this.isPro = authorData.isPro;
  }

  public setPassword(password: string, salt: string) {
    this.password = createSHA256(password, salt)
  }

  public getPassword() {
    return this.password;
  }
}

export const AuthorModel = getModelForClass(AuthorEntity);