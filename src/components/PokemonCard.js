import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import './PokemonCard.css';

function PokemonCard({ pokemonInfo }) {
	const [flip, setFlip] = useState(false);

	let pokemonTypes = pokemonInfo.types.map(type => {
		return <p id={`type-${type.type.name}`}>{type.type.name}</p>;
	});

	let flipAction = () => {
		setFlip(!flip);
	};

	return (
		<Card
			style={{ width: '18rem' }}
			className={`card${flip ? '-flip' : ''}`}
			onClick={flipAction}
		>
			<div className="front">
				<Card.Img
					className="pokemon-img"
					variant="top"
					src={pokemonInfo.sprites.other.dream_world.front_default}
				/>
				<Card.Body className="pokemon-body">
					<Card.Title className="pokemon-name">{`#${pokemonInfo.id}: ${pokemonInfo.name}`}</Card.Title>
					<div className="pokemon-types">{pokemonTypes}</div>
					{/* <Button variant="primary">Learn More</Button> */}
				</Card.Body>
			</div>

			<div className="back">
				<p>Hello world!</p>
			</div>
		</Card>
	);
}

export default PokemonCard;
