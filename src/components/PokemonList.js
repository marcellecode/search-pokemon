import React from 'react';

const PokemonList = (props) => {
    console.log(props.pokemonList)
    return( 
        <div>
            <p>Lista Pokemon</p>
            {props.pokemonList.map(el => (
                <p>{el.name}</p>
            ))}
        </div>
    );
}

export default PokemonList;