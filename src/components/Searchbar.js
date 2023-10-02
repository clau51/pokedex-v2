import './Searchbar.css';
import { useState } from 'react';
import PokemonCard from './PokemonCard';

function Searchbar({ firstUrl, setFoundPokemon }) {
	const [searchQuery, setSearchQuery] = useState('');

	function findPokemon() {
		return fetch(`${firstUrl}${searchQuery.toLowerCase()}`)
			.then(res => res.json())
			.then(data => {
				data ? setFoundPokemon(data) : setFoundPokemon(null);
				console.log(data);
			})
			.catch(e => {
				console.log(e);
			});
	}

	const handleChange = e => {
		setSearchQuery(e.target.value);
	};

	const handleSubmit = e => {
		e.preventDefault();
		findPokemon().then(console.log('clicked submit'));
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
		</form>
	);
}

export default Searchbar;
