import React, { useState } from 'react';
import PokemonList from './PokemonList';
import Pokemon from "./Pokemon";

const App = () => {
    const [pokemonUrl, setPokemonUrl] = useState(undefined);
  return (
    <div>
        <PokemonList onSelectOne={(data) => setPokemonUrl(data)}/>
        {pokemonUrl ? <Pokemon PokemonUrl={pokemonUrl}/> : 'No Pokemon'}
    </div>
  );
};

export default App;
