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

  return cookieOptIn === undefined ? (
    <CookieConsentBanner>
      <p>
        We use cookies on this website. Some of them are essential, while others
        help us improve this website and thereby improve your user experience.
        You can find more information in the{' '}
        <Link to="/privacy-policy">privacy policy</Link>.
      </p>
      <button type="button" className="decline" onClick={() => optOut()}>
        Save only essential cookies
      </button>
      <button type="button" className="accept" onClick={() => optIn()}>
        Accept all
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
  max-width: 500px;
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
