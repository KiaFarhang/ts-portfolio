import * as React from 'react';

import Page from '../Page';

import data from './data';

const AboutPage = () => {
    return (
        <Page text={data.text} links={data.links} commandMatches={data.commands} />
    );
};

export default AboutPage;