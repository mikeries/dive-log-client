import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import moment from 'moment';
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

import {DIVES_ROOT } from '../../constants';
import ErrorList from '../components/ErrorList';

import FormValidator from '../../FormValidator';

class DiveForm extends Component  {
  constructor() {
    super();

    this.validator = new FormValidator([
      { field: 'duration', method: 'isNumeric', validWhen: true, message: 'Duration must be a number.'},
      { field: 'duration', method: 'isInt', args: [{min: 1, max: 100}], 
                          validWhen: true, message: 'Duration must be between 1 and 100 minutes.'},

      { field: 'ballast', method: 'isNumeric', validWhen: true, message: 'Ballast must be a number.'},
      { field: 'ballast', method: 'isInt', args: [{min: 0, max: 20}], 
                          validWhen: true, message: 'Ballast must between 0 and 20 pounds.'},

      { field: 'max_depth', method: 'isNumeric', validWhen: true, message: 'Maximum depth must be a number.'},
      { field: 'max_depth', method: 'isInt', args: [{min: 1, max: 150}], 
                          validWhen: true, message: 'Maximum depth must be between 1 and 150 feet.'},

      { field: 'starting_pressure', method: 'isNumeric', validWhen: true, message: 'Starting pressure must be a number, in psi.'},
      { field: 'starting_pressure', method: 'isInt', args: [{min: 1, max: 4000}], 
                          validWhen: true, message: 'Starting pressure must be between 1 and 4000 psi.'},

      { field: 'final_pressure', method: 'isNumeric', validWhen: true, message: 'Final pressure must be a number, in psi.'},
      { field: 'final_pressure', method: 'isInt', args: [{min: 1, max: 4000}], 
                          validWhen: true, message: 'Final pressure must be between 1 and 4000 psi.'},

      { field: 'time', method: 'matches', args: [/^\d?\d:\d\d$/],
                      validWhen: true, message: 'Time must be in the format hh:mm.'},
    ]);
  }
  componentWillMount() {
    this.state = {
      ...this.props.dive,
      startDate: moment(),
      locations: this.props.locations,
      date: moment().format('MM/DD/YYYY'),
      validation: this.validator.reset()
    };
  }

  componentWillReceiveProps() {
    this.setState({ submitted: false });
  }

  handleDateChange = date => {
    this.setState({
      startDate: date,
      date: date.format('MM/DD/YYYY')
    });
  }

  handleLocationChange = event => {
    event.preventDefault();
    this.setState({
      location_id: event.target.value,
      location: this.props.locations.find(location => location.id === +event.target.value)
    });
  }

  handleInputChange = event => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
    
  handleFormSubmit = event => {
    event.preventDefault();
    const validation = this.validator.validate(this.state);
    this.setState({ validation });

    if (validation.isValid) {
      this.setState({ submitted: true });

      this.props.onSubmit({
        ...this.state
      });
    }
  }

  render() {
    let title,
        backButtonUrl,
        validation = this.state.validation;

    if (this.state.id > 0) {
      title = 'Editing Dive';
      backButtonUrl = `${DIVES_ROOT}/${this.state.id}`;
    } else {
      title = 'New Dive';
      backButtonUrl = `${DIVES_ROOT}`;
    }

    return (
      <Grid>
        <Form onSubmit={this.handleFormSubmit}>
          <h1>{title}</h1>

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
                  <DatePicker selected={this.state.startDate}
                    name={this.state.date}
                    value={this.state.date}
                    placeholder="Date of dive"
                    onChange={this.handleDateChange}
                    className='form-control'/>
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup className={validation.time.isInvalid && 'has-error'}>
                <ControlLabel>Time</ControlLabel>
                <FormControl
                  type="text"
                  value={this.state.time}
                  placeholder="Time of dive"
                  name='time'
                  onChange={this.handleInputChange}
                />
                <span className="help-block">{validation.time.message}</span>
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <ControlLabel>Location</ControlLabel>
                <FormControl componentClass='select'
                  value={this.state.location_id} 
                  name='location' 
                  onChange={this.handleLocationChange}>
                    {this.props.locations && this.props.locations.map(location => (
                      <option value={location.id} key={location.id}>{location.name}</option>)
                    )}
                </FormControl>
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup className={validation.duration.isInvalid && 'has-error'}>
                <ControlLabel>Duration</ControlLabel>
                <FormControl
                  type="text"
                  value={this.state.duration}
                  placeholder="Duration of dive, in minutes"
                  name='duration'
                  onChange={this.handleInputChange}
                />
                <span className="help-block">{validation.duration.message}</span>
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col md={3}>
              <FormGroup className={validation.ballast.isInvalid && 'has-error'}>
                <ControlLabel>Ballast</ControlLabel>
                <FormControl 
                  type='text' 
                  value={this.state.ballast} 
                  placeholder='How many pounds of ballast'
                  name='ballast' 
                  onChange={this.handleInputChange} />
                  <span className="help-block">{validation.ballast.message}</span>
              </FormGroup>
            </Col>

            <Col md={3}>
              <FormGroup className={validation.max_depth.isInvalid && 'has-error'}>
                <ControlLabel>Maximum Depth</ControlLabel>
                <FormControl 
                  type='text' 
                  value={this.state.max_depth}
                  placeholder='Maximum depth, in feet'
                  name='max_depth' 
                  onChange={this.handleInputChange} />
                <span className="help-block">{validation.max_depth.message}</span>
              </FormGroup>
            </Col>

            <Col md={3}>
              <FormGroup className={validation.starting_pressure.isInvalid && 'has-error'}>
                <ControlLabel>Starting Pressure</ControlLabel>
                <FormControl 
                  type='text' 
                  value={this.state.starting_pressure}
                  placeholder='Initial pressure, in psi'
                  name='starting_pressure' 
                  onChange={this.handleInputChange} />
                <span className="help-block">{validation.starting_pressure.message}</span>
              </FormGroup>
            </Col>

            <Col md={3}>
              <FormGroup className={validation.final_pressure.isInvalid && 'has-error'}>
                <ControlLabel>Final Pressure</ControlLabel>
                <FormControl 
                  type='text' 
                  value={this.state.final_pressure}
                  placeholder='Final pressure, in psi'
                  name='final_pressure' 
                  onChange={this.handleInputChange} />
                <span className="help-block">{validation.final_pressure.message}</span>
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

          <Link to={backButtonUrl}>
            <Button>Back</Button>
          </Link>
          <Button disabled={!!this.state.submitted} type='submit'>Save</Button>
        </Form>
      </Grid>
    );
  }
}

export default DiveForm