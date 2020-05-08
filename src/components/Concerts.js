import React, { Fragment } from 'react';
import '../css/Concerts.css';
const data = require('../data/data.json');

export default function Concerts() {
  return (
    <div className="App">
      <div className="container mt-3">
        <div className="row">
          <div className="col">
            <h2 className="text-left">Concerts</h2>
          </div>
        </div>
        {data.slice(1).map((year, index) => (
          <>
            <div
              className={`pt-3 mb-3 row position-sticky z-index${index + 1}`}
            >
              <div className="col">
                <h3>{year.Year}</h3>
              </div>
            </div>
            <table role="table" className="table">
              <thead>
                <tr role="row">
                  {Object.keys(data[0]).map((key) => (
                    <th role="columnheader" key={key}>
                      {key}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {year.Concerts.map((tableRow, index) => (
                  <tr role="row" key={'row' + index}>
                    {Object.keys(tableRow).map((key) => (
                      <td role="cell" key={key}>
                        {Array.isArray(tableRow[key])
                          ? tableRow[key].map((line) => (
                              <Fragment key={line}>
                                {line}
                                <br />
                              </Fragment>
                            ))
                          : tableRow[key]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        ))}
      </div>
    </div>
  );
}
