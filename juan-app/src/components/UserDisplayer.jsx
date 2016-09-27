import * as React from 'react';

const UserDisplayer = (props) => {
  const userList = props.users.map((user, index) => <li key={index}>{user.firstName}</li>);
  return (<div><ul>{userList}</ul></div>);
};

UserDisplayer.propTypes = {
  users: React.PropTypes.array.isRequired
};

export { UserDisplayer as default};