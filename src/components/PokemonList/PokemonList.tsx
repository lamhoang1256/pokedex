import { useEffect, useState } from "react";
import PokemonCard from "../PokemonCard/PokemonCard";
import { Pokemon, PokemonDetail } from "../../interface";
import { StyledPokemonList } from "./PokemonList.styles";
import CardSkeleton from "../CardSkeleton/CardSkeleton";

const PokemonList: React.FC = () => {
  const [pokemonList, setPokemonList] = useState<PokemonDetail[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchPokemon: () => void = async () => {
    setIsLoading(true);
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=60&offset=0");
    const data = await response.json();
    const pokemons = data.results;
    pokemons.forEach(async (pokemon: Pokemon) => {
      const res = await fetch(pokemon.url);
      const detailPokemon = await res.json();
      setPokemonList((state) => [...state, detailPokemon]);
    });
    setIsLoading(false);
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <StyledPokemonList>
      {isLoading && (
        <>
          {Array(6)
            .fill(0)
            .map((item, index) => (
              <CardSkeleton key={index} />
            ))}
        </>
      )}
      {!isLoading && (
        <>
          {pokemonList.map((pokemon, index) => (
            <PokemonCard pokemonDetail={pokemon} key={index} />
          ))}
        </>
      )}
    </StyledPokemonList>
  );
};

export default PokemonList;
