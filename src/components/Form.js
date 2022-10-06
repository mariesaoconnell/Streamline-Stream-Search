
import './styles/form.css'
import Header from './formComponent/Header';

function Form({search, handleSubmit, handleChange}) {

  return (
		<div id='form-main-div'>

			<Header />

			<form onSubmit={handleSubmit}>
				<input
					placeholder='Search Title'
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
