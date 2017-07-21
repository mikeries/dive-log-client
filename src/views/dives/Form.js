import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { 
  Button,
  Form,
  FormGroup,
  ControlLabel,
  FormControl,
  Grid,
  Row,
  Col,
  Well
 } from 'react-bootstrap';
 import ErrorList from '../components/ErrorList'


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
      <Grid>
        <Form onSubmit={this.handleFormSubmit}>
          {this.state.id > 0 ? <h1>Editing Dive</h1> : <h1>New Dive</h1>}

          {this.props.errors &&
            <Row>
              <Col md={12}>
                <Well className='error'><ErrorList errors={this.props.errors}/></Well>
              </Col>
            </Row>
          }

          <Row>
            <Col md={3}>
              <FormGroup>
                <ControlLabel>Date</ControlLabel>
                <FormControl
                  type="text"
                  value={this.state.date}
                  placeholder="Date of dive"
                  name='date'
                  onChange={this.handleInputChange}
                />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <ControlLabel>Time</ControlLabel>
                <FormControl
                  type="text"
                  value={this.state.time}
                  placeholder="Time of dive"
                  name='time'
                  onChange={this.handleInputChange}
                />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <ControlLabel>Location</ControlLabel>
                <FormControl componentClass='select'
                  value={this.state.location_id} name='location' onChange={this.handleLocationChange}>
                  {this.props.locations && this.props.locations.map(location => (
                    <option value={location.id} key={location.id}>{location.name}</option>)
                  )}
                </FormControl>
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <ControlLabel>Duration</ControlLabel>
                <FormControl
                  type="text"
                  value={this.state.duration}
                  placeholder="Duration of dive, in minutes"
                  name='duration'
                  onChange={this.handleInputChange}
                />
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col md={3}>
              <FormGroup>
                <ControlLabel>Ballast</ControlLabel>
                <FormControl 
                  type='text' 
                  value={this.state.ballast} 
                  placeholder='How many pounds of ballast'
                  name='ballast' 
                  onChange={this.handleInputChange} />
              </FormGroup>
            </Col>

            <Col md={3}>
              <FormGroup>
                <ControlLabel>Maximum Depth</ControlLabel>
                <FormControl 
                  type='text' 
                  value={this.state.max_depth}
                  placeholder='Maximum depth, in feet'
                  name='max_depth' 
                  onChange={this.handleInputChange} />
              </FormGroup>
            </Col>

            <Col md={3}>
              <FormGroup>
                <ControlLabel>Starting Pressure</ControlLabel>
                <FormControl 
                  type='text' 
                  value={this.state.starting_pressure}
                  placeholder='Initial pressure, in psi'
                  name='starting_pressure' 
                  onChange={this.handleInputChange} />
              </FormGroup>
            </Col>

            <Col md={3}>
              <FormGroup>
                <ControlLabel>Final Pressure</ControlLabel>
                <FormControl 
                  type='text' 
                  value={this.state.final_pressure}
                  placeholder='Final pressure, in psi'
                  name='final_pressure' 
                  onChange={this.handleInputChange} />
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col md={12}>
              <FormGroup>
                <ControlLabel>Comments</ControlLabel>
                <FormControl componentClass='textarea'
                  value={this.state.comments} 
                  name='comments' 
                  onChange={this.handleInputChange} />
              </FormGroup>
            </Col>
          </Row>

          <Link to={'/dives'}>
            <Button>Back</Button>
          </Link>
          <Button type='submit'>Save</Button>
        </Form>
      </Grid>
    );
  }
}

export default DiveForm