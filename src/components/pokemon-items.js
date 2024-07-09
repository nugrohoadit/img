import React from 'react';

const PokemonItems = ({ pokemon }) => {
  return (
    <div className="pokemon-item">
      <h3>{pokemon.pokemon}</h3>
      <p>{pokemon.type}</p>
      <p>{pokemon.abilities}</p>
      <p>{pokemon.hitpoints}</p>
      <p>{pokemon.location}</p>
      <img src={pokemon.image_url} />
    </div>
  );
};

export default PokemonItems;
