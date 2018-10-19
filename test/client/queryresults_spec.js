/* global describe, it, beforeEach, */

import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import QueryResults from '../../src/components/QueryResults';

describe('QueryResults tests', () => {

  it('should render a table', done => {
    const wrapper = shallow(<table />);
    expect(wrapper.find('table').length).to.equal(1);
    done();
  });
});
