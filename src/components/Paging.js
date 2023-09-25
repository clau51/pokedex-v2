import './Paging.css';
import Pagination from 'react-bootstrap/Pagination';
import PokemonsInfo from './PokemonsInfo';

function Paging({ nextUrl, handleNextPage }) {
	//pass the nextUrl as a url={nextUrl} to PokemonsInfo

	const nextPage = () => {
		handleNextPage(nextUrl);
	};

	return (
		<Pagination>
			<Pagination.First />
			<Pagination.Prev />
			<Pagination.Item>{1}</Pagination.Item>
			<Pagination.Ellipsis />

			<Pagination.Item>{10}</Pagination.Item>
			<Pagination.Item>{11}</Pagination.Item>
			<Pagination.Item active>{12}</Pagination.Item>
			<Pagination.Item>{13}</Pagination.Item>
			<Pagination.Item disabled>{14}</Pagination.Item>

			<Pagination.Ellipsis />
			<Pagination.Item>{20}</Pagination.Item>
			<Pagination.Next onClick={nextPage} />
			<Pagination.Last />
		</Pagination>
	);
}

export default Paging;
