import React, { Component } from 'react'
import CollapseIcon from './components/CollapseIcon'
import AvatarIcon from './components/AvatarIcon'
import { Layout } from 'antd';
import "./index.less";

export default class index extends Component {
  render() {
    const { Header } = Layout;
    return (
      <Header>
        <div className='header-lf'>
          <CollapseIcon />
        </div>
        <div className='header-ri'>
          <AvatarIcon />
        </div>
      </Header>
    )
  }
}
