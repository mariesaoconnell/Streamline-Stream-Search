import {useState, useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom'
import './styles/form.css'


function Form({search, handleSubmit, handleChange}) {
  const navigate = useNavigate();
  function goToResults(){
    navigate('/results');
  }

  return (
		<div id='form-main-div'>
			<h1 id='form-headline'>Streamline</h1>
			<img
				src='https://i.ibb.co/bH1Lm2w/Untitled-design-11.png'
				alt='paperplane'
				id='under-name'
			/>
			<form onSubmit={handleSubmit}>
				<input
					placeholder='Search'
					type='text'
					name='searchString'
					onChange={handleChange}
					value={search}
				/>

				<button type='submit'>Search</button>
			</form>
		</div>
	);
}

export default Form;
