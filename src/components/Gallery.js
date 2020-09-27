import React, { useCallback, useState } from 'react';
import PhotoGallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';
import Tooltip from './Tooltip';

import { useFetch } from '../helpers/useFetch';
import { Container } from './Container';

export default function Gallery(e) {
  const photos = useFetch(`${process.env.REACT_APP_API_URL}/pictures`);

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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
        onContextMenu={(e) => {
          e.preventDefault();
          setMousePosition({ x: e.clientX, y: e.clientY });
        }}
      >
        <Tooltip label="&copy; davidshallon.com" position={mousePosition} />
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
