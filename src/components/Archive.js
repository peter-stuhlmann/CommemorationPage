import React, { useState, useEffect } from 'react';
import '../css/Concerts.css';
import YearHeading from './YearHeading';
import ArchiveTable from './ArchiveTable';
import { useFetch } from '../helpers/useFetch';
import { FailedToLoad } from './Messages';
import { Container } from './Container';
import { Heading } from './Headings';

export default function Archive() {
  const [concerts, setConcerts] = useState(null);
  const [years, setYears] = useState(null);
  const [tableHeaders, setTableHeaders] = useState(null);

  // TODO: lazyload
  const data = useFetch(`${process.env.REACT_APP_API_URL}/concerts`);

  const getYears = (concerts) => {
    const years = [];
    concerts.forEach((concert) => {
      if (years.indexOf(concert.year) === -1) {
        years.push(concert.year);
      }
    });
    setYears(years);
  };

  useEffect(() => {
    if (data.response) {
      setConcerts(data.response);
    }
  }, [data.response]);

  useEffect(() => {
    if (concerts) {
      const filteredHeaders = Object.keys(concerts[0]).filter(
        (header) => header !== 'id' && header !== 'date'
      );
      setTableHeaders(filteredHeaders);
      getYears(concerts);
    }
  }, [concerts]);

  return data?.error ? (
    <FailedToLoad />
  ) : (
    // TODO: add loading spinner
    <Container full>
      <Heading h1 title="Archive" />
      {!years && <p>Loading...</p>}
      {years &&
        years.map((year, index) => (
          <section key={year}>
            <YearHeading year={year} />
            <ArchiveTable
              tableHeaders={tableHeaders}
              concerts={concerts.filter((concert) => concert.year === year)}
            />
          </section>
        ))}
    </Container>
  );
}
