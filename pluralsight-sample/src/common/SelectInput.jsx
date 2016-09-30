import * as React from 'react';

const {PropTypes} = React;

const SelectInput = ({name, label, onChange, defaultOption, value, error, options}) => {
  
  const optionsValues = options.map( option => <option key={option.value} value={option.value}>{option.text}</option>);
  
  return (
    <div className='form-group'>
      <label htmlFor={name}>{name}</label>
      <div className='field'>
        <select
          name={name}
          value={value}
          onChange={onChange}
          className='form-control'>
            <option value="">{defaultOption}</option>
            {optionsValues}
          </select>
          {error && <div className='alert alert-danger'>{error}</div>}
      </div>
    </div>
  );
};

SelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  defaultOption: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object)
};

export default SelectInput;
