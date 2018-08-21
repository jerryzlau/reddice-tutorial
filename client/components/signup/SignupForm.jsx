import React, { Component } from 'react';
import timezones from '../../data/timezones';
import map from 'lodash/map';
import PropTypes from 'prop-types';

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state ={
      username: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      timezone: ''
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
    this.props.userSignupRequest(this.state);
  }
  
  render() {
    const options = map(timezones, (val, key) => 
      <option key={val} value={val}>{key}</option>
    );

    return (
      <form onSubmit={this._onSubmit}>
        <div className="form-group">
          <label htmlFor="" className="control-label">Username</label>
          <input 
            type="text" 
            name="username"
            onChange={this._onChange}
            value={this.state.username}
            className="form-control"/>
        </div>

        <div className="form-group">
          <label htmlFor="" className="control-label">Email</label>
          <input 
            type="text" 
            name="email"
            onChange={this._onChange}
            value={this.state.email}
            className="form-control"/>
        </div>

        <div className="form-group">
          <label htmlFor="" className="control-label">Password</label>
          <input 
            type="password" 
            name="password"
            onChange={this._onChange}
            value={this.state.password}
            className="form-control"/>
        </div>

        <div className="form-group">
          <label htmlFor="" className="control-label">Password Confirmation</label>
          <input 
            type="password" 
            name="passwordConfirmation"
            onChange={this._onChange}
            value={this.state.passwordConfirmation}
            className="form-control"/>
        </div>

        <div className="form-group">
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
        </div>

        <div className="form-group">
          <button className="btn btn-primary btn-lg">
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