import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route, Switch } from 'react-router-dom';
import DiveShow from './diveShow'
import DiveEdit from './diveEdit'
import DiveList from './diveList'

import { 
  fetchDives
} from '../redux/modules/Dives/divesActions';

import Navbar from './components/Navbar';

class DivesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: props.match.url,
      dives: props.dives
    }
    this.match = props.match;
  }

  ShowDiveList = () => {
    return (
      <DiveList dives={this.props.dives} />
    )
  }

  render() {
    return (
    <div>
      <Navbar handleLogout={this.props.handleLogout} />
      {this.props.dives &&
        <Switch>
          <Route path={`${this.state.url}/:diveId/edit`} component={DiveEdit}/>
          <Route path={`${this.state.url}/:diveId`} component={DiveShow}/>
          <Route exact path={this.state.url} component={this.ShowDiveList} />
        </Switch>
      }
    </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { 
      fetchDives
    }
  , dispatch);
};

const mapStateToProps = (state) => {
  return { 
    jwt: state.sessionReducer.jwt,
    dives: state.divesReducer.dives
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DivesPage);