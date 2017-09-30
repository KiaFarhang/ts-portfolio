import * as React from 'react';
import * as enzyme from 'enzyme';
import Link from './index';

import * as Adapter from 'enzyme-adapter-react-16';

// // tslint:disable-next-line:no-any
enzyme.configure({ adapter: new Adapter() });

it('renders a single <p> tag', () => {
    const container = enzyme.shallow(<Link text='foo' href='/home' />);
    expect(container.find('p')).toHaveLength(1);
});

it(`the <p> tag's text matches the text prop`, () => {
    const container = enzyme.shallow(<Link text='foo' href='/home' />);
    expect(container.render().text()).toEqual('foo');
});

it('the <p> tag contains a single <a> tag', () => {
    const container = enzyme.shallow(<Link text='foo' href='/home' />);
    expect(container.find('a')).toHaveLength(1);
});

it(`the <a> tag's href attribute equals the href prop`, () => {
    const container = enzyme.shallow(<Link text='foo' href='/home' />);
    expect(container.find('a').prop('href')).toEqual('/home');
});

it(`the <a> tag's title attribute matches the text prop`, () => {
    const container = enzyme.shallow(<Link text='foo' href='/home' />);
    expect(container.find('a').prop('title')).toEqual('foo');
});