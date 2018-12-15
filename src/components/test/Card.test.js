import React from 'react';
import Card from '../Card';
import { shallow } from 'enzyme';

describe('inspiration card', () => {

  it('will match the inspirationCard Snapshot', () => {
      const wrapper = shallow( <Card
        text="hi"
        emoji=""
        id={1}
        onDeleteCallback={() => {}}
        />);
    expect(wrapper).toMatchSnapshot();
  });


})
