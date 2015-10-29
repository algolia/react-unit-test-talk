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
    return <div onClick={this.props.click}><Label name={this.props.name} /></div>;
  }
}

describe('Shallow rendering on* handlers', () => {
  it('works', () => {
    let renderer = createRenderer();
    let hasClicked = false;
    let click = () => hasClicked = true;
    renderer.render(<Button name="John" click={click} />);
    renderer.getRenderOutput().props.onClick();
    expect(hasClicked).toBe(true);
  });
});
