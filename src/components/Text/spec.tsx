import * as React from 'react';
import * as enzyme from 'enzyme';
import Text from './index';

import * as Adapter from 'enzyme-adapter-react-16';

// // tslint:disable-next-line:no-any
enzyme.configure({ adapter: new Adapter() });

it('renders a single <p> tag', () => {
    const container = enzyme.shallow(<Text text='foo' />);
    expect(container.find('p')).toHaveLength(1);
});

it('the <p> tag contains whatever was passed as the text prop', () => {
    const container = enzyme.shallow(<Text text='power, corruption and lies' />);
    expect(container.text()).toEqual('power, corruption and lies');
});