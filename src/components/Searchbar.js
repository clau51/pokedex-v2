import './Searchbar.css';
import { useState } from 'react';

function Searchbar() {
	const [searchQuery, setSearchQuery] = useState('');

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
							oneChange={e => setSearchQuery(e.target.value)}
						/>
					</div>
				</label>
				<button className="button">Submit</button>
			</div>
		</form>
	);
}

export default Searchbar;
