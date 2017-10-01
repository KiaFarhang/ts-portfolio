import * as React from 'react';
import * as enzyme from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import { CommandLine, CommandLineWithRouter } from './index';

import * as Adapter from 'enzyme-adapter-react-16';

const BASE_TEST_URL = 'http://localhost/';

const matches = [
    {
        command: 'about',
        url: 'about'
    }
];

// // tslint:disable-next-line:no-any
enzyme.configure({ adapter: new Adapter() });

it('renders a <form>', () => {
    const container = enzyme.mount(<CommandLine matches={matches} />)
    expect(container.find('form')).toHaveLength(1);
});

it('the <form> contains two <input> elements', () => {
    const container = enzyme.mount(<CommandLine matches={matches} />)
    expect(container.find('input')).toHaveLength(2);
});

it('nothing happens to window location on form submit if state.value does not match a prop string', () => {
    const container = enzyme.mount(<CommandLine matches={matches} />)
    // console.log(container);
    container.setState({ value: 'foo' });
    const form = container.find('form');
    form.simulate('submit');
    const url = location.href;
    expect(url).toEqual(BASE_TEST_URL);
});

// it('location changes to match match prop on form submit if state.value does match a prop string', () => {
//     // const container = enzyme.mount(<CommandLine matches={matches} />);
//     const container = enzyme.mount(
//         <Router>
//             <CommandLineWithRouter matches={matches} />
//         </Router>
//     );
//     // console.log(container.children().find('form'));
//     // container.setState({ value: 'about' });
//     // const form = container.find('form');
//     // form.simulate('submit');
//     // const url = location.href;
//     // expect(url).toEqual(`${BASE_TEST_URL}${matches[0].url}`);
// })
