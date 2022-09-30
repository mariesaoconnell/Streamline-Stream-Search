import './app-style.css';
import Form from './components/Form';
import Result from './components/Result';
import Home from './components/Home'
import About from './components/About';

import { useState, useEffect } from 'react';
import {Routes, Route, Link} from 'react-router-dom';


function App() {

  // STATE
  const [search, setSearch] = useState('');

    const options = {
			method: 'GET',
			headers: {
				'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
				'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com',
			},
		};

		useEffect(() => {
			// fetchResults();
		}, []);

		function fetchResults() {
			// URL W SEARCH
			// const url = `https://streaming-availability.p.rapidapi.com/v2/search/title?title=${newSearch}&country=us&type=all&output_language=en`;

			// // FETCH
			// fetch(url, options)
			// 	.then((response) => response.json())
			// 	.then((response) => {
      //     console.log(response)
      //     setResult([...response])
      //   })
			// 	.catch((err) => console.error(err));
		}

		// FORM STATE
		const [newSearch, setNewSearch] = useState('');

    // RESULT STATE
    const [result, setResult] = useState('');

		// HANDLE SUBMIT FUNCTION
		function handleSubmit(event) {
			event.preventDefault();

			//CHANGE APP STATE
			setSearch([...search, newSearch]);
			setNewSearch('');

			// fetchResults();
		}

		// HANDLE CHANGE FUNCTION
		function handleChange(event) {
			// set search to string input
			setNewSearch(event.target.value);
		}


  return (
		<div className='app-main-div'>
			<nav>
				<h1>logo</h1>
				<ul>
					<Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
				</ul>
			</nav>

			<main>
				<Form
					handleChange={handleChange}
					handleSubmit={handleSubmit}
					newSearch={newSearch}
				/>

				<Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/results" element={<Result/>}/>
				</Routes>
			</main>
		</div>
	);
}

export default App;
