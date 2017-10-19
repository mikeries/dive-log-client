import React, { Component } from 'react';
import Constant from './fish_constants'

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
        (window.innerWidth - Constant.max_scale_factor * Constant.image_width),
        y: Math.random() * 
        (window.innerHeight - Constant.max_scale_factor * Constant.image_height),
        z: Math.random() * Constant.min_z,
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
      x: Math.random() * Constant.max_x_velocity,
      y: Math.random() * Constant.max_y_velocity,
      z: Math.random() * Constant.max_z_velocity
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
    if(Math.random() < Constant.chance_to_change_direction) {
      this.chooseRandomMovement();
    }
  }

  relocate() {
    this.setState({
      position: {
        x: Math.random() * 
          (this.state.aquariumWidth - Constant.max_scale_factor * Constant.image_width),
        y: Math.random() * 
          (this.state.aquariumHeight - Constant.max_scale_factor * Constant.image_height),
        z: Constant.min_z,  // start in the back
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
      ( aquarium.width - Constant.max_scale_factor * Constant.image_width)) {
      direction.x = 'left';
    } else if (position.x < Constant.max_scale_factor * Constant.image_width) {
      direction.x = 'right';
    }

    if (position.y > 
      ( aquarium.height - Constant.max_scale_factor * Constant.image_height )) {
      direction.y = 'up';
    } else if (position.y < Constant.max_scale_factor * Constant.image_height) {
      direction.y = 'down';
    }

    if (position.z > (-1)) {
      direction.z = 'in';
    } else if (position.z < Constant.min_z) {
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
      () => this.tick(), Constant.tick_interval
    );
  }

  render() {
    const { position, direction } = this.state;
    let yScale = 2 - (position.z / Constant.min_z);
    let xScale = ( direction.x === 'right' ? yScale : -yScale );
    let fishScale = {transform: `scaleX(${xScale}) scaleY(${yScale})`};
    let fishStyle = { ...fishScale, left: position.x, top: position.y, zIndex: Math.round(position.z) }

    return (
      <img className='fish' style={fishStyle} src={this.props.image}/>
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }
}

export default Fish;