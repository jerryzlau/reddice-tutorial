import React, { Component } from 'react';
import timezones from '../../data/timezones';
import map from 'lodash/map';
import PropTypes from 'prop-types';
import classnames from 'classnames';

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
    this.setState({errors: {}, isLoading: true});
    e.preventDefault();
    this.props.userSignupRequest(this.state).then(
        () => {},
        ({data}) => this.setState({errors: data, isLoading: false})
      );
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
        <div className={classnames("form-group", {"has-error": errors.username})}>
          <label htmlFor="" className="control-label">Username</label>
          <input 
            type="text" 
            name="username"
            onChange={this._onChange}
            value={this.state.username}
            className="form-control"/>
          {this.displayError('username')}
        </div>

        <div className={classnames("form-group", {"has-error": errors.email})}>
          <label htmlFor="" className="control-label">Email</label>
          <input 
            type="text" 
            name="email"
            onChange={this._onChange}
            value={this.state.email}
            className="form-control"/>
          {this.displayError('email')}
        </div>

        <div className={classnames("form-group", {"has-error": errors.password})}>
          <label htmlFor="" className="control-label">Password</label>
          <input 
            type="password" 
            name="password"
            onChange={this._onChange}
            value={this.state.password}
            className="form-control"/>
          {this.displayError('password')}
        </div>

        <div className={classnames("form-group", {"has-error": errors.passwordConfirmation})}>
          <label htmlFor="" className="control-label">Password Confirmation</label>
          <input 
            type="password" 
            name="passwordConfirmation"
            onChange={this._onChange}
            value={this.state.passwordConfirmation}
            className="form-control"/>
          {this.displayError('passwordConfirmation')}
        </div>

        <div className={classnames("form-group", {"has-error": errors.timezone})}>
          <label htmlFor="" className="control-label">Timezone</label>
          <select
            type="text" 
            name="timezone"
            onChange={this._onChange}
            value={this.state.timezone}
            className="form-control">
            <option value="" disabled>Choose Your Timezone</option>
            {options}
            </select>
          {this.displayError('timezone')}
        </div>

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