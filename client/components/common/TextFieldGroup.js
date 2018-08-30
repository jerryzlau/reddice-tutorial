import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const TextFieldGroup = ({field, value, label, error, type, onChange, checkUserExists}) => {
  return(
    <div className={classnames("form-group", {"has-error": error})}>
      <label htmlFor="" className="control-label">{label}</label>
      <input 
        type={type}
        name={field}
        onBlur={checkUserExists}
        onChange={onChange}
        value={value}
        className="form-control"/>
      {error && <span className="help-block">{error}</span>}
    </div>
  );
};

TextFieldGroup.prototype = {
  field: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  checkUserExists: PropTypes.func
};

TextFieldGroup.defaultProps = {
  type: 'text'
};

export default TextFieldGroup;

