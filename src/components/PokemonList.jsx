import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PokemonList = () => {
  const [pokemones, setPokemones] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((response) => response.json())
      .then((data) => setPokemones(data.results));
  }, []);

  const handleSelectChange = (e) => {
    navigate(`/pokemones/${e.target.value}`);
  };

  return (
    <div className="container pokemon-list">
      <h1>Selecciona un pokemon</h1>
      <select onChange={handleSelectChange}>
        <option value="">Seleccione un Pokemon</option>
        {pokemones.map((pokemon) => (
          <option key={pokemon.name} value={pokemon.name}>
            {pokemon.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default PokemonList;
