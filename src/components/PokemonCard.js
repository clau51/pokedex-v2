import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function PokemonCard({ pokemonInfo }) {
	let pokemonTypes = pokemonInfo.types.map(type => {
		return <li id={`type-${type.type.name}`}>{type.type.name}</li>;
	});

	return (
		<Card style={{ width: '18rem' }}>
			<Card.Img
				className="pokemon-img"
				variant="top"
				src={pokemonInfo.sprites.other.dream_world.front_default}
			/>
			<Card.Body className="pokemon-body">
				<Card.Title>{`#${pokemonInfo.id}: ${pokemonInfo.name}`}</Card.Title>
				<ul>{pokemonTypes}</ul>
				<Button variant="primary">Go somewhere</Button>
			</Card.Body>
		</Card>
	);
}

export default PokemonCard;
