import './Paging.css';
import Pagination from 'react-bootstrap/Pagination';

import { useState } from 'react';

function Paging({ nextUrl, prevUrl, firstUrl, handlePaging }) {
	const [count, setCount] = useState(1);
	const [activePage, setActivePage] = useState(1);

	const handleNextButton = () => {
		handlePaging(nextUrl);
		handleNextPageCount();
	};

	const handlePrevButton = () => {
		handlePaging(prevUrl);
		handlePrevPageCount();
	};

	const handleFirstButton = () => {
		handlePaging(firstUrl);
		setCount(page => {
			return page - count + 1;
		});
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
				<Pagination.First onClick={handleFirstButton} />
			)}
			{prevUrl ? (
				<Pagination.Prev onClick={handlePrevButton} />
			) : (
				<Pagination.Prev disabled />
			)}
			<Pagination.Item active={count === 1}>{count}</Pagination.Item>
			{nextUrl ? (
				<Pagination.Next onClick={handleNextButton} />
			) : (
				<Pagination.Next disabled />
			)}
			<Pagination.Last />
		</Pagination>
	);
}

export default Paging;
