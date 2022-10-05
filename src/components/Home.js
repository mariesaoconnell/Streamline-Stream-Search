import './styles/home.css'
import Card from './homeComponent/Card';
import CardList from './homeComponent/CardList';


function Home({lastSearch}) {
console.log(lastSearch)
  return (
		<div>
			<div>
				<h2>
					<em>Previously Searched</em></h2>
			</div>
			<div id='last-search-div'>
				<CardList lastSearch={lastSearch} />
			</div>
		</div>
	);
}


  export default Home;
