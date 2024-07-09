import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonItems from '../components/pokemon-items';

const PokemonList = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await axios.get('https://dummyapi.online/api/pokemon', {
        });
        console.log('Data respon > ', response.data);
        setPokemon(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching the movie', error);
        setLoading(false);
      }
    };

    fetchPokemon();
  }, []);

  if (loading) {
    return <p>Loading Pokemon...</p>;
  }

  return (
    <div className="pokemon-list">
      {pokemon.map((pokemons, index) => (
        <PokemonItems key={index} pokemon={pokemons} />
      ))}
    </div>
  );
};

export default PokemonList;
