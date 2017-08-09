import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route, Switch, Redirect } from 'react-router-dom';

import { updateDive, newDive, deleteDive, resetErrors } from '../redux/modules/Dives/divesActions';

import DiveShow from '../views/dives/Show';
import DiveForm from '../views/dives/Form';
import DiveList from '../views/dives/List';

class DivesPage extends Component {

  constructor() {
    super();
    this.unListen = null;

    this.emptyDive = {
      date: '',
      time: '',
      duration: '',
      ballast: '',
      max_depth: '',
      starting_pressure: '',
      final_pressure: '',
      comments: ''
    }
  }

  componentWillMount() {
    this.unListen = this.props.history.listen(() => {
      if (this.props.errors) this.props.resetErrors();
    })
  }

  componentWillUnmount() {
    this.unListen();
  }

  handleSubmit = dive => {
    // TODO: perform client-side validation here.
    if (dive.id) {
      this.props.updateDive(dive, this.props.history);
    } else {
      this.props.newDive(dive, this.props.history);
    }
  }

  handleDelete = diveId => {
    this.props.deleteDive(diveId);
    this.props.history.push(this.props.match.url);
  }

  ShowDiveList = () => (
    <DiveList dives={this.props.dives} locations={this.props.locations}/>
  )

  ShowDiveShow = props => {
    const dive = this.props.dives.find(dive => dive.id === +props.match.params.diveId);
    return <DiveShow 
          dive={dive} 
          onDelete={this.handleDelete}
          />
  }

  ShowDiveNew = () => {
    const newDive = {...this.emptyDive, 
      location_id: this.props.locations[0].id, 
      location: this.props.locations[0] 
    };

    return <DiveForm 
            dive={newDive}
            errors={this.props.errors}
            onSubmit={this.handleSubmit}
            locations={this.props.locations}/>
  }

  ShowDiveEdit = props => {
    let dive = this.props.dives.find(dive => dive.id === +props.match.params.diveId);
    dive = Object.assign({},this.emptyDive, dive )

    return <DiveForm
            dive={dive}
            errors={this.props.errors}
            locations={this.props.locations}
            onSubmit={this.handleSubmit}
          />
  }

  render() {
    return (
    <div>
      {this.props.dives &&
        <Switch>
          {this.props.locations ?
            <Route path={`${this.props.match.url}/new`} render={this.ShowDiveNew}/>
            :
            <Redirect to={`${this.props.match.url}`}/>
          }
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
    dives: state.divesReducer.dives,
    locations: state.locationsReducer.locations,
    errors: state.divesReducer.errors
  };
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { 
    updateDive,
    newDive,
    deleteDive,
    resetErrors
    }
  , dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(DivesPage);