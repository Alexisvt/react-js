import React from 'react';

// Class component we have access to state here
class AppClass extends React.Component {
  render() {
    return <h1></h1>;
  }
}


// stateless component, we dont have access to the state here
const App = () => <h1>Hello</h1>;

export default App;