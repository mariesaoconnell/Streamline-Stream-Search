import React from 'react';
import '../styles/header.css';

function Header({result}) {

  function grabRating(){
   let ratingArr = result.tmdbRating.toString().split('');

   ratingArr.splice(1,0,'.')

    return ratingArr.join('')
  }


  return (
    <div id="header-container">
      <div id="header-title-div">
        Results for <span id="header-title">{result.title}</span>
      </div>

      <div id="header-rating-div">

        <div id="rating-title">
          IMDB Rating:
        </div>

        <div id="rating-result">
          <span id="rating-num">{grabRating()}</span>/ 10
        </div>


      </div>

    </div>
  );
}

export default Header;
