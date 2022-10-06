import './styles/home.css'
import CardList from './homeComponent/CardList';


function Home({lastSearch}) {
  return (
		<div>
			<div id="prev-search-div">
				<h2><em>Previously Searched</em></h2>
			</div>
			<div id='last-search-div'>
				<CardList lastSearch={lastSearch} />
			</div>
		</div>
	);
}


  export default Home;
