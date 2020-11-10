export const POKEMON_LOADING = "POKEMON_LOADING";
export const POKEMON_FAIL = "POKEMON_FAIL";
export const POKEMON_SUCCESS = "POKEMON_SUCCESS";

export type PokemonInfo = {
  name: string,
  abilities: PokemonAbility[],
  sprites: PokemonSprites,
  stats: PokemonStat[],
  types: PokemonType[],
  id: PokemonId,
  weight: number,
  height: number,
  moves: PokemonMove[],
}

export type PokemonId = {
  id: number
}

export type PokemonAbility = {
  ability: {
    name: string
    url: string
  }
}

export type PokemonMove = {
  move: {
    name: string
  }
}

export type PokemonSprites = {
  front_default: string,
  back_default: string
}

export type PokemonStat = {
  base_stat: number,
  stat: {
    name: string
  }
}

export type PokemonType = {
  type: {
    name: string
  }
}


export interface PokemonLoading {
  type: typeof POKEMON_LOADING
}

export interface PokemonFail {
  type: typeof POKEMON_FAIL
}

export interface PokemonSuccess {
  type: typeof POKEMON_SUCCESS,
  payload: PokemonInfo
}

export type PokemonDispatchTypes = PokemonLoading | PokemonFail | PokemonSuccess