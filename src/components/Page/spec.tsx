import * as React from 'react';
import * as enzyme from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import Page from './index';

//For finding
import Text from '../Text';
import Link from '../Link';
import { CommandLineWithRouter } from '../CommandLine';

import * as Adapter from 'enzyme-adapter-react-16';

const text = [
    'foo',
    'bar',
    'Jones'
];

const links = [{
    text: 'About Me',
    href: 'about'
}];

const matches = [
    {
        command: 'about',
        url: 'about'
    }
];

enzyme.configure({ adapter: new Adapter() });

it('always renders at least one Text component', () => {
    const container = enzyme.mount(
        <Router>
            <Page text={text} commandMatches={matches} />
        </Router>);
    const pTags = container.find(Text);
    expect(pTags.length).toBeGreaterThanOrEqual(1);
});

it('always renders exactly one CommandLineWithRouter component', () => {
    const container = enzyme.mount(
        <Router>
            <Page text={text} commandMatches={matches} />
        </Router>);
    const pTags = container.find(CommandLineWithRouter);
    expect(pTags).toHaveLength(1);
});

it('does not render any Link components if none are passed', () => {
    const container = enzyme.mount(
        <Router>
            <Page text={text} commandMatches={matches} />
        </Router>);
    const pTags = container.find(Link);
    expect(pTags).toHaveLength(0);
});

it('renders Link components if they are passed', () => {
    const container = enzyme.mount(
        <Router>
            <Page text={text} commandMatches={matches} links={links} />
        </Router>);
    const pTags = container.find(Link);
    expect(pTags).toHaveLength(1);
});

