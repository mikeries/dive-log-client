import React, { Component } from 'react';
import Constant from './fish_constants'

class Fish extends Component {
  constructor() {
    super();

    this.state = {
      aquariumWidth: 100,
      aquariumHeight: 100,

      xDirection: 'right',
      yDirection: 'down',

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
    let velocity = {
      x: Math.random() * Constant.max_x_velocity,
      y: Math.random() * Constant.max_y_velocity,
      z: Math.random() * Constant.max_z_velocity
    }

    let xDirection = Math.random() < 0.5 ? 'left' : 'right';
    let yDirection = Math.random() < 0.5 ? 'up' : 'down';
    let zDirection = Math.random() < 0.5 ? 'in' : 'out';
    this.setState({
      velocity: velocity,
      xDirection: xDirection,
      yDirection: yDirection,

      zDirection: zDirection
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
      yDirection: 'down',
      velocity: { ...this.state.velocity, y: 1, z: 0.1 }
    })
  }

  move() {
    let { velocity, position, xDirection, yDirection, zDirection } = this.state;

    if (position.x > this.state.aquariumWidth || position.y > this.state.aquariumHeight) {
      this.relocate(); // if the fish is outisde the window (window was resized, probably)
    } 

    if (position.x > 
      ( this.state.aquariumWidth - Constant.max_scale_factor * Constant.image_width)) {
      xDirection = 'left';
    } else if (position.x < Constant.max_scale_factor * Constant.image_width) {
      xDirection = 'right';
    }

    if (position.y > 
      ( this.state.aquariumHeight - Constant.max_scale_factor * Constant.image_height )) {
      yDirection = 'up';
    } else if (position.y < Constant.max_scale_factor * Constant.image_height) {
      yDirection = 'down';
    }

    if (position.z > (-1)) {
      zDirection = 'in';
    } else if (position.z < Constant.min_z) {
      zDirection = 'out';
    }

    this.setState({
      x: position.x + (xDirection === 'right' ? velocity.x : -velocity.x),
      xDirection: xDirection,
      y: position.y + (yDirection === 'down' ? velocity.y : -velocity.y),
      yDirection: yDirection,
      z: position.z + (zDirection === 'in' ? -velocity.z : velocity.z),
      zDirection: zDirection
    })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      aquariumWidth: nextProps.aquariumWidth, 
      aquariumHeight: nextProps.aquariumHeight
    })
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(), Constant.tick_interval
    );
  }

  render() {
    const { position } = this.state;
    let yScale = 2 - (position.z / Constant.min_z);
    let xScale = ( position.xDirection === 'right' ? yScale : -yScale );
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