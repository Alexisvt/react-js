import * as React from 'react';
import Header from '../common/Header';
import { connect } from 'react-redux';

const App = ({loading, children}) => (<div className='container-fluid'>
  <Header
    loading={loading}></Header>
  {children}
</div>);

App.propTypes = {
  children: React.PropTypes.object.isRequired,
  loading: React.PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallsInProgress > 0
  };
}

export default connect(mapStateToProps)(App);