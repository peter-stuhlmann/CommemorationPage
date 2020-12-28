import React, { useCallback, useState, useEffect } from 'react';
import PhotoGallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';
import Tooltip from './Tooltip';

import { useFetch } from '../helpers/useFetch';
import { Container } from './Container';
import { FailedToLoad } from './Messages';
import { meta } from '../helpers/meta';
import Spinner from './Spinner';

export default function Gallery() {
  const photos = useFetch(`${process.env.REACT_APP_API_URL}/pictures`);
  const content = useFetch(`${process.env.REACT_APP_API_URL}/pages/gallery`);

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [copyright, setCopyright] = useState(null);

  const openLightbox = useCallback((event, { index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  useEffect(() => {
    if (content?.response) {
      document.title =
        content?.response?.meta?.title || process.env.REACT_APP_TITLE;
    }
    meta('name', 'description', content?.response?.meta?.description);
  }, [content]);

  return photos?.error ? (
    <FailedToLoad />
  ) : photos?.response ? (
    <Container
      full
      style={{
        margin: '2px 0 5px 0',
        padding: 0,
      }}
      onContextMenu={(e) => {
        e.preventDefault();
        const imgClicked = e.target.getAttribute('src');
        const imgCopyright = photos.response
          .filter((photo) => photo.src === imgClicked)
          .map((photo) => photo.copyright)
          .join('');
        setCopyright(imgCopyright);
        setMousePosition({ x: e.clientX, y: e.clientY });
      }}
    >
      {copyright && (
        <Tooltip label={`Photo: ${copyright}`} position={mousePosition} />
      )}
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
  ) : (
    <Spinner />
  );
}
