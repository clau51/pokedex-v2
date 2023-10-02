import './Paging.css';
import Pagination from 'react-bootstrap/Pagination';

import { useState } from 'react';

function Paging({ nextUrl, prevUrl, firstUrl, handlePaging }) {
	//pass the nextUrl as a url={nextUrl} to PokemonsInfo

	const [count, setCount] = useState(1);
	const [activePage, setActivePage] = useState(1);

	const handleNextClick = () => {
		nextPage();
		setActivePage(prev => {
			return prev + 1;
		});
		handleNextPageCount();
	};

	const handlePrevClick = () => {
		prevPage();
		setActivePage(prev => {
			return prev - 1;
		});
		handlePrevPageCount();
	};

	const handleFirstClick = () => {
		handlePaging(firstUrl);
		setActivePage(page => {
			return page - count + 1;
		});
		setCount(page => {
			return page - count + 1;
		});
	};

	const nextPage = () => {
		handlePaging(nextUrl);
	};

	const prevPage = () => {
		handlePaging(prevUrl);
	};

	const handleNextPageCount = () => {
		setCount(prevCount => {
			return prevCount + 1;
		});
	};

	const handlePrevPageCount = () => {
		setCount(prevCount => {
			return prevCount - 1;
		});
	};

	return (
		<Pagination>
			{count === 1 ? (
				<Pagination.First disabled />
			) : (
				<Pagination.First onClick={handleFirstClick} />
			)}
			{prevUrl ? (
				<Pagination.Prev onClick={handlePrevClick} />
			) : (
				<Pagination.Prev disabled />
			)}
			<Pagination.Item active={activePage === 1}>{count}</Pagination.Item>
			{nextUrl ? (
				<Pagination.Next onClick={handleNextClick} />
			) : (
				<Pagination.Next disabled />
			)}
			<Pagination.Last />
		</Pagination>
	);
}

export default Paging;
