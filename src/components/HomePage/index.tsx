import * as React from 'react';

import Page from '../Page';

import data from './data';

const HomePage = () => {
    return (
        <Page text={data.text} links={data.links} commandMatches={data.commands} />
    );
};

export default HomePage;