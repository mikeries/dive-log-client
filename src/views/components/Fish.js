import React, { Component } from 'react';
import Const from './fish_constants'

class Fish extends Component {
  constructor() {
    super();

    this.state = {
      aquarium: {
        height: 100,
        width: 100
      },

      direction: {
        x: 'right',
        y: 'down',
        z: 'out'
      },

      position: {
        x: Math.random() * 
        (window.innerWidth - Const.max_scale_factor * Const.image_width),
        y: Math.random() * 
        (window.innerHeight - Const.max_scale_factor * Const.image_height),
        z: Math.random() * Const.min_z,
      },

      velocity: {
        x: 2,
        y: 1,
        z: 0.1
      }
    };
  }

  chooseRandomMovement() {
    const velocity = {
      x: Math.random() * Const.max_x_velocity,
      y: Math.random() * Const.max_y_velocity,
      z: Math.random() * Const.max_z_velocity
    }

    const direction = {
      x: Math.random() < 0.5 ? 'left' : 'right',
      y: Math.random() < 0.5 ? 'up' : 'down',
      z: Math.random() < 0.5 ? 'in' : 'out'
    }

    this.setState({
      velocity: velocity,
      direction: direction
    })
  }

  tick() {
    this.move();
    if(Math.random() < Const.chance_to_change_direction) {
      this.chooseRandomMovement();
    }
  }

  relocate() {
    this.setState({
      position: {
        x: Math.random() * 
          (this.state.aquariumWidth - Const.max_scale_factor * Const.image_width),
        y: Math.random() * 
          (this.state.aquariumHeight - Const.max_scale_factor * Const.image_height),
        z: Const.min_z,  // start in the back
      },
      velocity: { ...this.state.velocity, y: 1, z: 0.1 }
    })
  }

  move() {
    let { velocity, position, direction, aquarium } = this.state;

    if (position.x > aquarium.width || position.y > aquarium.height) {
      this.relocate(); // if the fish is outisde the window (window was resized, probably)
    } 

    if (position.x > 
      ( aquarium.width - Const.max_scale_factor * Const.image_width)) {
      direction.x = 'left';
    } else if (position.x < Const.max_scale_factor * Const.image_width) {
      direction.x = 'right';
    }

    if (position.y > 
      ( aquarium.height - Const.max_scale_factor * Const.image_height )) {
      direction.y = 'up';
    } else if (position.y < Const.max_scale_factor * Const.image_height) {
      direction.y = 'down';
    }

    if (position.z > (-1)) {
      direction.z = 'in';
    } else if (position.z < Const.min_z) {
      direction.z = 'out';
    }

    this.setState({
      position: {
        x: position.x + (direction.x === 'right' ? velocity.x : -velocity.x),
        y: position.y + (direction.y === 'down' ? velocity.y : -velocity.y),
        z: position.z + (direction.z === 'in' ? -velocity.z : velocity.z),
      },

      direction: direction
    })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      aquarium: {
        width: nextProps.aquariumWidth,
        height: nextProps.aquariumHeight
      }
    })
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(), Const.tick_interval
    );
  }

  render() {
    const { position, direction } = this.state;
    let yScale = 2 - (position.z / Const.min_z);
    let xScale = ( direction.x === 'right' ? yScale : -yScale );
    let fishScale = {transform: `scaleX(${xScale}) scaleY(${yScale})`};
    let fishStyle = { ...fishScale, left: position.x, top: position.y, zIndex: Math.round(position.z) }

    return (
      <img alt="" className='fish' style={fishStyle} src={this.props.image}/>
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }
}

export default Fish;