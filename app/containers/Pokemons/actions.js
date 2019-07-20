/*
 *
 * Pokemons actions
 *
 */

import { QUERY_POKEMON, QUERY_POKEMON_SUCCESS, QUERY_POKEMON_FAILURE, QUERY_SPECIFIC_POKEMON, QUERY_SPECIFIC_POKEMON_SUCCESS } from './constants';

export function queryPokemon(data) {
  return {
    type: QUERY_POKEMON,
    data
  };
}

export function queryPokemonSuccess(data) {
  return {
    type: QUERY_POKEMON_SUCCESS,
    data
  };
}

export function queryPokemonFailure(data) {
  return {
    type: QUERY_POKEMON_FAILURE,
    data
  };
}

export function querySpecificPokemon(name) {
  return {
    type: QUERY_SPECIFIC_POKEMON,
    name
  };
}

export function querySpecificPokemonSuccess(data) {
  return {
    type: QUERY_SPECIFIC_POKEMON_SUCCESS,
    data
  };
}
