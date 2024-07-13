import React, { useEffect, useState } from 'react';
import readAllProducts from '../services/product-operations';
import { Card, Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await readAllProducts();
        setPokemon(data);
      } catch (err) {
        setError(err);
      }
    }

    fetchData();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    showProducts(searchQuery);
  };

  const showProducts = (searchQuery = "") => {
    const filteredProducts = pokemon.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setPokemon(filteredProducts);
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Container className="my-4">
      <h1 className="text-center mb-4">Pokemon List</h1>
      <Form onSubmit={handleSearch} className="mb-4">
        <Form.Group controlId="search-input">
          <Form.Control
            type="text"
            placeholder="Search Pokemon"
            value={searchQuery}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" id="search-button">
          Search
        </Button>
      </Form>
      <Row id="card-container">
        {pokemon.map((poke, index) => (
          <Col key={index} md={3} className="mb-4">
            <Card className="text-bg-dark m-1">
              <Link to={`/pokemon/${poke.url.split('/')[6]}`} className="text-decoration-none text-light">
                <Card.Img
                  variant="top"
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke.url.split('/')[6]}.png`}
                  alt={poke.name}
                />
                <Card.Body>
                  <Card.Title className="text-center">{poke.name}</Card.Title>
                </Card.Body>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default PokemonList;
