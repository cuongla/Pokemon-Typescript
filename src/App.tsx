/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from './Store';
import { GetPokemon } from './actions/PokemonActions';
import './Styles.scss';

function App() {
  const dispatch = useDispatch();
  const [pokemonName, setPokemonName] = useState("");
  const pokemonState = useSelector((state: RootStore) => state.pokemon);
  const pokemonInfo = pokemonState.pokemon;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setPokemonName(event.target.value);

  const handleSubmit = () => dispatch(GetPokemon(pokemonName));

  // capitalize first letter
  const capitalize = (string: string) => {
    if (typeof string !== 'string') return;
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div className="App">
      <h1>Pokemon Finder</h1>
      <input
        type="text"
        placeholder="Search Pokemon"
        onChange={handleChange} />
      <button onClick={handleSubmit}>Search</button>
      <div className="pokemon-info">
        {pokemonInfo ? (
          <div>
            {/* Pokemon Image */}
            <div className="pokemon-img">
              <img
                src={pokemonInfo.sprites.front_default} alt="pokemon photo"
                className="pokemon-img__display"
              />
            </div>
            <div className="pokemon-img">
              <img
                src={pokemonInfo.sprites.back_default} alt="pokemon photo"
                className="pokemon-img__display"
              />
            </div>
            <hr />
            <div className="pokemon-details">
              <div className="pokemon-details__box">
                <p>
                  <span className="text-bold">Order Id:</span>
                  {pokemonInfo.id}
                </p>
                <p>
                  <span className="text-bold">
                    Name:
                  </span>
                  {capitalize(pokemonInfo.name)}</p>
                <p>
                  <span className="text-bold">
                    Weight:
                  </span>
                  {pokemonInfo.weight}
                </p>
                <p>
                  <span className="text-bold">
                    Height:
                  </span>
                  {pokemonInfo.height}
                </p>
                <p>
                  <span className="text-bold">
                    Types:
                  </span>
                  {pokemonInfo.types.map(type => {
                    return <span>{capitalize(type.type.name)}</span>
                  })}
                </p>
                <p>
                  <span className="text-bold">
                    Abilities:
                  </span>
                  {pokemonInfo.abilities.map((ability, index) => {
                    return <span key={index}>{(index ? ' - ' : '') + capitalize(ability.ability.name)}</span>
                  })}
                </p>
              </div>
              <div className="pokemon-details__box">
                {pokemonInfo.stats.map(stat => {
                  return (
                    <p>
                      <span className="text-bold">
                        {capitalize(stat.stat.name)}:
                      </span>
                       {stat.base_stat}
                    </p>
                  )
                })}
              </div>
            </div>
            <div className="pokemon-moves">
                <h3 className="pokemon-moves__title">Pokemon Learn Moves</h3>
                <div className="pokemon-moves__container">
                  {
                    pokemonInfo?.moves.map(move => {
                      return <div className="pokemon-moves__container-box">
                        {capitalize(move.move.name)}
                      </div>
                    })
                  }
                </div>
            </div>
          </div>
        ) : <p>Pokemon is not found!!!</p>}
      </div>
    </div>
  );
}

export default App;
