import React from 'react';
import '../css/Concerts.css';
const data = require('../data/data.json');

export default function Concerts() {
  return (
    <div className="App">
      Concerts:
      <table role="table" className="table">
        <thead>
          <tr role="row">
            {Object.keys(data[0]).map((key) => (
              <th role="columnheader">{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.slice(1).map((x) => (
            <tr role="row">
              {Object.keys(x).map((key) => (
                <td role="cell">
                  {Array.isArray(x[key]) ? (
                    <ul>
                      {x[key].map((line) => (
                        <li>{line}</li>
                      ))}
                    </ul>
                  ) : (
                    x[key]
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
