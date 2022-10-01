import React from 'react';

import Images from './resultComponents/Images';
import Overview from './resultComponents/Overview';
import StreamingPlats from './resultComponents/StreamingPlats';
import Header from './resultComponents/Header';

function Result({result}) {

return (
	<>
		<div id='main-result-div'>
			<Header result={result} />
			<Images result={result} />
			<Overview result={result} />
			<StreamingPlats result={result} />
		</div>
	</>
);
}
export default Result;
