import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import './PokemonCard.css';

function PokemonCard({ pokemonInfo }) {
	const [flip, setFlip] = useState(false);

	let pokemonTypes = pokemonInfo.types.map(type => {
		return <p id={`type-${type.type.name}`}>{type.type.name}</p>;
	});

	let pokemonAbilities = pokemonInfo.abilities.map(ability => {
		return ability.ability.name;
	});

	console.log(pokemonAbilities);

	let flipAction = () => {
		setFlip(!flip);
	};

	let handleCardClick = e => {
		if (e.target.tagName === 'BUTTON') {
			console.log('button Clicked');
		} else {
			flipAction();
		}
	};

	function convertHectogramsToLbs(hectogram) {
		return (hectogram * 0.2204622622).toFixed(2);
	}

	function convertDecimetersToFeet(decimeters) {
		return (decimeters * 0.3280839895).toFixed(2);
	}

	return (
		<Card
			style={{ width: '18rem' }}
			className={`card${flip ? '-flip' : ''}`}
			onClick={handleCardClick}
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
				</Card.Body>
			</div>

			<div className="back">
				<div className="pokemon-id">
					Pokémon ID No. {String(pokemonInfo.id).padStart(4, '0')}
				</div>
				<div className="pokemon-weight">
					Weight: {convertHectogramsToLbs(pokemonInfo.weight)} lbs
				</div>
				<div className="pokemon-height">
					Height: {convertDecimetersToFeet(pokemonInfo.height)} feet
				</div>
				<p>Abilities: {pokemonAbilities.join(', ')}</p>

				<Button variant="primary">Click to see evolutions</Button>
			</div>
		</Card>
	);
}

export default PokemonCard;
