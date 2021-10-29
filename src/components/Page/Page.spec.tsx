import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {render, screen} from "@testing-library/react";
import Page from './index';

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

it('renders text without links properly', () => {
    render(
        <Router>
            <Page text={text} commandMatches={matches} />
        </Router>
    );
    text.forEach(t => screen.getByText(t));
});



it('renders links if they are passed', () => {
    render(
        <Router>
            <Page text={text} commandMatches={matches} links={links} />
        </Router>
    );
    screen.getByText(/About Me/i);
});

