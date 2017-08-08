import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route, Switch } from 'react-router-dom';

import { updateLocation, newLocation, deleteLocation, resetErrors } from '../redux/modules/Locations/locationsActions';

import LocationShow from '../views/locations/Show';
import LocationForm from '../views/locations/Form';
import LocationList from '../views/locations/List';
import LocationConfirm from '../views/locations/LocationConfirm';

class LocationsPage extends Component {

  constructor() {
    super();
    this.unListen = null;

    this.emptyLocation = {
      name: '',
      category: '',
      city: '',
      country: '',
      description: ''
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

  handleSubmit = location => {
    // TODO: perform client-side validation here.
    if (location.id) {
      this.props.updateLocation(location, this.props.history);
    } else {
      this.props.newLocation(location, this.props.history);
    }
  }

  handleDelete = locationId => {
    this.props.deleteLocation(locationId);
    this.props.history.push(this.props.match.url);
  }

  ShowLocationList = () => (
    <LocationList locations={this.props.locations} />
  )

  ShowLocationShow = props => {
    const location = this.props.locations.find(location => location.id === +props.match.params.locationId);
    return <LocationShow 
          location={location} 
          onDelete={this.handleDelete}
          />
  }

  ShowLocationNew = () => {
    const newLocation = {...this.emptyLocation
    };

    return <LocationForm 
            location={newLocation}
            errors={this.props.errors}
            onSubmit={this.handleSubmit}
            locations={this.props.locations}/>
  }

  ShowLocationEdit = props => {
    let location = this.props.locations.find(location => location.id === +props.match.params.locationId);
    location = Object.assign({},this.emptyLocation, location )

    return <LocationForm
            location={location}
            errors={this.props.errors}
            locations={this.props.locations}
            onSubmit={this.handleSubmit}
          />
  }

    ShowLocationConfirm = props => {
    let location = this.props.locations.find(location => location.id === +props.match.params.locationId);
    location = Object.assign({},this.emptyLocation, location )

    return <LocationConfirm
            dives={this.props.dives}
            location={location}
            onDelete={this.handleDelete}
          />
  }

  render() {
    return (
    <div>
      {this.props.locations &&
        <Switch>
          <Route path={`${this.props.match.url}/new`} render={this.ShowLocationNew}/>
          <Route path={`${this.props.match.url}/:locationId/edit`} render={this.ShowLocationEdit}/>
          <Route path={`${this.props.match.url}/:locationId/delete/confirm`} render={this.ShowLocationConfirm}/>
          <Route path={`${this.props.match.url}/:locationId`} render={this.ShowLocationShow}/>
          <Route exact path={this.props.match.url} render={this.ShowLocationList} />
        </Switch>
      }
    </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { 
    locations: state.locationsReducer.locations,
    dives: state.divesReducer.dives,
    errors: state.locationsReducer.errors
  };
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { 
    updateLocation,
    newLocation,
    deleteLocation,
    resetErrors
    }
  , dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(LocationsPage);