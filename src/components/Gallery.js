import React from 'react';
import PhotoGallery from 'react-photo-gallery';

import { useFetch } from '../helpers/useFetch';

export default function Gallery() {
  const photos = useFetch('https://david-shallon-api.vercel.app/pictures');

  return photos.response && <PhotoGallery photos={photos.response} />;
}
