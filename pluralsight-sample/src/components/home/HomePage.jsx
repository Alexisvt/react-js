import * as React from 'react';
import { Link } from 'react-router';

const HomePage = (props) => (<div className='jumbotron'>
  <p>React, Redux and React Router in ES6 for ultr-responsive web apps.</p>
  <Link to='about' className='btn btn-primary btn-lg'>Learn more</Link>
</div>);

export default HomePage;