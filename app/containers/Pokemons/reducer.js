/*
 *
 * Pokemons reducer
 *
 */
import produce from 'immer';
import { QUERY_POKEMON, QUERY_POKEMON_SUCCESS, QUERY_SPECIFIC_POKEMON_SUCCESS, QUERY_POKEMON_FAILURE } from './constants';

export const initialState = {
  pokemons: [],
  loading: false,
  pagination: {}
};

/* eslint-disable default-case, no-param-reassign */
const pokemonsReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case QUERY_POKEMON:
        draft.loading = true
        break;

      case QUERY_POKEMON_SUCCESS:
        draft.loading = false
        console.log(action.data)
        draft.pokemons = [...state.pokemons, ...action.data.results]
        break;

      case QUERY_POKEMON_FAILURE:
        draft.loading = false
        break;

      case QUERY_SPECIFIC_POKEMON_SUCCESS:
        let uPokemons = [...state.pokemons]
        const pokemon = uPokemons.map(a => a.name).indexOf(action.data.name)

        if (pokemon > -1) {
          uPokemons[pokemon] = action.data
          draft.pokemons = uPokemons
        }
        break;
    }
  });

export default pokemonsReducer;
