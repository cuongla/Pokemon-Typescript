/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {RootStore} from './Store';
import {GetPokemon} from './actions/PokemonActions';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const [pokemonName, setPokemonName] = useState("");
  const pokemonState = useSelector((state: RootStore) => state.pokemon);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setPokemonName(event.target.value);

  const handleSubmit = () => dispatch(GetPokemon(pokemonName));

  return (
    <div className="App">
      <input 
        type="text" 
        placeholder="Search Pokemon"
        onChange={handleChange}/>
      <button onClick={handleSubmit}>Search</button>
      {pokemonState.pokemon ? (
        <div>
          <img src={pokemonState.pokemon.sprites.front_default} alt="pokemon photo"/>
          {pokemonState.pokemon.abilities.map(ability => {
            return <p>{ability.ability.name}</p>
          })}
        </div>
      ) : <p>Pokemon is not found!!!</p>}
    </div>
  );
}

export default App;
