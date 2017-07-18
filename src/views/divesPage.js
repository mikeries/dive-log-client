import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route, Switch } from 'react-router-dom';
import DiveShow from './diveShow'
import DiveEdit from './diveEdit'
import DiveList from './diveList'

import { updateDive } from '../redux/modules/Dives/divesActions'

import Navbar from './components/Navbar';

class DivesPage extends Component {

  handleSubmit = dive => {
    this.props.updateDive(this.props.jwt, dive)
    this.props.history.push(this.props.match.url)
  }

  ShowDiveList = () => {
    return (
      <DiveList dives={this.props.dives} />
    )
  }

  ShowDiveEdit = (props) => {
    return (
      <DiveEdit diveId={props.match.params.diveId} onSubmit={this.handleSubmit} />
    )
  }

  render() {
    return (
    <div>
      <Navbar handleLogout={this.props.handleLogout} />
      {this.props.dives &&
        <Switch>
          <Route path={`${this.props.match.url}/:diveId/edit`} component={this.ShowDiveEdit}/>
          <Route path={`${this.props.match.url}/:diveId`} component={DiveShow}/>
          <Route exact path={this.props.match.url} component={this.ShowDiveList} />
        </Switch>
      }
    </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { 
    jwt: state.sessionReducer.jwt,
    dives: state.divesReducer.dives,
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { updateDive }
  , dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(DivesPage);