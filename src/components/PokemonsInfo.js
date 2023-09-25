import { useState, useEffect } from 'react';
import load from './pokemons';
import PokemonCard from './PokemonCard';
import './PokemonCard.css';

function PokemonsInfo({ url, setNextUrl, setPrevUrl }) {
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

	return (
		<div className="pokemon-cards">
			{pokemonsInfo.map(pokemonInfo => (
				<PokemonCard key={pokemonInfo.id} pokemonInfo={pokemonInfo} />
			))}
		</div>
	);
}

export default PokemonsInfo;
