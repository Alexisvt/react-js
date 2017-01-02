// @flow
import React from 'react';

const data = {
  'cu': {
    'name': 'Cuba',
    'icon': 'flag-cu.png',
  },
  'fr': {
    'name': 'France',
    'icon': 'flag-fr.png',
  },
  'jp': {
    'name': 'Japan',
    'icon': 'flag-jp.png',
  },
  'nl': {
    'name': 'Netherlands',
    'icon': 'flag-nl.png',
  },
  'uz': {
    'name': 'Uzbekistan',
    'icon': 'flag-uz.png',
  }
};

type FlagPropType = {
  code: string;
  showName: string;
};

const Flag = ({showName, code}: FlagPropType) => {
  const name: string = data[code].name;
  const icon: string = data[code].icon;

  return (
    <span className='falg'>
      <img src={`/img/${icon}`} className='icon' title={name} />
      {showName && <span className='name'>{name}</span>}
    </span>
  );

};

export default Flag;