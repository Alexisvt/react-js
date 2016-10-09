// @flow
import * as React from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';


const Header = ({loading}: {loading: boolean}) => (<nav>
  <IndexLink to='/' activeClassName='active'>Home</IndexLink>
  {' | '}
  <IndexLink to='/courses' activeClassName='active'>Courses</IndexLink>  
  {' | '}
  <IndexLink to='/about' activeClassName='active'>About</IndexLink>
  { loading && <LoadingDots dots={20} interval={100}></LoadingDots>}
</nav>);

Header.propTypes = {
  loading: React.PropTypes.bool.isRequired
};

export default Header;