import React from 'react';

function Overview({result}) {
  return (
    <div id="overview-div">
      <h3>Overview:</h3>
      <p>{result.overview}</p>
    </div>
  );
}

export default Overview;
