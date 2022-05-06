import React from "react";
import { StyledCard } from "./PokemonCard.styles";
import { PokemonDetail } from "../../interface";
import { Link } from "react-router-dom";

interface PokemonCardProps {
  pokemonDetail: PokemonDetail;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemonDetail }) => {
  const type: string = pokemonDetail.types[0].type.name;

  return (
    <StyledCard className={type}>
      <img src={pokemonDetail.sprites.front_default} alt='pokemon' />
      <span>#{pokemonDetail.id}</span>
      <Link to={`/detail/${pokemonDetail.id}`}>
        <h3>{pokemonDetail.name}</h3>
      </Link>
      <span>Type: {type}</span>
    </StyledCard>
  );
};

export default PokemonCard;
