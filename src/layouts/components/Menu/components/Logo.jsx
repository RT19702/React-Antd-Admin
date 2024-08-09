import React, { Component } from 'react'
import logo from "@/assets/images/logo.png";
import { connect } from 'react-redux';

class Logo extends Component {
  render() {
    const { isCollapse } = this.props;
    return (
      <div className="logo-box">
        <img src={logo} alt="logo" className="logo-img" />
        {!isCollapse ? <h2 className="logo-text">React-Admin</h2> : null}
      </div>
    )
  }
}

const mapStateToProps = (state) => state.menu;
export default connect(mapStateToProps)(Logo)
