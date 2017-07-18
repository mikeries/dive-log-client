import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route, Switch } from 'react-router-dom';
import DiveShow from '../views/dives/Show'
import DiveForm from '../views/dives/Form'
import DiveList from '../views/dives/List'

import { updateDive, newDive } from '../redux/modules/Dives/divesActions'

class DivesPage extends Component {

  handleSubmit = dive => {
    if (dive.id) {
      this.props.updateDive(this.props.jwt, dive)
      this.props.history.push(this.props.match.url)
    } else {
      dive.id=0; // temporary id until we get the real one back from the back end
      this.props.newDive(this.props.jwt, dive)
      this.props.history.push(this.props.match.url)
    }
  }

  ShowDiveList = () => (
    <DiveList dives={this.props.dives} />
  )

  ShowDiveEdit = props => {
    const dive = this.props.dives.find(dive => dive.id === +props.match.params.diveId)
    return <DiveForm dive={dive} onSubmit={this.handleSubmit} locations={this.props.locations}/>
  }

  ShowDiveShow = props => {
    const dive = this.props.dives.find(dive => dive.id === +props.match.params.diveId)
    return <DiveShow dive={dive} onSubmit={this.handleSubmit} />
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

  render() {
    return (
    <div>
      {this.props.dives &&
        <Switch>
          <Route path={`${this.props.match.url}/new`} component={this.ShowDiveNew}/>
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
    locations: state.locationsReducer.locations
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { 
    updateDive,
    newDive
    }
  , dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(DivesPage);