import React, { Component } from 'react';
import timezones from '../../data/timezones';
import map from 'lodash/map';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import validateInput from '../../../server/shared/validations/signup';
import TextFieldGroup from '../common/TextFieldGroup';
class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state ={
      username: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      timezone: '',
      errors: {},
      isLoading: false
    };

    this._onChange = this._onChange.bind(this);
    this._onSubmit = this._onSubmit.bind(this);
  }

  // underscore means private function
  _onChange(e){
    this.setState({[e.target.name]: e.target.value});
  }

  _onSubmit(e){
    e.preventDefault();
    if(this._isValid()){
      console.log('valid');
      this.setState({errors: {}, isLoading: true});
      this.props.userSignupRequest(this.state).then(
          () => {},
          ({data}) => this.setState({errors: data, isLoading: false})
        );
    }
  }

  _isValid(){
    const {errors, isValid} = validateInput(this.state);

    if(!isValid){
      this.setState({errors});
    }

    return isValid;
  }

  displayError(field){
    if(this.state.errors[field]){
      return (
        <span className="help-block">{this.state.errors.username}</span>
      );
    }

    return;
  }
  
  render() {
    const {errors} = this.state;
    const options = map(timezones, (val, key) => 
      <option key={val} value={val}>{key}</option>
    );
    return (
      <form onSubmit={this._onSubmit}>
        <TextFieldGroup 
          error={errors.username}
          label="Username"
          onChange={this._onChange}
          value={this.state.username}
          field="username"
        />
        <TextFieldGroup 
          error={errors.email}
          label="Email"
          onChange={this._onChange}
          value={this.state.email}
          field="email"
        />
        <TextFieldGroup 
          error={errors.password}
          label="Password"
          onChange={this._onChange}
          value={this.state.password}
          field="password"
        />
        <TextFieldGroup 
          error={errors.passwordConfirmation}
          label="Password Confirmation"
          onChange={this._onChange}
          value={this.state.passwordConfirmation}
          field="passwordConfirmation"
        />
        <TextFieldGroup 
          error={errors.timezone}
          label="Timezone"
          onChange={this._onChange}
          value={this.state.timezone}
          field="timezone"
        />

        <div className="form-group">
          <button disabled={this.state.isLoading} className="btn btn-primary btn-lg">
            Sign up
          </button>
        </div>
      </form>
    );
  }
}

SignupForm.propTypes = {
  userSignupRequest: PropTypes.func.isRequired,
};

export default SignupForm;