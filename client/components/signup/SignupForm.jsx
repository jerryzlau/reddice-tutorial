import React, { Component } from 'react';
import timezones from '../../data/timezones';
import map from 'lodash/map';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import validateInput from '../../../server/shared/validations/signup';
import TextFieldGroup from '../common/TextFieldGroup';
import { withRouter } from 'react-router-dom';
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
      isLoading: false,
      invalid: false
    };

    this._onChange = this._onChange.bind(this);
    this._onSubmit = this._onSubmit.bind(this);
    this.checkUserExists = this.checkUserExists.bind(this);
  }

  checkUserExists(e){
    const field = e.target.name;
    const val = e.target.value;
    if(val != ''){
      this.props.isUserExists(val).then(res => {
        let errors = this.state.errors;
        let invalid;
        if(res.data.user){
          errors[field] = `This is user with such ${field}`;
          invalid = true;
        }else{
          invalid = false;
          errors[field] = '';
        }

        this.setState({errors, invalid});
      });
    }
  }

  // underscore means private function
  _onChange(e){
    this.setState({[e.target.name]: e.target.value});
  }

  _onSubmit(e){
    e.preventDefault();
    if(this._isValid()){
      this.setState({errors: {}, isLoading: true});
      this.props.userSignupRequest(this.state).then(
          () => {
            this.props.addFlashMessage({
              type: 'success',
              text: 'You have signed up successfully. Welcome'
            });
            this.props.history.push('/');
          },
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
          type="text"
          checkUserExists={this.checkUserExists}
          onChange={this._onChange}
          value={this.state.username}
          field="username"
        />
        <TextFieldGroup 
          error={errors.email}
          label="Email"
          type="text"
          checkUserExists={this.checkUserExists}
          onChange={this._onChange}
          value={this.state.email}
          field="email"
        />
        <TextFieldGroup 
          error={errors.password}
          label="Password"
          type="password"
          onChange={this._onChange}
          value={this.state.password}
          field="password"
        />
        <TextFieldGroup 
          error={errors.passwordConfirmation}
          label="Password Confirmation"
          type="password"
          onChange={this._onChange}
          value={this.state.passwordConfirmation}
          field="passwordConfirmation"
        />

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
          <button disabled={this.state.isLoading || this.state.invalid} className="btn btn-primary btn-lg">
            Sign up
          </button>
        </div>
      </form>
    );
  }
}

SignupForm.propTypes = {
  userSignupRequest: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired,
  isUserExists: PropTypes.func.isRequired,
};

export default withRouter(SignupForm); // this provides this.props.history as a function in the listed components