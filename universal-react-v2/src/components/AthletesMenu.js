// @flow

import React from 'react';
import { Link } from 'react-router';
import athletes from '../data/athletes';

const AthletesMenu = () => (
  <nav className="atheletes-menu">
    {athletes.map(menuAthlete => {
      return <Link key={menuAthlete.id} to={`/athlete/${menuAthlete.id}`} activeClassName="active">
        {menuAthlete.name}
      </Link>;
    })}
  </nav>);

export default AthletesMenu;