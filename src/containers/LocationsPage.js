import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route, Switch } from 'react-router-dom';

import { updateLocation, newLocation, deleteLocation, resetErrors } from '../redux/modules/Locations/locationsActions';

import LocationShow from '../views/locations/Show';
import LocationForm from '../views/locations/Form';
import LocationList from '../views/locations/List';

class LocationsPage extends Component {

  constructor() {
    super();
    this.unListen = null;

    this.emptyLocation = {

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

  handleDelete = LocationId => {
    this.props.deleteLocation(LocationId);
    this.props.history.push(this.props.match.url);
  }

  ShowLocationList = () => (
    <LocationList Locations={this.props.Locations} />
  )

  ShowLocationShow = props => {
    const Location = this.props.Locations.find(Location => Location.id === +props.match.params.LocationId);
    return <LocationShow 
          Location={Location} 
          onDelete={this.handleDelete}
          />
  }

  ShowLocationNew = () => {
    const newLocation = {...this.emptyLocation,  
      location: this.props.locations[0],           // use first location as default, at least for now
      location_id: this.props.locations[0].id 
    };

    return <LocationForm 
            Location={newLocation}
            errors={this.props.errors}
            onSubmit={this.handleSubmit}
            locations={this.props.locations}/>
  }

  ShowLocationEdit = props => {
    let Location = this.props.Locations.find(Location => Location.id === +props.match.params.LocationId);
    Location = Object.assign({},this.emptyLocation, Location )

    return <LocationForm
            Location={Location}
            errors={this.props.errors}
            locations={this.props.locations}
            onSubmit={this.handleSubmit}
          />
  }

  render() {
    return (
    <div>
      {this.props.Locations &&
        <Switch>
          <Route path={`${this.props.match.url}/new`} render={this.ShowLocationNew}/>
          <Route path={`${this.props.match.url}/:LocationId/edit`} render={this.ShowLocationEdit}/>
          <Route path={`${this.props.match.url}/:LocationId`} render={this.ShowLocationShow}/>
          <Route exact path={this.props.match.url} render={this.ShowLocationList} />
        </Switch>
      }
    </div>
    );
  }
}

const mapStateToProps = state => {
  return { 
    Locations: state.LocationsReducer.Locations,
    locations: state.locationsReducer.locations,
    errors: state.LocationsReducer.errors
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