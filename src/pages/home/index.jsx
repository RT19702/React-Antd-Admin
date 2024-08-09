import React, { Component } from 'react'
import welcome from "@/assets/images/welcome.png";
import './index.less'

export default class index extends Component {
  render() {
    return (
      <div className="home card">
        <img src={welcome} alt="welcome" />
      </div>
    )
  }
}
