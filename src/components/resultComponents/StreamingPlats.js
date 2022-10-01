import React from 'react';

function StreamingPlats({result}) {
  const {streamingInfo} = result;
  const {us} = streamingInfo;

  function fetchPlats(){
    let plats = [];
    for(let key in us){
      plats.push(key);
    }
    return plats.join(' ');
  }


  return (
    <div>
      <h3>Streaming Platforms</h3>
      <p>
        {fetchPlats()}
      </p>
    </div>
  );
}

export default StreamingPlats;
