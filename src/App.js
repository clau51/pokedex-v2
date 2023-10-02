import { useState, useEffect } from 'react';

import PokemonsInfo from './components/PokemonsInfo';
import Header from './components/Header';
import Searchbar from './components/Searchbar';
import Paging from './components/Paging';
import load from './components/pokemons';
import PokemonCard from './components/PokemonCard';

function App() {
	const firstUrl = 'https://pokeapi.co/api/v2/pokemon/';
	const [url, setUrl] = useState(firstUrl);
	const [nextUrl, setNextUrl] = useState(null);
	const [prevUrl, setPrevUrl] = useState(null);
	const [pokemons, setPokemons] = useState(null);
	const [pokemonsInfo, setPokemonsInfo] = useState(null);

	useEffect(() => {
		console.log(url);
		load(url)
			.then(data => {
				setPokemons(data.results);
				setNextUrl(data.next);
				setPrevUrl(data.previous);
				return data.results;
			})
			.then(data => {
				const getPokemonInfo = data.map(pokemonInfo => {
					return fetch(pokemonInfo.url)
						.then(res => res.json())
						.catch(() => console.log('error'));
				});

				Promise.all(getPokemonInfo)
					.then(data => {
						setPokemonsInfo(data);
					})
					.catch(() => console.log('error'));
			});
	}, [url, setNextUrl, setPrevUrl]);

	if (!pokemons || !pokemonsInfo) {
		return <p>Yet to be rendered......</p>;
	}

	const handlePaging = newUrl => {
		setUrl(newUrl);
	};

	return (
		<div>
			<Header />
			<Searchbar />
			{/* <PokemonsInfo url={url} setNextUrl={setNextUrl} setPrevUrl={setPrevUrl} /> */}
			<div className="pokemon-cards">
				{pokemonsInfo.map(pokemonInfo => (
					<PokemonCard key={pokemonInfo.id} pokemonInfo={pokemonInfo} />
				))}
			</div>
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
