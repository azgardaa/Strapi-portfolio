import type { Schema, Attribute } from '@strapi/strapi';

export interface SlidesSlides extends Schema.Component {
  collectionName: 'components_slides_slides';
  info: {
    displayName: 'slides';
    icon: 'alien';
    description: '';
  };
  attributes: {
    imageUrl: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    alt: Attribute.String;
    text: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'slides.slides': SlidesSlides;
    }
  }
}
