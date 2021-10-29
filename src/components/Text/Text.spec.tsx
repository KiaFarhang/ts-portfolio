import * as React from 'react';
import {render, screen} from "@testing-library/react"
import Text from './index';

it('renders properly', () => {
    render(<Text text='foo' />);
    screen.getByText("foo");
});