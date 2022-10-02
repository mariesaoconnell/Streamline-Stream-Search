import React from 'react';
import { useState, useEffect } from 'react';
import { scryRenderedComponentsWithType } from 'react-dom/test-utils';

function LastSearched({lastSearch}) {

  console.log({lastSearch})

  // useEffect(() =>{
  //   // loadContent();
  // }, [lastSearch])

  const lastSearchStyle = {
    width: "95%",
    height: "500px",
    backgroundColor: "blue",
    margin: "auto",
    overflowX: "scroll",
    scrollBehavior: "smooth",
    scrollSnapType: "x mandatory"
  }

  // DOM OBJECT: LIST
  const lastSearchList = document.querySelector('#last-search-list')

  function loadContent(){
    let newListEl = document.createElement('li');
    let lastSearchEl = lastSearch.pop();

    newListEl.innerHTML = lastSearchEl;

    lastSearchList.appendChild(newListEl);
  }

  return (
    <div id="last-search-div" style={lastSearchStyle}>
      <ul id="last-search-list">

      </ul>
    </div>
  );
}

export default LastSearched;
