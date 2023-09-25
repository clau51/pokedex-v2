function load(url) {
	return fetch(url)
		.then(res => res.json())
		.catch(() => {
			console.log('error with api');
		});
}

export default load;
