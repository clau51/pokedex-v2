import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';

function PokemonCard({ pokemonInfo }) {
	const [flip, setFlip] = useState(false);

	let pokemonTypes = pokemonInfo.types.map(type => {
		return <li id={`type-${type.type.name}`}>{type.type.name}</li>;
	});

	let flipAction = () => {
		setFlip(!flip);
	};

	return (
		<Card
			style={{ width: '18rem' }}
			className={`card ${flip ? 'card-flip' : ''}`}
			onClick={flipAction}
		>
			<div className="front">
				<Card.Img
					className="pokemon-img"
					variant="top"
					src={pokemonInfo.sprites.other.dream_world.front_default}
				/>
				<Card.Body className="pokemon-body">
					<Card.Title>{`#${pokemonInfo.id}: ${pokemonInfo.name}`}</Card.Title>
					<ul>{pokemonTypes}</ul>
					<Button variant="primary">Learn More</Button>
				</Card.Body>
			</div>

			<div className="back">
				<p>Back of card stuff</p>
			</div>
		</Card>
	);
}

export default PokemonCard;

{
	/* <div className={`card ${flip ? 'flip' : ''}`} onClick={flipAction}>
<div className="front">
	<Card style={{ width: '18rem' }}>
		<Card.Img
			className="pokemon-img"
			variant="top"
			src={pokemonInfo.sprites.other.dream_world.front_default}
		/>
		<Card.Body className="pokemon-body">
			<Card.Title>{`#${pokemonInfo.id}: ${pokemonInfo.name}`}</Card.Title>
			<ul>{pokemonTypes}</ul>
			<Button variant="primary">Learn More</Button>
		</Card.Body>
	</Card>
</div>
<div className="back">
	<Card style={{ width: '18rem' }} onClick={flipAction}>
		{' '}
	</Card>
</div>
</div> */
}
