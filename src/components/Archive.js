import React, { useState, useEffect, Fragment } from 'react';

import '../css/Concerts.css';
import { Heading } from './Headings';
import YearTabs from './YearTabs';
import { useFetch } from '../helpers/useFetch';
import { meta } from '../helpers/meta';

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

  document.title = content?.response?.meta?.title;
  meta('name', 'description', content?.response?.meta?.description);

  return (
    // TODO: add loading spinner
    <Fragment>
      <Heading h1 title="Archive" />
      {!years ? (
        <p>Loading...</p>
      ) : (
        <main>
          {years?.length && <YearTabs years={years} showNavbar={showNavbar} />}
        </main>
      )}
    </Fragment>
  );
}
