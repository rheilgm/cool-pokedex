/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import PokemonTable from '../Pokemons'

export default function HomePage() {

  return (
    <PokemonTable />
  );
}
