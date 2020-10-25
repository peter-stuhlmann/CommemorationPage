import React, { useState, useEffect } from 'react';
import '../css/Concerts.css';
import { Container } from './Container';
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
    <Container full>
      <Heading h1 title="Archive" />
      {!years ? (
        <p>Loading...</p>
      ) : (
        <main>{years?.length && <YearTabs years={years} />}</main>
      )}
    </Container>
  );
}
