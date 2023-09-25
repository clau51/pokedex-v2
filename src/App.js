import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

import PokemonsInfo from './components/PokemonsInfo';
import Header from './components/Header';
import Searchbar from './components/Searchbar';
import Paging from './components/Paging';

function App() {
	const firstUrl = 'https://pokeapi.co/api/v2/pokemon/';
	const [url, setUrl] = useState(firstUrl);
	const [nextUrl, setNextUrl] = useState(null);
	const [prevUrl, setPrevUrl] = useState(null);

	const handlePaging = newUrl => {
		setUrl(newUrl);
	};

	return (
		<div>
			<Header />
			<Searchbar />
			<PokemonsInfo url={url} setNextUrl={setNextUrl} setPrevUrl={setPrevUrl} />
			<Paging
				nextUrl={nextUrl}
				prevUrl={prevUrl}
				firstUrl={firstUrl}
				handlePaging={handlePaging}
			/>
		</div>
	);
}

export default App;
