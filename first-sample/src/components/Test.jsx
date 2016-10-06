import * as React from 'react';

const Test = ({name, age, email}) => {
  return (<div>{`name value: ${name}, age: ${age}, email: ${email}`} </div>);
};

Test.propTypes = {
  name: React.PropTypes.string.isRequired,
  age: React.PropTypes.number.isRequired,
  email: React.PropTypes.number.isRequired
};

export default Test;