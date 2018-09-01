import React, { Component } from 'react';
import TextFieldGroup from '../common/TextFieldGroup';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { createEvent } from "../../actions/eventActions";

class EventForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      errors: {},
      isLoading: false
    };

    this._onChange = this._onChange.bind(this);
    this._onSubmit = this._onSubmit.bind(this);
  }

  _onChange(e){
    this.setState({ [e.target.name]: e.target.value });
  }

  _onSubmit(e){
    e.preventDefault();
    this.props.createEvent(this.state);
  }
  
  render() {
    const {title, errors, isLoading} = this.state;
    return (
      <form onSubmit={this._onSubmit}>
        <h1>Create New Game Event</h1>
        <TextFieldGroup
          field="title"
          label="Event Title"
          value={title}
          error={errors.title}
          onChange={this._onChange}
        />

        <button type="submit" className="btn btn-primary">Create</button>
      </form>
    );
  }
}

EventForm.propTypes = {
  createEvent: PropTypes.func.isRequired
};

export default connect(null, {createEvent})(EventForm);