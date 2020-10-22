import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Cookies from 'js-cookie';
import { font, boxShadow } from '../helpers/variables';

export default function CookieConsent() {
  const [cookieOptIn, setCookieOptIn] = useState(Cookies.get('cookie-opt-in'));

  const optIn = () => {
    setCookieOptIn(true);
    Cookies.set('cookie-opt-in', true, { expires: 90 });
    window.location.reload();
  };

  const optOut = () => {
    setCookieOptIn(false);
    Cookies.set('cookie-opt-in', false, { expires: 90 });
  };

  // Detect browser language
  let browserLanguage = navigator.language;
  switch (browserLanguage.toLowerCase()) {
    case 'de':
    case 'de-at':
    case 'de-ch':
    case 'de-de':
    case 'de-li':
    case 'de-lu':
      browserLanguage = 'german';
      break;
    default:
      browserLanguage = 'english';
  }

  const content = {
    de: {
      text:
        'Wir nutzen auf dieser Website Cookies. Einige von ihnen sind essentiell, während andere uns helfen, diese Website und dadurch Ihre Nutzererfahrung zu verbessern. Weitere Informationen finden Sie in der ',
      link: 'Datenschutzerklärung',
      accept: 'Alle speichern',
      decline: 'Nur essentielle Cookies speichern',
    },
    en: {
      text:
        'We use cookies on this website. Some of them are essential, while others help us improve this website and thereby improve your user experience. You can find more information in the ',
      link: 'privacy policy',
      accept: 'Accept all',
      decline: 'Save only essential cookies',
    },
  };

  return cookieOptIn === undefined ? (
    <CookieConsentBanner>
      <p>
        {browserLanguage === 'german' ? content.de.text : content.en.text}
        <Link to="/privacy-policy">
          {browserLanguage === 'german' ? content.de.link : content.en.link}
        </Link>
        .
      </p>
      <button type="button" className="decline" onClick={() => optOut()}>
        {browserLanguage === 'german' ? content.de.decline : content.en.decline}
      </button>
      <button type="button" className="accept" onClick={() => optIn()}>
        {browserLanguage === 'german' ? content.de.accept : content.en.accept}
      </button>
    </CookieConsentBanner>
  ) : null;
}

const CookieConsentBanner = styled.div`
  border-radius: 5px;
  padding: 15px;
  background-color: #f7f8fb;
  border: 1px solid rgba(0, 0, 0, 0.15);
  box-shadow: ${boxShadow.primary};
  font-size: ${font.size.small};
  position: fixed;
  z-index: 1000000;
  bottom: 50px;
  right: 50px;
  margin: auto;
  max-width: 550px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;

  p {
    flex: 0 0 100%;
    line-height: 1.5;
    margin-bottom: 20px;

    a {
      display: inline-block;
      color: #008000;
      text-decoration: none;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }
  }

  button {
    border: 0;
    border-radius: 3px;
    cursor: pointer;
    line-height: 1.4;
    padding: 8px;
    transition: 0.2s;

    &.accept {
      background-color: #008000;
      color: #fff;
      flex: 0 0 49%;
      font-size: 16px;

      &:hover {
        background-color: #006500;
      }
    }

    &.decline {
      background-color: #e1dfdf;
      color: #474747;
      flex: 0 0 49%;

      &:hover {
        background-color: #cdcdcd;
      }
    }
  }
`;
