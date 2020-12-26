import React, { useState, useEffect, Fragment } from 'react';

import '../css/Concerts.css';
import HeaderImage from './HeaderImage';
import YearTabs from './YearTabs';
import { useFetch } from '../helpers/useFetch';
import { meta } from '../helpers/meta';
import Spinner from './Spinner';

export default function Archive({ showNavbar }) {
  const [years, setYears] = useState(null);
  const content = useFetch(`${process.env.REACT_APP_API_URL}/pages/archive`);

  // TODO: lazyload
  useEffect(() => {
    const archiveYears = [];
    for (let i = 2000; i >= 1975; i--) {
      archiveYears.push(i);
    }
    setYears(archiveYears);
  }, []);

  useEffect(() => {
    if (content?.response) {
      document.title =
        content?.response?.meta?.title || process.env.REACT_APP_TITLE;
    }
    meta('name', 'description', content?.response?.meta?.description);
  }, [content]);

  return (
    <Fragment>
      <HeaderImage data={content} />
      {!years ? (
        <Spinner />
      ) : (
        <main>
          {years?.length && <YearTabs years={years} showNavbar={showNavbar} />}
        </main>
      )}
    </Fragment>
  );
}
