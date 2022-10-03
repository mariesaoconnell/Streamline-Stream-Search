import React from 'react';
import '../styles/moreInfo.css'

function MoreInfo({result}) {

  return (
		<div id="more-info-div">

				<p>
					Type:
            <span id='more-info-result'> { result.type ? `${result.type}` : "Unavailable" }</span>
				</p>
				<p>
					Status:
            <span id='more-info-result'> {result.type === 'series' ? `${result.status.statusText}` : "Unavailable"}</span>
				</p>
				<p>
					Seasons:
            <span id='more-info-result'>  {result.type === 'series' ? `${result.seasonCount}` : "Unavailable"}</span> |
					Episode Count:
					  <span id='more-info-result'>{result.type === 'series' ? `${result.episodeCount}`: "Unavailable"}</span>
				</p>
				<p>
					First Aired:
            <span id='more-info-result'> {result.firstAirYear ? `${result.firstAirYear}` : "Unavailable"}</span> |
					Last Aired:
					  <span id='more-info-result'> {result.lastAirYear ? `${result.lastAirYear}` : "Unavailable"}</span>
				</p>

		</div>
	);
}

export default MoreInfo;
