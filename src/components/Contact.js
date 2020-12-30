import React, { Fragment } from 'react';
import HeaderImage from './HeaderImage';
import { Container } from './Container';
import { MailIcon } from './Icons';

export default function Contact() {
  // const content = useFetch(`${process.env.REACT_APP_API_URL}/pages/contact`);

  // useEffect(() => {
  //   if (content?.response) {
  //     document.title =
  //       content?.response?.meta?.title || process.env.REACT_APP_TITLE;
  //   }
  //   meta('name', 'description', content?.response?.meta?.description);
  // }, [content]);
  const content = {
    response: {
      path: 'contact',
      title: 'Contact',
      img: {
        title: 'Contact',
        alt: 'Garden in Birstein',
        copyright: '',
        size: {
          small: 'gallery-header-small.jpg',
          medium: 'gallery-header-medium.jpg',
          large: 'gallery-header-large.jpg',
        },
      },
      meta: { title: 'Contact', description: '' },
    },
  };

  document.title = 'Contact';

  return (
    <Fragment>
      <HeaderImage data={content} />
      <Container>
        <p>
          If you have info on additional concerts, photos/videos with David
          Shallon or any questions, please feel free to contact us here:
        </p>
        <p>
          <a href="mailto:info@davidshallon.com">
            <MailIcon style={{ fontSize: '2rem', marginRight: 8 }} />
            info@davidshallon.com
          </a>
        </p>
      </Container>
    </Fragment>
  );
}
