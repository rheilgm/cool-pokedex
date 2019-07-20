/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import Filters from 'components/PokeFilters'

import GlobalStyle from '../../global-styles';

import { Layout } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

export default function App() {
  return (
    <Layout>
    <Sider
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
      }}
    >
      <Filters />
    </Sider>

    <Layout style={{ marginLeft: 200 }}>
      <Header style={{ background: '#fff', padding: 0 }} />
      
      <Content style={{ margin: '24px 16px 0', overflow: 'initial', flex: '1' }}>
        <div>
	      <Switch>
	        <Route exact path="/" component={HomePage} />
	        <Route component={NotFoundPage} />
	      </Switch>
	      <GlobalStyle />
	    </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Pokedex</Footer>
    </Layout>
  </Layout>
  );
}
