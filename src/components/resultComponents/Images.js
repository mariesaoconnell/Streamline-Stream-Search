import React from 'react';

function Images({result}) {
  const { backdropURLs } = result;
  const { original } = backdropURLs
  console.log(original);

  return (
    <div id="img-div">
      <img id="original-poster" alt="original poster" src={original} />
    </div>
  );
}

export default Images;
