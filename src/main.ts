import 'reflect-metadata';
import { Container } from 'inversify';

import RestApplication from './app/rest.js'; // приложение

import { AppComponent } from './types/app-component.enum.js';

import { createRestApplicationContainer } from './app/rest.container.js';
import { createAuthorContainer } from './modules/author/author.container.js';
import { createOfferContainer } from './modules/offer/offer.container.js';
import { createCommentContainer } from './modules/comment/comment.container.js';

async function bootstrap() {
  const mainContainer = Container.merge(
    createRestApplicationContainer(),
    createAuthorContainer(),
    createOfferContainer(),
    createCommentContainer(),
  );

  const application = mainContainer.get<RestApplication>(AppComponent.RestApplication);
  await application.init();
}

bootstrap();

