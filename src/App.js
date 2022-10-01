import './app-style.css';
import Form from './components/Form';
import Result from './components/Result';
import Home from './components/Home'
import About from './components/About';

import { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';


function App() {

  const initialState = '';

  // APP.JS STATE FOR INPUT
  const [search, setSearch] = useState(initialState);

  // RESULTS STATE
  const [result, setResult] = useState(initialState);

  // // FORM STATE
  // const [newSearch, setNewSearch] = useState('');

  // LAST SEARCH
  const [lastSearch, setLastSearch] = useState([]);
  const navigate = useNavigate();

    const options = {
			method: 'GET',
			headers: {
				'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
				'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com',
			},
		};

		// useEffect(() => {
		// 	fetchResults();
		// }, []);

		function fetchResults() {
			//URL W SEARCH
			const url = `https://streaming-availability.p.rapidapi.com/v2/search/title?title=${search}&country=us&type=all&output_language=en`;

			// FETCH
			fetch(url, options)
				.then((response) => response.json())
				.then((response) => {
          setResult((response.result)[0])
          setLastSearch([...lastSearch, search])
          navigate('/results');
          setSearch(initialState)
        })
				.catch((err) => {
          console.error(`Error: ${err}`);
        });
		}


		// HANDLE SUBMIT FUNCTION
		function handleSubmit(event) {
			event.preventDefault();
			fetchResults();
		}

		// HANDLE CHANGE FUNCTION
		function handleChange(event) {
			// set search to string input
			setSearch(event.target.value);
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
					search={search}
          initialState={initialState}
				/>

				<Routes>
          <Route path="/" element={<Home lastSearch={lastSearch} setLastSearch={setLastSearch}/>} />
          <Route path="/about" element={<About />} />
          <Route path="/results" element={<Result lastSearch={lastSearch} result={result} />}/>

				</Routes>
			</main>
		</div>
	);
}

export default App;
