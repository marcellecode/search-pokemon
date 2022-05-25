import React, { useState } from "react";
import PokemonList from "./components/PokemonList";
import SearchPokemon from "./components/SearchPokemon";
import { miniDex } from "./miniDex";

function App() {
  const [filter, setFilter] = useState("");

  const inputSearch = (data) => {
    setFilter(data);
  }

  return (
    <div className="App">
      <SearchPokemon inputSearch={inputSearch}/>
      <PokemonList pokemonList={miniDex}/>
    </div>
  );
}

export default App;
