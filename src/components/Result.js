import './styles/result.css';

import Images from './resultComponents/Images';
import Overview from './resultComponents/Overview';
import StreamingPlats from './resultComponents/StreamingPlats';
import Header from './resultComponents/Header';
import MoreInfo from './resultComponents/MoreInfo';



function Result({ lastSearch, result, search}) {


	function toggleEl() {
		var coll = document.getElementsByClassName('collapsible');
		var i;

		for (i = 0; i < coll.length; i++) {
			coll[i].addEventListener('click', function () {
				this.classList.toggle('active');
				var content = this.nextElementSibling;
				if (content.style.maxHeight) {
					content.style.maxHeight = null;
				} else {
					content.style.maxHeight = content.scrollHeight + 'px';
				}
			});
		}
	}

	function getCast() {
		let parentList = document.querySelector('#cast-list');
		let castArr = result.cast;

		if(parentList.firstChild) parentList.innerHTML = '';

			for (let i = 0; i < castArr.length; i++) {
				let listEl = document.createElement('li');
				listEl.innerText = castArr[i];
				parentList.appendChild(listEl);
		}
	}

	return (
		<div id='result-container' onLoadCapture={toggleEl}>
			<div id='main-result-div'>
				<Header result={result} />
				<Images result={result} />

				<button className='collapsible' >
					Overview
				</button>
				<div className='content'>
					<Overview result={result} />
				</div>

				<button className='collapsible' onClickCapture={getCast}>
					Cast
				</button>
				<div className='content' id='cast-div'>
					<ul id='cast-list'></ul>
				</div>

				<button className='collapsible'>
					More Info
				</button>
				<div className='content'>
					<MoreInfo result={result} />
				</div>

				<div>
					<StreamingPlats result={result} lastSearch={lastSearch} search={search}/>
				</div>
			</div>
		</div>
	);
}

export default Result;
