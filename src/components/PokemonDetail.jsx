import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const PokemonDetail = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((response) => response.json())
      .then((data) => setPokemon(data));
  }, [name]);

  if (!pokemon) return <div>Loading...</div>;

  return (
    <div className="container pokemon-detail">
      <h1>{pokemon.name}</h1>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <ul>
        <li>HP: {pokemon.stats[0].base_stat}</li>
        <li>Attack: {pokemon.stats[1].base_stat}</li>
        <li>Defense: {pokemon.stats[2].base_stat}</li>
        <li>Special Attack: {pokemon.stats[3].base_stat}</li>
        <li>Special Defense: {pokemon.stats[4].base_stat}</li>
        <li>Speed: {pokemon.stats[5].base_stat}</li>
      </ul>
    </div>
  );
};

export default PokemonDetail;
