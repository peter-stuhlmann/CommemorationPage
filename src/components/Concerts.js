import React, { Fragment } from 'react';
import '../css/Concerts.css';
import YearHeading from './YearHeading';
import ConcertsTable from './ConcertsTable';
const data = require('../data/data.json');

export default function Concerts() {
  const tableHeaders = Object.keys(data[0]);
  return (
    <div className="App">
      <div className="container mt-3">
        <header className="row">
          <div className="col">
            <h2 className="text-left">Concerts</h2>
            <p>
              Add a short description of this page. Also download as PDF button
            </p>
          </div>
        </header>
        <main>
          {data.slice(1).map((concertsByYear, index) => (
            <Fragment key={concertsByYear.Year}>
              <YearHeading index={index} year={concertsByYear.Year} />
              <ConcertsTable
                tableHeaders={tableHeaders}
                concerts={concertsByYear.Concerts}
              />
            </Fragment>
          ))}
        </main>
      </div>
    </div>
  );
}
