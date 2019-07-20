/**
 *
 * PokemonStats
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function PokemonStats({stats = []}) {
  	return (
  		<React.Fragment>
			{stats.map(s => <p key={s.stat.name}>{s.stat.name}: {s.base_stat}</p>)}
  		</React.Fragment>
  	);	
}

PokemonStats.propTypes = {};

export default memo(PokemonStats);
