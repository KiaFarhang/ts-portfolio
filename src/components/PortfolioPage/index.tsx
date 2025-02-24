import * as React from 'react';

import Page from '../Page';

import data from './data';

import opensecrets from './Projects/opensecrets';
import refactoring from './Projects/refactoring';

import { RouteComponentProps, Route } from 'react-router-dom';

const PortfolioPage = ({ match, location, history }: RouteComponentProps<{}>) => {
    return (
        <div>
            <Route exact={true} path={match.url} render={() => <Page text={data.text} links={data.links} commandMatches={data.commands} />} />
            <Route path={`${match.url}/opensecrets`} render={() => <Page text={opensecrets.text} links={opensecrets.links} commandMatches={opensecrets.commands} />} />
            <Route path={`${match.url}/refactoring`} render={() => <Page text={refactoring.text} links={refactoring.links} commandMatches={refactoring.commands} />} />
        </div>
    );
};

export default PortfolioPage;