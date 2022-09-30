import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './styles/form.css'


function Form({newSearch, handleChange, handleSubmit}) {

  return (
		<div id='form-main-div'>
			<h1 id='form-headline'>Streamline</h1>

			<form onSubmit={handleSubmit}>
				<input onChange={handleChange} type='text' value={newSearch} />

				<Link to="/results">
					<button type='submit'>Search</button>
				</Link>
			</form>
		</div>
	);
}

export default Form;
