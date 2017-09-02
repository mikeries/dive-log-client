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

import FormValidator from '../../FormValidator';
import validator from 'validator';

import { LOCATIONS_ROOT } from '../../constants';
import ErrorList from '../components/ErrorList';

class LocationForm extends Component  {
  constructor() {
    super();

    this.validator = new FormValidator([
      { field: 'name', method: validator.isEmpty, validWhen: false, message: 'You must provide a name.'},
      { field: 'country', method: validator.isEmpty, validWhen: false, message: 'You must provide a country.'},
      { field: 'country', method: validator.isLength, options: {min: 0, max: 9}, validWhen: true, message: 'Length must be less than 10.' },
    ]);
  }

  componentWillMount() {
    this.state = {
      ...this.props.location,
      validation: this.validator.reset()
    };
  }

  componentWillReceiveProps() {
    this.setState({ submitted: false });
  }

  handleInputChange = event => {
    event.preventDefault();

    var state = this.state;
    state[event.target.name] = event.target.value;

    this.setState(state);
  }
    
  handleFormSubmit = event => {
    event.preventDefault();
    const validation = this.validator.validate(this.state);

    if(validation.isValid) {
      this.setState({ submitted: true });

      this.props.onSubmit({
        ...this.state
      });
    } else {
      this.setState({ validation: validation });
    }
  }

  render() {
    let title = '',
        backButtonUrl = '',
        validation = this.state.validation;

    if (this.state.id > 0) {
      title = 'Editing Location';
      backButtonUrl = `${LOCATIONS_ROOT}/${this.state.id}`;
    } else {
      title = 'New Location';
      backButtonUrl = `${LOCATIONS_ROOT}`;
    }

    return (
      <Grid>
        <Form onSubmit={this.handleFormSubmit}>
          <h2>{title}</h2>

          {this.props.errors &&
            <Row>
              <Col md={12}>
                <Well className='error'><ErrorList errors={this.props.errors}/></Well>
              </Col>
            </Row>
          }
          <Row>
            <Col md={3}>
              <FormGroup className={validation.name.isInvalid && 'has-error'}>
                <ControlLabel>Name</ControlLabel>
                <FormControl
                  type="text"
                  value={this.state.name}
                  placeholder="name"
                  name='name'
                  onChange={this.handleInputChange}
                />
                <span className="help-block">{validation.name.message}</span>
              </FormGroup>
            </Col>

            <Col md={3}>
              <FormGroup>
                <ControlLabel>City</ControlLabel>
                <FormControl
                  type="text"
                  value={this.state.city}
                  placeholder="city"
                  name='city'
                  onChange={this.handleInputChange}
                />
              </FormGroup>
            </Col>

            <Col md={3}>
              <FormGroup className={validation.country.isInvalid && 'has-error'}>
                <ControlLabel>Country</ControlLabel>
                <FormControl
                  type="text"
                  value={this.state.country}
                  placeholder="country"
                  name='country'
                  onChange={this.handleInputChange}
                />
                <span className="help-block">{validation.country.message}</span>
              </FormGroup>
            </Col>

            <Col md={3}>
              <FormGroup>
                <ControlLabel>Category</ControlLabel>
                <FormControl
                  type="text"
                  value={this.state.category}
                  placeholder="type of dive (wall, reef, wreck, etc)"
                  name='category'
                  onChange={this.handleInputChange}
                />
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col md={12}>
              <FormGroup>
                <ControlLabel>Description</ControlLabel>
                <FormControl componentClass='textarea'
                  value={this.state.description} 
                  name='description' 
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

export default LocationForm