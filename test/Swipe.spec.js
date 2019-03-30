import test from 'tape'
import React from 'react'
import { mount } from 'enzyme'
import Swipe from '../src/Swipe'

test('Swipe component', (t) => {
  const wrapper = mount(
    <Swipe elementId="react-swipe-1" navigation={false}>
      <li>1</li><li>2</li>
    </Swipe>
  )

  t.pass(
    expect(wrapper.props().elementId).toEqual('react-swipe-1')
  )

  t.pass(
    expect(wrapper.props().children[0]).toEqual(<li>1</li>)
  )

  t.end()
});
