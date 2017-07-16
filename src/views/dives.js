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
      {this.props.dives && this.props.dives.map(
        (dive,index) => ( <Dive key={index} dive={dive}/>)
      )}
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