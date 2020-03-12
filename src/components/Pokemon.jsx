import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Pokemon = ({PokemonUrl}) => {
    const [pokemon, setPokemon] = useState(undefined);

    useEffect( () => {
        axios.get(PokemonUrl).then((data) => {
            setPokemon(data.data);
        });
    }, [PokemonUrl]);

    if (pokemon != undefined) {
        return <div>
            <img src={pokemon.sprites.front_default} />
            <img src={pokemon.sprites.back_default} /> <br/>
            Nom : {pokemon.name} <br/>
            ID : {pokemon.id} <br/>
        </div>
    } else {
        return <>No Pokemon</>;
    }

};

export default Pokemon;