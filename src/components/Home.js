import './styles/home.css'
import CardList from './homeComponent/CardList';
import HowTo from './resultComponents/HowTo';

function Home({lastSearch}) {
  return (
		<div>
			<HowTo />
			<div id='prev-search-div'>
				<h2>
					<em>Previously Searched</em>
				</h2>
			</div>
			<div id='last-search-div'>
				<CardList lastSearch={lastSearch} />
			</div>
		</div>
	);
}


  export default Home;
