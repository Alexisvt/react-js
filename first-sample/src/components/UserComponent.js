import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as React from 'react';
import * as actions from '../actions';

class UserComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.actionsprops.getUsersAction();
  }

  render() {

    const usersList = this.props.users
      .map((user, index) => (
        <ul key={index}>
          <li>{user.name}</li>
          <li>{user.age}</li>
          <li>{user.email}</li>
        </ul>));

    return (
      <div>
        <h1>Rendering users</h1>
        {usersList}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.users
});

const mapDistpathToProps = (dispath) => ({
  actionsprops : bindActionCreators(actions, dispath)
});

export default connect(mapStateToProps, mapDistpathToProps)(UserComponent);