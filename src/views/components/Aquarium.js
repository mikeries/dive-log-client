import React, { Component } from 'react';
import Fish from './Fish'

class Aquarium extends Component {

  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', () => this.handleResize());
  }

  handleResize() {
    const page = document.querySelector('#root');
    const height = window.innerHeight > page.scrollHeight ? window.innerHeight : page.scrollHeight
    const width = window.innerWidth > page.scollWidth ? window.innerWidth : page.scrollWidth
    console.log('window.innerHeight:', window.innerHeight)
    console.log('window.innerWidth:', window.innerWidth)
    console.log('page.scrollHeight:', page.scrollHeight)
    console.log('page.scrollWidth:', window.scrollWidth)

    this.setState({
      height: height,
      width: width
    })
  }

  componentWillUnmount() {
    window.removeEventListener('resize', () => this.handleResize());
  }

  render() {
    //let waterStyle = {height: '100vh', width: '100vw'}
    return (
      <div id='aquarium'>
        <div className='water' style={{ ...this.state, zIndex:-1 }}></div>
        <div className='water' style={{ ...this.state, zIndex:-10 }}></div>
        <div className='water' style={{ ...this.state, zIndex:-20 }}></div>
        <div className='water' style={{ ...this.state, zIndex:-30 }}></div>
        <div className='water' style={{ ...this.state, zIndex:-40 }}></div>
        <div className='water' style={{ ...this.state, zIndex:-50 }}></div>
        <div className='water' style={{ ...this.state, zIndex:-60 }}></div>
        <Fish image='./images/tiny-small-pixel-fish-aquarium-animated-gif-picture-10.gif'/>
        <Fish image='./images/tiny-small-pixel-fish-aquarium-animated-gif-picture-19.gif'/>
        <Fish image='./images/tiny-small-pixel-fish-aquarium-animated-gif-picture-11.gif'/>
        <Fish image='./images/clownfishb.gif'/>
      </div>
    );
  }
}

export default Aquarium;