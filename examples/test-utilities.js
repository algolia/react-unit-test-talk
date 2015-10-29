import React from 'react';
import {
  renderIntoDocument,
  findRenderedDOMComponentWithTag
} from 'react-addons-test-utils';
import jsdom from 'mocha-jsdom';
import expect from 'expect';

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

describe('Real Test Utilities', () => {
  jsdom({useEach: true});

  it('works', () => {
    let component = renderIntoDocument(<Button name="John" />);
    expect(
      findRenderedDOMComponentWithTag(component, 'span')
        .textContent
    ).toEqual('Hello John');
  });
});
