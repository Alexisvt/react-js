import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../actions/userActions';
import UserDisplayer from './UserDisplayer';

class MainPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isFetching: false
    };
  }

  static propTypes = {
    userActions: React.PropTypes.object,
    users: React.PropTypes.array
  }

  async componentDidMount() {
    this.setState({ isFetching: true });
    await this.props.userActions.getUsers();
    this.setState({ isFetching: false });
  }

  render() {
    return (<div>
      <h1>Administrador de usuarios</h1>
      {this.state.isFetching ? <div className="alert alert-success" role="alert">Fetching users</div> : null}
      <UserDisplayer users={this.props.users}></UserDisplayer>
    </div>);
  }
}

function mapStateToProps(state, ownProps) {
  return {
    users: state.users
  };
}

function mapDispatchToProps(dispatch) {
  return {
    userActions: bindActionCreators(userActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);