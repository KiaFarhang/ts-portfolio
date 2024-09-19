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
    //@ts-ignore
    const container = enzyme.mount(<CommandLine matches={matches} />)
    expect(container.find('form')).toHaveLength(1);
});

it('the <form> contains two <input> elements', () => {
    //@ts-ignore
    const container = enzyme.mount(<CommandLine matches={matches} />)
    expect(container.find('input')).toHaveLength(2);
});

it('nothing happens to window location on form submit if state.value does not match a prop string', () => {
    //@ts-ignore
    const container = enzyme.mount(<CommandLine matches={matches} />)
    container.setState({ value: 'foo' });
    const form = container.find('form');
    form.simulate('submit');
    const url = location.href;
    expect(url).toEqual(BASE_TEST_URL);
});

it('autocompletes the text input value if tab is pressed with a partial match', () => {
    //@ts-ignore
    const container = enzyme.mount(<CommandLine matches={matches} />);
    container.setState({ value: 'abo' });
    const input = container.find('input').first();
    input.simulate('keyDown', { keyCode: 9 });
    expect(container.state('value')).toEqual('about');
});

it('pressing tab without a partial match does not trigger autocomplete', () => {
    //@ts-ignore
    const container = enzyme.mount(<CommandLine matches={matches} />);
    container.setState({ value: 'fo' });
    const input = container.find('input').first();
    input.simulate('keyDown', { keyCode: 9 });
    expect(container.state('value')).toEqual('fo');
})

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
