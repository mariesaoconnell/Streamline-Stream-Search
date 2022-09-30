import {useState} from 'react';
import './styles/form.css'


function Form({search, setSearch}) {

  // FORM STATE
  const [newSearch, setNewSearch] = useState('');


  // HANDLE SUBMIT FUNCTION
  function handleSubmit(event){
		event.preventDefault();
		console.log('test');

		//CHANGE APP STATE
		setSearch([...search, newSearch]);
		setNewSearch('');
	}

  // HANDLE CHANGE FUNCTION
  function handleChange(event){
  // set search to string input
    setNewSearch(event.target.value);
  }

  return (
		<div id='form-main-div'>
			<h1 id='form-headline'>Streamline</h1>

			<form onSubmit={handleSubmit}>
				<input onChange={handleChange} type='text' value={newSearch}></input>
				<button type="submit">Search</button>
			</form>
		</div>
	);
}

export default Form;
