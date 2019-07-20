/**
 *
 * Pokemons
 *
 */

import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { queryPokemon, querySpecificPokemon } from './actions';
import makeSelectPokemons from './selectors';
import reducer from './reducer';
import saga from './saga';
import { Table, Badge, Menu, Dropdown, Icon, Spin } from 'antd';
import PokemonStats from 'components/PokemonStats'

const columns = [
  {
    title: 'Image',
    dataIndex: 'sprites',
    sorter: true,
    render: sprites => {
      if (sprites) {
        return (
          <img style={{width: '100px', height: '100px'}} src={sprites.front_default} />
        )
      } else {
        return (
          <img style={{width: '100px', height: '100px'}} src={'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png'} />
        )
      }
    },
    width: '25%',
  },

  {
    title: 'Pokemon Name',
    dataIndex: 'name',
    sorter: true,
    render: name => `${name}`,
    width: '25%',
  },
  {
    title: 'Type',
    dataIndex: 'types',
    sorter: true,
    render: types => !types ? <Spin /> : `${types.map(a => a.type.name)}`,
    width: '25%',
  },
  {
    title: 'Stats',
    dataIndex: 'stats',
    sorter: true,
    render: stats => !stats ? <Spin /> : <PokemonStats stats={stats} />,
    width: '25%',
  }
];

export function Pokemons({ data, loading, paginationRedux, onQuery, onQuerySpecific }) {
  useInjectReducer({ key: 'pokemons', reducer });
  useInjectSaga({ key: 'pokemons', saga });

  useEffect(() => {
    fetch()
  }, [])

  const handleTableChange = (pagination, filters, sorter, lists) => {
    const pageSize = (pagination.current - 1) * pagination.pageSize
    onQuerySpecific(lists.currentDataSource.slice(pageSize, pageSize + 10))
  };

  const fetch = (params = {}) => {
    console.log('params:', params);
    onQuery(params)
  };

  return (
    <Table
      columns={columns}
      rowKey={record => record.name}
      dataSource={data}
      // pagination={paginationRedux}
      loading={loading}
      onChange={handleTableChange}
       onRow={(record, rowIndex) => {
        return {
          onClick: event => {
            console.log(record)
          }
        };
      }}
    />
  );
}

Pokemons.propTypes = {

};

const mapStateToProps = (state) => {
  return {
    data: state.pokemons ? state.pokemons.pokemons : [],
    loading: state.pokemons ? state.pokemons.loading : false,
    paginationRedux: state.pokemons ? state.pokemons.pagination : {}
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onQuery: (data) => dispatch(queryPokemon(data)),
    onQuerySpecific: (data) => dispatch(querySpecificPokemon(data))
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Pokemons);
