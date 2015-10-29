import React from 'react';
import expect from 'expect';
import {createRenderer} from 'react-addons-test-utils';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);

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

describe.only('Shallow rendering', () => {
  it('works', () => {
    let renderer = createRenderer();
    renderer.render(<Button name="John" />);
    let actualElement = renderer.getRenderOutput();
    let expectedElement = <div><Label name="Johne" /></div>;
    expect(actualElement).toEqualJSX(expectedElement);
  });
});
