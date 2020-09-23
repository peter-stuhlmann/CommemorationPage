import React, { useState, useEffect } from 'react';
import '../css/Concerts.css';
import YearHeading from './YearHeading';
import ConcertsTable from './ConcertsTable';
import { useFetch } from '../helpers/useFetch';

export default function Concerts() {
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

  return (
    // TODO: add loading spinner
    <div className="App">
      <div className="container mt-3">
        <header className="row">
          <div className="col">
            <h2 className="text-left">Concerts</h2>
            {!years && <p>Loading...</p>}
          </div>
        </header>
        <main>
          {years &&
            years.map((year, index) => (
              <section key={year}>
                <YearHeading index={index} year={year} />
                <ConcertsTable
                  tableHeaders={tableHeaders}
                  concerts={concerts.filter((concert) => concert.year === year)}
                />
              </section>
            ))}
        </main>
      </div>
    </div>
  );
}
