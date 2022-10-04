import React from 'react';
import '../styles/streamingPlat.css'
import {useEffect} from 'react';

function StreamingPlats({result, lastSearch, search}) {
  const {streamingInfo} = result;
  const {us} = streamingInfo;

  useEffect(()=>{

      return()=>{
        fetchPlats();

    }
  }, [result.title])

  function fetchPlats(){
    let platLis = document.querySelector('#streaming-plat-list');

    if (platLis == undefined){
      return
    }
    else if (platLis.firstChild) platLis.innerHTML = '';
    else {
      if(result.streamingInfo.us === undefined) {
        let newPlat = document.createElement('li');
        let noPlats = document.createElement('li');
            noPlats.innerText="No Results Found";
        platLis.appendChild(newPlat);
      } else {
        for(let key in us){

        let newPlat = document.createElement('li');
        let platAnchor = document.createElement('a')
          platAnchor.target='_blank';
          platAnchor.href = `${us[key][0].watchLink}`;
          platAnchor.innerText=key;

        newPlat.appendChild(platAnchor);
        platLis.appendChild(newPlat);
      }
     }
    }
  }

  return (
    <div id="streaming-plat-div">
      <h3>Streaming Platforms</h3>
        <ul id="streaming-plat-list">

        </ul>
    </div>
  );
}

export default StreamingPlats;
