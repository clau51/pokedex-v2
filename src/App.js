import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

import PokemonsInfo from './components/PokemonsInfo';
import Header from './components/Header';
import Searchbar from './components/Searchbar';
import Paging from './components/Paging';

function App() {
	const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/');
	const [nextUrl, setNextUrl] = useState(null);
	const [prevUrl, setPrevUrl] = useState(null);

	const handleNextPage = newUrl => {
		setUrl(newUrl);
	};

	return (
		<div>
			<Header />
			<Searchbar />
			<PokemonsInfo url={url} setNextUrl={setNextUrl} />
			<Paging nextUrl={nextUrl} handleNextPage={handleNextPage} />
		</div>
	);
}

export default App;
