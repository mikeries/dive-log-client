import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { 
  fetchDives
} from '../redux/modules/Dives/divesActions';

import Navbar from './components/Navbar';

class Dives extends Component {

  componentWillMount(state) {
   // this.props.fetchDives(jwt)
  }

  render() {
    return (
      <div>
        <Navbar handleLogout={this.props.handleLogout} />
        <div>
          Dives index page!
        </div>
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
  console.log(state)
  return { jwt: state.sessionReducer.jwt };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dives);