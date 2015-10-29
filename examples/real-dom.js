import React from 'react';
import {findDOMNode} from 'react-dom';
import {renderIntoDocument} from 'react-addons-test-utils';
import jsdom from 'mocha-jsdom';
import expect from 'expect';

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

describe('Real dom test', () => {
  jsdom({useEach: true});

  it('works', () => {
    let component = renderIntoDocument(<Button name="John" click={() => {}} />);
    let DOMNode = findDOMNode(component);
    expect(DOMNode.querySelector('span').textContent).toEqual('Hello John');
  });
});
