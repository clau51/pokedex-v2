import './Searchbar.css';
import { useState } from 'react';

function Searchbar({ firstUrl, setFoundPokemon }) {
	const [searchQuery, setSearchQuery] = useState('');

	function findPokemon() {
		if (searchQuery !== '') {
			return fetch(`${firstUrl}${searchQuery.toLowerCase()}`)
				.then(res => res.json())
				.then(data => {
					if (data) {
						setFoundPokemon(data);
					} else {
						setFoundPokemon(null);
						// setErrorMessage(
						// 	`Error! ${searchQuery} does not exist in our database`
						// );
					}
				})
				.catch(e => {
					console.log(e);
				});
		}
	}

	const handleChange = e => {
		setSearchQuery(e.target.value);
	};

	const handleSubmit = e => {
		e.preventDefault();
		findPokemon();
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
				<button className="button">Clear</button>
			</div>
		</form>
	);
}

export default Searchbar;
