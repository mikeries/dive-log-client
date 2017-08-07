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

import { LOCATIONS_ROOT } from '../../constants';
 import ErrorList from '../components/ErrorList';

class LocationForm extends Component  {

  componentWillMount() {
    this.state = {
      ...this.props.location
    };
  }

  componentWillReceiveProps() {
    this.setState({ submitted: false });
  }

  handleInputChange = event => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
    
  handleFormSubmit = event => {
    event.preventDefault();
    this.setState({ submitted: true });

    this.props.onSubmit({
      ...this.state
    });
  }

  render() {
    return (
      <Grid>
        <Form onSubmit={this.handleFormSubmit}>
          {this.state.id > 0 ? <h1>Editing Location</h1> : <h1>New Location</h1>}

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
                <ControlLabel>Name</ControlLabel>
                <FormControl
                  type="text"
                  value={this.state.name}
                  placeholder="location name"
                  name='name'
                  onChange={this.handleInputChange}
                />
              </FormGroup>
            </Col>

            <Col md={3}>
              <FormGroup>
                <ControlLabel>City</ControlLabel>
                <FormControl
                  type="text"
                  value={this.state.city}
                  placeholder="location city"
                  name='city'
                  onChange={this.handleInputChange}
                />
              </FormGroup>
            </Col>

            <Col md={3}>
              <FormGroup>
                <ControlLabel>Country</ControlLabel>
                <FormControl
                  type="text"
                  value={this.state.country}
                  placeholder="location country"
                  name='country'
                  onChange={this.handleInputChange}
                />
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

          <Link to={`${LOCATIONS_ROOT}`}>
            <Button>Back</Button>
          </Link>
          <Button disabled={!!this.state.submitted} type='submit'>Save</Button>
        </Form>
      </Grid>
    );
  }
}

export default LocationForm