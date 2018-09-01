import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { withRouter } from "react-router-dom";
import { addFlashMessage } from "../actions/flashMessages";

export default function(ComposedComponent){
  class Authenticate extends Component {
    componentDidMount(){
      if(!this.props.isAuthenticated){
        this.props.addFlashMessage({
          type: 'error',
          text: 'You need to login to access this page'
        });
        this.props.history.push('/');
      }
    }

    componentWillUpdate(nextProps){
      if(!nextProps.isAuthenticated){
        this.props.history.push('/');
      }
    }

    render() {
      return (
        <ComposedComponent {...this.props}/>
      );
    }
  }

  Authenticate.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    addFlashMessage: PropTypes.func.isRequired
  };

  function mapStateToProps(state){
    return {
      isAuthenticated: state.auth.isAuthenticated
    };
  }
  
  return connect(mapStateToProps, {addFlashMessage})(withRouter(Authenticate));
}