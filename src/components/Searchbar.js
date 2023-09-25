import './Searchbar.css';

function Searchbar() {
	return (
		<form>
			<div className="searchbar">
				<label className="label">
					<div>Search Pokemon:</div>
					<div>
						<input
							id="search-bar"
							type="text"
							name="name" //value
						/>
					</div>
				</label>
				<button className="button">Submit</button>
			</div>
		</form>
	);
}

export default Searchbar;
