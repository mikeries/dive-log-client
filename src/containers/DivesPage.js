import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route, Switch } from 'react-router-dom';
import DiveShow from '../views/diveShow'
import DiveEdit from '../views/diveEdit'
import DiveList from '../views/diveList'

import { updateDive } from '../redux/modules/Dives/divesActions'

class DivesPage extends Component {

  handleSubmit = dive => {
    this.props.updateDive(this.props.jwt, dive)
    this.props.history.push(this.props.match.url)
  }

  ShowDiveList = () => (
    <DiveList dives={this.props.dives} />
  )

  ShowDiveEdit = props => {
    const dive = this.props.dives.find(dive => dive.id === +props.match.params.diveId)
    return <DiveEdit dive={dive} onSubmit={this.handleSubmit} />
  }

  ShowDiveShow = props => {
    const dive = this.props.dives.find(dive => dive.id === +props.match.params.diveId)
    return <DiveShow dive={dive} onSubmit={this.handleSubmit} />
  }

  render() {
    return (
    <div>
      {this.props.dives &&
        <Switch>
          <Route path={`${this.props.match.url}/:diveId/edit`} component={this.ShowDiveEdit}/>
          <Route path={`${this.props.match.url}/:diveId`} component={this.ShowDiveShow}/>
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