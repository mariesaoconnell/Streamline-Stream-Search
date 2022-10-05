import React from 'react';
import Card from './Card';

function CardList({lastSearch}) {
  return (
    <div>
      <ul id="last-search-list" style={{listStyleType: "none"}}>
        {
          lastSearch.map(lastSearched=>{
          return <Card lastSearched={lastSearched} key={lastSearched.title}/>
        })}
      </ul>
    </div>
  );
}

export default CardList;
