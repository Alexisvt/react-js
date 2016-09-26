import * as React from 'react';
import Header from '../common/Header';

const App = (props) => (<div className='container-fluid'>
  <Header></Header>
  {props.children}
</div>);

App.propTypes = {
  children: React.PropTypes.object.isRequired
};

export default App;