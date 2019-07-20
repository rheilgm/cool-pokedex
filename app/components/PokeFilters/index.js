/**
 *
 * PokeFilters
 *
 */

import React, { memo } from 'react';
import { Menu, Icon } from 'antd';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function PokeFilters() {
  return (
  	<Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
        <Menu.Item key="1">
          <Icon type="user" />
          <span className="nav-text">Filter 1</span>
        </Menu.Item>
        
        <Menu.Item key="2">
          <Icon type="video-camera" />
          <span className="nav-text">Filter 2</span>
        </Menu.Item>
        <Menu.Item key="3">
          <Icon type="upload" />
          <span className="nav-text">Filter 3</span>
        </Menu.Item>
        <Menu.Item key="4">
          <Icon type="bar-chart" />
          <span className="nav-text">Filter 4</span>
        </Menu.Item>
        <Menu.Item key="5">
          <Icon type="cloud-o" />
          <span className="nav-text">Filter 5</span>
        </Menu.Item>
        <Menu.Item key="6">
          <Icon type="appstore-o" />
          <span className="nav-text">Filter 6</span>
        </Menu.Item>
        <Menu.Item key="7">
          <Icon type="team" />
          <span className="nav-text">Filter 7</span>
        </Menu.Item>
        <Menu.Item key="8">
          <Icon type="shop" />
          <span className="nav-text">Filter 8</span>
        </Menu.Item>
      </Menu>
	);
}

PokeFilters.propTypes = {};

export default memo(PokeFilters);
