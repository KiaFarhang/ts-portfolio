import * as React from 'react';

import Page from '../Page';

import data from './data';

import tceq from './Projects/tceq';
import AboutPage from '../AboutPage';

import { RouteComponentProps, Route, Router } from 'react-router-dom';

const PortfolioPage = ({ match, location, history }: RouteComponentProps<{}>) => {
    return (
        <div>
            <Route exact={true} path={match.url} render={() => <Page text={data.text} links={data.links} commandMatches={data.commands} />} />
            <Route path={`${match.url}/tceq`} render={() => <Page text={tceq.text} links={tceq.links} commandMatches={tceq.commands} />} />
        </div>
    );
};

export default PortfolioPage;