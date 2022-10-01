import React from 'react';
import { useState, useEffect } from 'react';

function LastSearched({lastSearch}) {

  console.log({lastSearch})

  useEffect(() =>{
    console.log('NewSearch')
  }, [lastSearch])


  return (
    <div>
      <ul>
      hello from last Searched
      </ul>
    </div>
  );
}

export default LastSearched;
