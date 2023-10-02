import './Searchbar.css';
import { useState } from 'react';
import PokemonCard from './PokemonCard';

function Searchbar({ pokemonsInfo, setFoundPokemon }) {
	const [searchQuery, setSearchQuery] = useState('');

	const findPokemon = () => {
		const found = pokemonsInfo.find(pokemon =>
			pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
		);
		found ? setFoundPokemon(found) : setFoundPokemon(null);

		console.log(found);
	};

	const handleChange = e => {
		setSearchQuery(e.target.value);
	};

	const handleSubmit = e => {
		e.preventDefault();
		findPokemon();
		console.log('clicked submit');
	};

	return (
		<form>
			<div className="searchbar">
				<label className="label">
					<div>Search Pokemon:</div>
					<div>
						<input
							id="search-bar"
							type="text"
							name="name"
							value={searchQuery}
							onChange={handleChange}
						/>
					</div>
				</label>
				<button className="button" onClick={handleSubmit}>
					Submit
				</button>
			</div>
			{/* {foundPokemon ? <PokemonCard pokemonInfo={foundPokemon} /> : <p>lol</p>} */}
		</form>
	);
}

export default Searchbar;
