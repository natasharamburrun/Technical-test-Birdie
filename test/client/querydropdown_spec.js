/* global describe, it, beforeEach, */

import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import QueryDropdown from '../../src/components/QueryDropdown';

describe('QueryDropdown tests', () => {

  it('should render 1 dropdown', done => {
    const wrapper = shallow(<dropdown />);
    expect(wrapper.find('dropdown').length).to.equal(1);
    done();
  });
});
