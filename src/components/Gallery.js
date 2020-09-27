import React, { useCallback, useState } from 'react';
import PhotoGallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';

import { useFetch } from '../helpers/useFetch';
import { Container } from './Container';

export default function Gallery() {
  const photos = useFetch(`${process.env.REACT_APP_API_URL}/pictures`);

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    photos.response && (
      <Container
        full
        style={{
          margin: '2px 0 5px 0',
          padding: 0,
        }}
      >
        <PhotoGallery photos={photos.response} onClick={openLightbox} />
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={photos.response.map((x) => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title,
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </Container>
    )
  );
}
