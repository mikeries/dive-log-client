import React, { Component } from 'react';
import Fish from './Fish'

class Aquarium extends Component {
  constructor() {
    super();
    this.state = {
      width: 100,
      height: 100
    }
  }

  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', () => this.handleResize());
  }

  handleResize() {
    const page = document.getElementById('application');
    const height = window.innerHeight > page.clientHeight ? window.innerHeight : page.clientHeight
    const width = window.innerWidth > page.clientWidth ? window.innerWidth : page.clientWidth

    this.setState({
      height: height,
      width: width
    })
  }

  componentWillUnmount() {
    window.removeEventListener('resize', () => this.handleResize());
  }

  render() {
    const { width, height } = this.state;

    console.log(document.getElementById('application'))
    return (
      <div id='aquarium'>
        <div className='water' style={{ ...this.state, zIndex:-1 }}></div>
        <div className='water' style={{ ...this.state, zIndex:-10 }}></div>
        <div className='water' style={{ ...this.state, zIndex:-20 }}></div>
        <div className='water' style={{ ...this.state, zIndex:-30 }}></div>
        <div className='water' style={{ ...this.state, zIndex:-40 }}></div>
        <div className='water' style={{ ...this.state, zIndex:-50 }}></div>
        <div className='water' style={{ ...this.state, zIndex:-60 }}></div>
        <Fish aquariumWidth={width} aquariumHeight={height}
              image='./images/tiny-small-pixel-fish-aquarium-animated-gif-picture-10.gif'/>
        <Fish aquariumWidth={width} aquariumHeight={height}
              image='./images/tiny-small-pixel-fish-aquarium-animated-gif-picture-11.gif'/>
        <Fish aquariumWidth={width} aquariumHeight={height}
              image='./images/tiny-small-pixel-fish-aquarium-animated-gif-picture-19.gif'/>
        <Fish aquariumWidth={width} aquariumHeight={height}
              image='./images/clownfishb.gif'/>
      </div>
    );
  }
}

export default Aquarium;