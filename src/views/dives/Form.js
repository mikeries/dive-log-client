import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class DiveForm extends Component  {

  componentWillMount() {
    this.state = {
      ...this.props.dive,
      locations: this.props.locations
    }
  }

  handleLocationChange = (event) => {
    event.preventDefault();
    this.setState({
      location_id: event.target.value,
      location: this.props.locations.find(location => location.id === +event.target.value)
    });
  }

  handleInputChange = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
    
  handleFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit({
      ...this.state,
    });
  }

  render() {
    return (
    <form onSubmit={this.handleFormSubmit}>
      <h1>Editing the dive</h1>
      <label>Date: <input type='text' 
                  value={this.state.datetime}
                  name='datetime' 
                  onChange={this.handleInputChange} /></label>
      <label>Location: 
        <select value={this.state.location_id} name='location' onChange={this.handleLocationChange}>
          {this.props.locations && this.props.locations.map(location => (
            <option value={location.id} key={location.id}>{location.name}</option>)
          )}
        </select>
      </label>
      <br/>
      <br/>
      <label>Ballast: <input type='text' 
        value={this.state.ballast} 
        name='ballast' 
        onChange={this.handleInputChange} />
      </label>
      <label>Maximum Depth: <input type='text' 
        value={this.state.max_depth} 
        name='max_depth' 
        onChange={this.handleInputChange} />
      </label>
      <label>Starting Pressure: <input type='text' 
        value={this.state.starting_pressure} 
        name='starting_pressure' 
        onChange={this.handleInputChange} />
      </label>
      <label>Final Pressure: <input type='text' 
        value={this.state.final_pressure} 
        name='final_pressure' 
        onChange={this.handleInputChange} />
      </label>
      <h4>Comments</h4>
      <textarea value={this.state.comments} name='comments' onChange={this.handleInputChange}></textarea>
      <br/>
      <Button>Save</Button>
    </form>
    );
  }
}

export default DiveForm