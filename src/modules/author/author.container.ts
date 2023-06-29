import { Container } from 'inversify';
import { types } from '@typegoose/typegoose';
import { AuthorServiceInterface } from './author-service.interface.js';
import { AppComponent } from '../../types/app-component.enum.js';
import AuthorService from './author.service.js';
import { AuthorEntity, AuthorModel } from './author.entity.js';

export function createAuthorContainer() {
  const authorContainer = new Container();
  authorContainer.bind<AuthorServiceInterface>(AppComponent.AuthorServiceInterface).to(AuthorService).inSingletonScope;
  authorContainer.bind<types.ModelType<AuthorEntity>>(AppComponent.AuthorModel).toConstantValue(AuthorModel);

  return authorContainer;
}