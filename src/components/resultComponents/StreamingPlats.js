import React from 'react';
import '../styles/streamingPlat.css';
import { useEffect } from 'react';

function StreamingPlats({ result }) {
	const { streamingInfo } = result;
	const { us } = streamingInfo;

	useEffect(() => {
		fetchPlats();
	});

	function fetchPlats() {
		let platLis = document.querySelector('#streaming-plat-list');

		if (platLis === undefined) {
			return;
		} else {
			platLis.innerHTML = '';

			if (result.streamingInfo.us === undefined) {
				let newPlat = document.createElement('li');
				let noPlats = document.createElement('li');
				noPlats.innerText = 'No Results Found';
				platLis.appendChild(newPlat);
			} else {
				for (let key in us) {
					let newPlat = document.createElement('li');
					let platAnchor = document.createElement('a');
					platAnchor.target = '_blank';
					platAnchor.href = `${us[key][0].watchLink}`;
					platAnchor.innerText = key;

					newPlat.appendChild(platAnchor);
					platLis.appendChild(newPlat);
				}
			}
		}
	}

	return (
		<div id='streaming-plat-div'>
			<h3>Streaming Platforms</h3>
			<ul id='streaming-plat-list'></ul>
		</div>
	);
}

export default StreamingPlats;
