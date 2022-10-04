import React, { useEffect, useState } from 'react';


function Home({search, result, lastSearch}) {
  const searchStorage = [];
  const searchDiv = document.querySelector('#last-search-div');

//   console.log(result)
//  useEffect(()=>{
//    let newDiv = document.createElement('div')
//    newDiv.innerText=result.title;
//    setTimeout(()=>{searchDiv.appendChild(newDiv);},2000)
//  }, [search])


  return (
    <div id="last-search-div">

    </div>
  );
}

export default Home;
