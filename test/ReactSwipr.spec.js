import expect from 'expect'
import test from 'tape'
import React from 'react'
import { shallow, mount } from 'enzyme'
import { setupJsdom } from './jsdom'
import Swipr from '../src/ReactSwipr'

test('ReactSwipr component', (t) => {
  setupJsdom()

  const wrapper = mount(
    <Swipr elementId="react-swipr-1" navigation={false}>
      <li>1</li><li>2</li>
    </Swipr>
  )
  console.log(wrapper.props().children)

  t.pass(
    expect(wrapper.props().elementId).toEqual('react-swipr-1')
  )

  t.pass(
    expect(wrapper.props().children[0]).toEqual(<li>1</li>)
  )

  t.end()
});
