import React, { Component } from 'react';
import { connect } from 'react-redux';

import Navbar from './components/Navbar';

class DiveShow extends Component {
  render() {
    return (
    <div>
      <Navbar handleLogout={this.props.handleLogout} />
      <h1>Dive Show Page</h1>
    </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { 
    jwt: state.sessionReducer.jwt,
    dives: state.divesReducer.dives
  };
}

export default connect(mapStateToProps)(DiveShow);