import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { QUERY_POKEMON, QUERY_SPECIFIC_POKEMON } from './constants';
import { querySpecificPokemon as querySpecificPokemonAction, querySpecificPokemonSuccess, queryPokemonSuccess, queryPokemonFailure } from './actions'
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
      yield put(querySpecificPokemonAction(([...res.data.results].slice(0, 30))))
    }
  } catch (err) {
  	console.log(err)
  }
}

export function* querySpecificPokemon (action) {
  // See example in containers/HomePage/saga.js
  try {
  	const a = yield all([...(action.pokemon).map(x => call(api.getSpecificPokemon, x.name))]);
    yield put(querySpecificPokemonSuccess(a))
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
