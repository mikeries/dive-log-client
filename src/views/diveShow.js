import React from 'react';
import { connect } from 'react-redux'

const DiveShow = ({dive, match}) => {
    return (
    <div>
      <h1>Dive Show Page</h1>
      <p>{dive.id}</p>
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