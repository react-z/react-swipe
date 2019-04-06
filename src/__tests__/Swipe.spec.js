/* setup enzyme */
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

/* setup jsdom */
var jsdom = require('jsdom')
const { JSDOM } = jsdom
const window = (new JSDOM('')).window
global.window = window
global.document = window.document

import React from 'react'
import renderer from 'react-test-renderer'
import {shallow} from 'enzyme'
import Swipe from '../Swipe'

test('Swipe renders correctly and matches snapshot', () => {
  const component = renderer.create(
    <Swipe elementId="react-swipe-1" navigation={false}>
      <li>
        <p>swiping...</p>
      </li>
      <li>
        <p>more swiping...</p>
      </li>
      <li>
        <p>more more swiping...</p>
      </li>
    </Swipe>,
  )

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Swipe renders the correct elements', () => {
  const wrapper = shallow(
    <Swipe elementId="react-swipe-2" navigation={true}>
      <li>
        <p>swiping...</p>
      </li>
      <li>
        <p>more swiping...</p>
      </li>
      <li>
        <p>more more swiping...</p>
      </li>
    </Swipe>,
  );

  expect(wrapper.find('.react-swipe').length).toEqual(1)
  expect(wrapper.find('.swipr_slides').length).toEqual(1)
  expect(wrapper.find('#react-swipe-2').length).toEqual(1)

  expect(wrapper.find('li').length).toEqual(3)
  expect(wrapper.find('p').first().text()).toEqual('swiping...')

  expect(wrapper.find('svg').length).toEqual(2)
  expect(wrapper.find('.swipr_next').length).toEqual(1)
  expect(wrapper.find('.swipr_prev').length).toEqual(1)

  wrapper.setProps({navigation: false});
  expect(wrapper.find('svg').length).toEqual(0)
  expect(wrapper.find('.swipr_next').length).toEqual(0)
  expect(wrapper.find('.swipr_prev').length).toEqual(0)
});
