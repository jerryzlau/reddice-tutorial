import React, { Component } from 'react';
import TextFieldGroup from '../common/TextFieldGroup';
import validateInput from '../../../server/shared/validations/login';
import { connect } from "react-redux";
import { login } from "../../actions/authActions";
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      identifier: '',
      password: '',
      errors: {},
      isLoading: false
    };

    this._onSubmit = this._onSubmit.bind(this);
    this._onChange = this._onChange.bind(this);
  }

  _isValid(){
    const {errors, isValid} = validateInput(this.state);
    if(!isValid){
      this.setState({errors});
    }

    return isValid;
  }

  _onSubmit(e){
    e.preventDefault();
    if(this._isValid()){
      this.setState({errors: {}, isLoading: true});
      this.props.login(this.state).then(
        (res) => {
          this.props.history.push('/');
        },
        (err) => this.setState({errors: err.data.errors, isLoading: false}));
    }
  }

  _onChange(e){
    this.setState({[e.target.name]: e.target.value});
  }
  

  render() {
    const {errors, identifier, password, isLoading} = this.state;
    return (
      <form onSubmit={this._onSubmit}>
        <h1>Login</h1>
        
        {errors.form && <div className="alert alert-danger">{errors.form}</div>}
        <TextFieldGroup
          field="identifier"
          label="Username / Email"
          value={identifier}
          error={errors.identifier}
          onChange={this._onChange}
        />
        <TextFieldGroup
          field="password"
          label="Password"
          value={password}
          error={errors.password}
          onChange={this._onChange}
          type="password"
        />

        <div className="form-group">
          <button className="btn btn-primary btn-lg" disabled={isLoading}>Login</button>
        </div>
      </form>
    );
  }
}

LoginForm.propTypes = {
  login: PropTypes.func.isRequired
};

export default connect(null, {login})(withRouter(LoginForm));