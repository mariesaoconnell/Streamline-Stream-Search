import React from 'react';

function Result({search}) {

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
		'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com',
	},
};

const url = `https://streaming-availability.p.rapidapi.com/v2/search/title?title=${search}&country=us&type=all&output_language=en`;

fetch(url, options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

}
export default Result;
