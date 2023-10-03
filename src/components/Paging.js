import './Paging.css';
import Pagination from 'react-bootstrap/Pagination';

import { useState } from 'react';

function Paging({ nextUrl, prevUrl, firstUrl, handlePaging }) {
	const [pageCount, setPageCount] = useState(1);

	const handleNextButton = () => {
		handlePaging(nextUrl);
		setPageCount(prevCount => {
			return prevCount + 1;
		});
	};

	const handlePrevButton = () => {
		handlePaging(prevUrl);
		setPageCount(prevCount => {
			return prevCount - 1;
		});
	};

	const handleFirstButton = () => {
		handlePaging(firstUrl);
		setPageCount(page => {
			return page - pageCount + 1;
		});
	};

	return (
		<Pagination>
			{pageCount === 1 ? (
				<Pagination.First disabled />
			) : (
				<Pagination.First onClick={handleFirstButton} />
			)}
			{prevUrl ? (
				<Pagination.Prev onClick={handlePrevButton} />
			) : (
				<Pagination.Prev disabled />
			)}
			<Pagination.Item active={pageCount === 1}>{pageCount}</Pagination.Item>
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
