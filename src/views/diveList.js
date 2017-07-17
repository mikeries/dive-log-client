import React, { Component } from 'react';
import Dive from './components/Dive'

const DiveList = (props) => {
    return (
    <div>
      <h1>Dives List Page</h1>
      {props.dives && props.dives.map(
        (dive,index) => ( <Dive key={index} dive={dive}/>)
      )}
    </div>
    );
}

export default DiveList