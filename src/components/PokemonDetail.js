import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Card } from 'react-bootstrap';

function PokemonDetail() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPokemon() {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await response.json();
        setPokemon(data);
      } catch (err) {
        setError(err);
      }
    }

    fetchPokemon();
  }, [id]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!pokemon) {
    return <div>Loading...</div>;
  }

  return (
    <Container className="my-4">
      <Card className="text-bg-dark m-1">
        <Card.Img
          variant="top"
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
        />
        <Card.Body>
          <Card.Title className="text-center">{pokemon.name}</Card.Title>
          <Card.Text>
            Height: {pokemon.height} decimetres
            <br />
            Weight: {pokemon.weight} hectograms
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default PokemonDetail;
