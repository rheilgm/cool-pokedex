import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the pokemons state domain
 */

const selectPokemonsDomain = state => state.pokemons || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Pokemons
 */

const makeSelectPokemons = () =>
  createSelector(
    selectPokemonsDomain,
    substate => substate,
  );

export default makeSelectPokemons;
export { selectPokemonsDomain };
