import React from 'react';

function Card({lastSearched}) {

  let urlEl = lastSearched.backdropURLs.original;

  return (
		<li>
			<div id='card-div'>
				<div id='title'>
					<p>{lastSearched.title}</p>
				</div>
				<div id="ls-img-div">
					<div id='ls-img-div-center'>
						<img alt='Poster' id='ls-poster' src={urlEl} />
					</div>
				</div>
			</div>
		</li>
	);
}

export default Card;
