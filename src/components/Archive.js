import React, { useState, useEffect, Fragment } from 'react';
import '../css/Concerts.css';
import { Heading } from './Headings';
import YearTabs from './YearTabs';

export default function Archive() {
  const [years, setYears] = useState(null);

  // TODO: lazyload
  useEffect(() => {
    const archiveYears = [];
    for (let i = 2000; i >= 1975; i--) {
      archiveYears.push(i);
    }
    setYears(archiveYears);
  }, []);

  return (
    // TODO: add loading spinner
    <Fragment>
      <Heading h1 title="Archive" />
      {!years ? (
        <p>Loading...</p>
      ) : (
        <main>{years?.length && <YearTabs years={years} />}</main>
      )}
    </Fragment>
  );
}
