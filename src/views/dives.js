import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Dive from './components/Dive'

import { 
  fetchDives
} from '../redux/modules/Dives/divesActions';

import Navbar from './components/Navbar';

class Dives extends Component {

  componentWillMount(state) {
    this.props.fetchDives(this.props.jwt)
  }

  render() {
    return (
    <div>
      <Navbar handleLogout={this.props.handleLogout} />
      <h1>Dives Page</h1>
      {this.props.dives && 
        <Dive dive={this.props.dives[0]}>this.props.dives[0]</Dive>
      }
    </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { fetchDives
    }
  , dispatch);
};

const mapStateToProps = (state) => {
  return { 
    jwt: state.sessionReducer.jwt,
    dives: state.divesReducer.dives
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dives);