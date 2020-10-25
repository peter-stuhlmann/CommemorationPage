import React, { useState, useEffect } from 'react';
import { DownIcon } from './Icons';
import { useFetch } from '../helpers/useFetch';
import Spinner from './Spinner';

export default function ConcertsTable(props) {
  const { year } = props;
  const [concerts, setConcerts] = useState(null);
  const [tableHeaders, setTableHeaders] = useState(null);

  const data = useFetch(
    `${process.env.REACT_APP_API_URL}/concerts?year=${year}`
  );

  useEffect(() => {
    if (data.response) {
      setConcerts(data.response);
      const filteredHeaders = Object.keys(data.response[0]).filter(
        (header) => header !== 'id' && header !== 'date'
      );
      setTableHeaders(filteredHeaders);
    }
  }, [data.response, year]);

  return (
    (!tableHeaders && <Spinner />) || (
      <table role="table" className="table">
        {tableHeaders && <TableHead headers={tableHeaders} />}
        <tbody>
          {concerts &&
            concerts.map((concert) => (
              <TableRow
                concert={concert}
                headers={tableHeaders}
                key={concert.id}
              />
            ))}
        </tbody>
      </table>
    )
  );
}

function TableHead(props) {
  const displayHeaders = [];
  props.headers.forEach((header) => {
    switch (header) {
      case 'id':
      case 'date':
        break;
      case 'displayDate':
        displayHeaders.push('Month, Day');
        break;
      case 'program':
        displayHeaders.push('Composer, Work');
        break;
      case 'location':
        displayHeaders.push('City, State');
        break;
      case 'venue':
        displayHeaders.push('Promoter, Venue');
        break;
      case 'participants':
        displayHeaders.push('Orchestra & Soloists');
        break;
      case 'attachments':
        displayHeaders.push('');
        break;
      default:
        displayHeaders.push(header.charAt(0).toUpperCase() + header.slice(1));
    }
  });

  return (
    <thead>
      <tr role="row">
        {displayHeaders.map((header) => (
          <th role="columnheader" key={header}>
            {header}
          </th>
        ))}
      </tr>
    </thead>
  );
}

function TableRow(props) {
  const { concert, headers } = props;
  return (
    <tr role="row">
      {Object.keys(concert)
        .filter((property) => headers.indexOf(property) !== -1)
        .map((property) => (
          <TableCell
            concert={concert}
            property={property}
            key={concert.id + property}
          />
        ))}
    </tr>
  );
}

function TableCell(props) {
  const { concert, property } = props;
  let seperator;
  switch (property) {
    case 'program':
      seperator = ':';
      break;
    case 'location':
      seperator = ',';
      break;
    default:
      seperator = '';
  }

  return (
    <td role="cell" key={property}>
      {property === 'attachments' && concert[property].length > 0 ? (
        <DownIcon />
      ) : Array.isArray(concert[property]) ? (
        <ul>
          {concert[property].map((line, i) => (
            <li
              key={i}
              dangerouslySetInnerHTML={createInnerHtml(line, seperator)}
            />
          ))}
        </ul>
      ) : (
        concert[property]
      )}
    </td>
  );
}

function createInnerHtml(content, seperator) {
  const text =
    typeof content === 'string'
      ? content
      : Object.values(content).join(`${seperator} `);
  return { __html: text };
}
