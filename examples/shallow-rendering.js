import React from 'react';
import expect from 'expect';
import {createRenderer} from 'react-addons-test-utils';

class Label extends React.Component {
  render() {
    return <span>Hello {this.props.name}</span>;
  }
}

class Button extends React.Component {
  render() {
    return <div><Label name={this.props.name} /></div>;
  }
}

describe('Shallow rendering', () => {
  it('works', () => {
    let renderer = createRenderer();
    renderer.render(<Button name="John" />);
    let actualElement = renderer.getRenderOutput();
    let expectedElement = <div><Label name="John" /></div>;
    expect(actualElement).toEqual(expectedElement);
  });
});
