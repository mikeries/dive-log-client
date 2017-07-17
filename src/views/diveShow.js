import React from 'react';
import { connect } from 'react-redux'

const DiveShow = ({dive, match}) => {
    return (
    <div>
      <h3>{dive.datetime} {dive.location.name} - {dive.location.city}, {dive.location.country}</h3>
      <p>Duration: {dive.duration}</p>
      <p>Ballast: {dive.ballast}  Maximum Depth: {dive.max_depth}</p>
      <p>Starting Pressure: {dive.starting_pressure}  Final Pressure: {dive.final_pressure}</p>
      <h4>Comments</h4>
      <textarea>{dive.comments}</textarea>
    </div>
    );
}

const mapStateToProps = (state, ownProps) => {
  const dive = state.divesReducer.dives.find(dive => dive.id === +ownProps.match.params.diveId)
  if (dive) {
    return { dive }
  } else {
    return { dive: {} }
  }
}
 
export default connect(mapStateToProps)(DiveShow);