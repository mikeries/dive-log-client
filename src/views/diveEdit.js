import React, { Component } from 'react';
import { connect } from 'react-redux'

class DiveEdit extends Component  {

  componentWillMount() {
    const dive = this.props.dive;
    this.state = {
      ...dive,
      location: dive.location.name,
      city: dive.location.city,
      country: dive.location.country,
    }
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
    <div>
      <h1>Editing the dive</h1>
      <label>Date: <input type='text' 
                  value={this.state.datetime}
                  name='datetime' 
                  onChange={this.handleInputChange} /></label>
      <label>Location: 
        <select value={this.state.location} name='location' onChange={this.handleInputChange}>
          {this.props.locations && this.props.locations.map(location => (
            <option key={location.id}>{location.name}</option>)
          )}
        </select>
      </label>
      <label>City: <input type='text' 
        value={this.state.city} 
        name='city' 
        onChange={this.handleInputChange} />
      </label>
      <label>Country: <input type='text' 
        value={this.state.country} 
        name='country' 
        onChange={this.handleInputChange} />
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
      <button onClick={this.handleSubmit}>Save</button>
    </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  let dive = state.divesReducer.dives.find(dive => dive.id === +ownProps.match.params.diveId)

  if (!dive) {
    dive = { dive: {} }
  }

  return {
    ...state,
    dive,
    locations: state.locationsReducer.locations
  }
}
 
export default connect(mapStateToProps)(DiveEdit);