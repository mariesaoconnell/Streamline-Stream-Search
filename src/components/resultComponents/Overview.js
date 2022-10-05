import React from 'react';

function Overview({result}) {
  return (
    <div id="overview-div">
      <p>{result.overview}</p>
    </div>
  );
}

export default Overview;
