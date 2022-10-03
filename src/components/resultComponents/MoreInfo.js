import React from 'react';
import '../styles/moreInfo.css'

function MoreInfo({result}) {

  return (
		<div id="more-info-div">

				<p>
					Type:
            <span id='more-info-result'> {result.type}</span>
				</p>
				<p>
					Status:
            <span id='more-info-result'> {result.status.statusText}</span>
				</p>
				<p>
					Seasons:
            <span id='more-info-result'>  {result.seasonCount}</span> |
					Episode Count:
					  <span id='more-info-result'>{result.episodeCount}</span>
				</p>
				<p>
					First Aired:
            <span id='more-info-result'> {result.firstAirYear}</span> |
					Last Aired:
					  <span id='more-info-result'> {result.lastAirYear}</span>
				</p>

		</div>
	);
}

export default MoreInfo;
