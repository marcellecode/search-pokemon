import React, { useState }from 'react';
import {miniDex} from '../miniDex'; 

const SearchPokemon = ({inputSearch}) => {
    return (
     <div> 
        <input onChange={(event)=> inputSearch(event.target.value)}/>
     </div>
    );
}

export default SearchPokemon;