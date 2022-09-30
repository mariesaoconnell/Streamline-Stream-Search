import './app-style.css';
import Form from './components/Form';
import { useState } from 'react';

function App() {

  // STATE
  const [search, setSearch] = useState('');

  return (
		<div className='app-main-div'>
			<nav>
				<h1>logo</h1>
        <ul>
          <li>Home</li>
          <li>About</li>
        </ul>
			</nav>

      <main>
        <Form search={search} setSearch={setSearch}/>
      </main>
		</div>
	);
}

export default App;
