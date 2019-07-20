import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { QUERY_POKEMON, QUERY_SPECIFIC_POKEMON } from './constants';
import { querySpecificPokemonSuccess, queryPokemonSuccess, queryPokemonFailure } from './actions'
import API from 'services/api'
const api = API.create()

// Individual exports for testing
export function* queryPokemon () {
  // See example in containers/HomePage/saga.js

  console.log('data queried')
  try {
  	const res = yield call(api.getPokemon)

  	if (res.ok) {
  		yield put (queryPokemonSuccess(res.data))

      for (let a of res.data.results) {
        const pokemon = yield call(api.getSpecificPokemon, a.name)

        if (pokemon.ok) {
          yield put(querySpecificPokemonSuccess(pokemon.data))
        }
      }
    }
  } catch (err) {
  	console.log(err)
  }
}

export function* querySpecificPokemon (action) {
  // See example in containers/HomePage/saga.js
  try {
  	const res = yield call(api.getSpecificPokemon)

  	if (res.ok) {
  		yield put (querySpecificPokemonSuccess(res.data))
  	}
  } catch (err) {
  	console.log(err)
  }
}

export default function* pokemonData() {
  yield all([
    takeLatest(QUERY_POKEMON, queryPokemon),
    takeLatest(QUERY_SPECIFIC_POKEMON, querySpecificPokemon)
  ]);
}
