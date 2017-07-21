import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route, Switch } from 'react-router-dom';
import DiveShow from '../views/dives/Show'
import DiveForm from '../views/dives/Form'
import DiveList from '../views/dives/List'

import { updateDive, newDive, deleteDive } from '../redux/modules/Dives/divesActions'

class DivesPage extends Component {

  handleSubmit = dive => {
    if (dive.id) {
      this.props.updateDive(this.props.jwt, dive)
      this.props.history.push(this.props.match.url)
    } else {
      this.props.newDive(this.props.jwt, dive)
      this.props.history.push(this.props.match.url)
    }
  }

  handleDelete = (diveId) => {
    this.props.deleteDive(this.props.jwt, diveId);
    this.props.history.push(this.props.match.url);
  }

  ShowDiveList = () => (
    <DiveList dives={this.props.dives} />
  )

  ShowDiveShow = props => {
    const dive = this.props.dives.find(dive => dive.id === +props.match.params.diveId)
    return <DiveShow 
          dive={dive} 
          onDelete={this.handleDelete}
          />
  }

  ShowDiveNew = props => {
    const dive = {
      location: this.props.locations[0], // default to first location for now
      location_id: this.props.locations[0].id,
      datetime: '',
      duration: '',
      ballast: '',
      max_depth: '',
      starting_pressure: '',
      final_pressure: ''
    }
    return <DiveForm dive={dive} onSubmit={this.handleSubmit} locations={this.props.locations}/>
  }

  ShowDiveEdit = props => {
    const dive = this.props.dives.find(dive => dive.id === +props.match.params.diveId)
    return <DiveForm
            dive={dive}
            locations={this.props.locations}
            onSubmit={this.handleSubmit}
          />
  }

  render() {
    return (
    <div>
      {this.props.dives &&
        <Switch>
          <Route path={`${this.props.match.url}/new`} render={this.ShowDiveNew}/>
          <Route path={`${this.props.match.url}/:diveId/edit`} render={this.ShowDiveEdit}/>
          <Route path={`${this.props.match.url}/:diveId`} render={this.ShowDiveShow}/>
          <Route exact path={this.props.match.url} render={this.ShowDiveList} />
        </Switch>
      }
    </div>
    );
  }
}

const mapStateToProps = state => {
  return { 
    jwt: state.sessionReducer.jwt,
    dives: state.divesReducer.dives,
    locations: state.locationsReducer.locations
  };
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { 
    updateDive,
    newDive,
    deleteDive
    }
  , dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(DivesPage);