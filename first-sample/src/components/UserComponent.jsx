// @flow
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as React from 'react';
import * as actions from '../actions';
import Test from './Test';
import Sample from './SampleComponent';

class UserComponent extends React.Component {

  props: UserComponentProps;

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

    const userObj = this.props.users[0];    

    return (
      <div>
        <h1>Rendering users</h1>
        {usersList}
        <Test {...userObj}></Test>
        <Sample phone={1} email='hola@mundo.com'></Sample>
      </div>
    );
  }
}

UserComponent.propTypes = {
  users: React.PropTypes.array.isRequired,
  actionsprops: React.PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  users: state.users
});

const mapDistpathToProps = (dispath) => ({
  actionsprops : bindActionCreators(actions, dispath)
});

export default connect(mapStateToProps, mapDistpathToProps)(UserComponent);