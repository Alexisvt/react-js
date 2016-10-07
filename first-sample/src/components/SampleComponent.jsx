// @flow
import * as React from 'react';

export default class SampleComponent extends React.Component {
  props: SampleComponentProps

  render() {
    return (<div>
      <p>{this.props.email}</p>
      <p>{this.props.phone}</p>
    </div>);
  }
}