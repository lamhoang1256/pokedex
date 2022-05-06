import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Progress from "../Progress/Progress";
import { StyledDetail, StyledInfo, StyledSkill } from "./PokemonDetail.style";
import { PokemonDetail as PokemonDetailProps } from "../../interface";

const PokemonDetail = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState<PokemonDetailProps>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchPokemonDetail = async () => {
    setIsLoading(true);
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const detailPokemon = await response.json();
    setDetail(detailPokemon);
    setIsLoading(false);
  };

  console.log(detail);
  useEffect(() => {
    fetchPokemonDetail();
  }, []);

  return (
    <>
      {isLoading && "Loading"}
      {!isLoading && (
        <StyledDetail>
          <img src={detail?.sprites.other.dream_world.front_default} alt='pokemon' />
          <StyledInfo>
            <PokemonInfoItem label='ID'>#{detail?.id}</PokemonInfoItem>
            <PokemonInfoItem label='Name'>{detail?.name}</PokemonInfoItem>
            <PokemonInfoItem label='Height'>{detail?.height}m</PokemonInfoItem>
            <PokemonInfoItem label='Weight'>{detail?.weight}kg</PokemonInfoItem>
            <PokemonInfoItem label='Type'>{detail?.types[0].type.name}</PokemonInfoItem>
            <PokemonInfoItem label='Score'>{detail?.base_experience}</PokemonInfoItem>
          </StyledInfo>
          <StyledSkill>
            {detail?.stats.map((item) => (
              <div>
                <span>{item.stat.name}</span>
                <Progress width={item.base_stat} />
              </div>
            ))}
          </StyledSkill>
        </StyledDetail>
      )}
    </>
  );
};

interface PokemonInfoItemProps {
  label: string;
  children: React.ReactNode;
}

const PokemonInfoItem: React.FC<PokemonInfoItemProps> = ({ label, children }) => (
  <p>
    <span>{label}:</span> {children}
  </p>
);

export default PokemonDetail;
