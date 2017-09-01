import React, {Component} from 'react';
import classNames from 'classnames';
import validator from 'validator';

/*
This is just some css sprinkled in to help with the layout
import '../css/_bootstrap.scss';
import '../css/signin.scss';
*/

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: {value: '', isValid: true, message: ''},
      password: {value: '', isValid: true, message: ''},
      confirmPassword: {value: '', isValid: true, message: ''}
    };
  }

  onChange = (e) => {
    var state = this.state;
    state[e.target.name].value = e.target.value;

    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.resetValidationStates(); //reset states before the validation procedure is run.
    if (this.formIsValid()) { //run the validation, and if it's good move on.
      //form processing here....
    }
  }

  formIsValid = () => {
    var state = this.state;

    if (!validator.isEmail(state.email.value)) {
      state.email.isValid = false;
      state.email.message = 'Not a valid email address';

      this.setState(state);
      return false;
    }

    //additional validation checks here...

    return true;
  }

  resetValidationStates = () => {
    var state = this.state;

    Object.keys(state).map(key => {
      if (state[key].hasOwnProperty('isValid')) {
        state[key].isValid = true;
        state[key].message = '';
      }
    });
    this.setState(state);
  }

  render() {
    var {email, password, confirmPassword} = this.state;
    /*
    Each of the group classes below will include the 'form-group' class, and will only
    include the 'has-error' class if the isValid value is false.
    */
    var emailGroupClass = classNames('form-group', {'has-error': !email.isValid});
    var passwordGroupClass = classNames('form-group', {'has-error': !password.isValid});
    var confirmGroupClass = classNames('form-group', {'has-error': !confirmPassword.isValid});

    return (
      <div className="container">
        <form className="form-signin" onSubmit={this.onSubmit}>
          <h2 className="form-signin-heading">Create Account</h2>

          <div className={emailGroupClass}>
            <input type="text" name="email" className="form-control"
              placeholder="Email address" value={email.value} onChange={this.onChange} autoFocus />
            <span className="help-block">{email.message}</span>
          </div>

          <div className={passwordGroupClass}>
            <input type="password" name="password" className="form-control"
              placeholder="Password" value={password.value} onChange={this.onChange} />
            <span className="help-block">{password.message}</span>
          </div>

          <div className={confirmGroupClass}>
            <input type="password" name="confirmPassword" className="form-control"
              placeholder="Confirm Password" value={confirmPassword.value} onChange={this.onChange} />
            <span className="help-block">{confirmPassword.message}</span>
          </div>

          <button className="btn btn-lg btn-primary btn-block" type="submit">Create Account</button>
        </form>
      </div>
    );
  }
};

export default Login
