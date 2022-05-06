export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonDetail {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites: {
    front_default: string;
    other: { dream_world: { front_default: string } };
  };
  types: { type: { name: string; url: string } }[];
  base_experience: number;
  stats: {
    base_stat: number;
    stat: {
      name: string;
    };
  }[];
}

export interface ProgressProps {
  width: number;
}
