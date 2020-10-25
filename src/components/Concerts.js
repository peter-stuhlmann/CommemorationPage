import React, { useState, useEffect } from 'react';
import '../css/Concerts.css';
import YearTabs from './YearTabs';

export default function Concerts() {
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
    <div className="App">
      <div className="container mt-3">
        <header className="row">
          <div className="col">
            <h2 className="text-left">Concerts</h2>
            {!years && <p>Loading...</p>}
          </div>
        </header>
        <main>{years?.length && <YearTabs years={years} />}</main>
      </div>
    </div>
  );
}
