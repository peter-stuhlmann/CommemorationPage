import React from 'react';

export default function YearHeading(props) {
  const { year } = props;
  return (
    <div className={`pt-3 mb-3 row position-sticky z-index1`}>
      <div className="col">
        <h3>{year}</h3>
      </div>
    </div>
  );
}
