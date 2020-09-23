import React, { Fragment } from 'react';

export default function ConcertsTable(props) {
  const { tableHeaders, concerts } = props;
  return (
    <table role="table" className="table">
      <thead>
        <tr role="row">
          {tableHeaders.map((header) => (
            <th role="columnheader" key={header}>
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {concerts.map((concert, index) => (
          <tr role="row" key={'row' + index}>
            {Object.keys(concert).map((property) => (
              <td role="cell" key={property}>
                {Array.isArray(concert[property])
                  ? concert[property].map((line) => (
                      <Fragment key={line}>
                        {line}
                        <br />
                      </Fragment>
                    ))
                  : concert[property]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
