import * as React from 'react';
import * as enzyme from 'enzyme';
import * as ReactTestUtils from 'react-dom/test-utils'; // ES6
import CommandLine from './index';

import * as Adapter from 'enzyme-adapter-react-16';

const BASE_TEST_URL = 'http://localhost/';

const matches = [
    {
        command: 'about',
        url: '/about'
    }
];

// // tslint:disable-next-line:no-any
enzyme.configure({ adapter: new Adapter() });

it('renders a <form>', () => {
    const container = enzyme.shallow(<CommandLine matches={matches} />);
    expect(container.find('form')).toHaveLength(1);
});

it('the <form> contains a single <input> element', () => {
    const container = enzyme.shallow(<CommandLine matches={matches} />);
    expect(container.find('input')).toHaveLength(1);
});



// it(`if input value doesn't match a prop string, submitting does nothing to the window location`, () => {
//     const container = enzyme.mount(<CommandLine matches={matches} />);
//     const input = container.find('input');
//     input.simulate('change', { target: { value: 'foobar' } });
//     input.simulate('keyUp', { keyCode: 40 });
//     const url = location.href;
//     expect(url).toEqual(BASE_TEST_URL);
// });

// it(`if input value matches a prop string, submitting changes the window location to match`, () => {
//     const container = enzyme.mount(<CommandLine matches={matches} />);
//     const input = container.find('input');
//     input.simulate('change', { target: { value: 'about' } });
//     input.simulate('submit');
//     const url = location.href;
//     expect(url).toEqual(BASE_TEST_URL);
// });

