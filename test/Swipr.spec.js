import test from 'tape'
import React from 'react'
import { mount } from 'enzyme'
import Swipr from '../src/ReactSwipr'

test('Swipr component', (t) => {
  const wrapper = mount(
    <Swipr elementId="react-swipr-1" navigation={false}>
      <li>1</li><li>2</li>
    </Swipr>
  )

  t.pass(
    expect(wrapper.props().elementId).toEqual('react-swipr-1')
  )

  t.pass(
    expect(wrapper.props().children[0]).toEqual(<li>1</li>)
  )

  t.end()
});
