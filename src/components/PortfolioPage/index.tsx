import * as React from 'react';

import Page from '../Page';

import data from './data';

import tceq from './Projects/tceq';
import template from './Projects/template';
import oubliette from './Projects/oubliette';

import { RouteComponentProps, Route, Router } from 'react-router-dom';

const PortfolioPage = ({ match, location, history }: RouteComponentProps<{}>) => {
    return (
        <div>
            <Route exact={true} path={match.url} render={() => <Page text={data.text} links={data.links} commandMatches={data.commands} />} />
            <Route path={`${match.url}/tceq`} render={() => <Page text={tceq.text} links={tceq.links} commandMatches={tceq.commands} />} />
            <Route path={`${match.url}/template`} render={() => <Page text={template.text} links={template.links} commandMatches={template.commands} />} />
            <Route path={`${match.url}/oubliette`} render={() => <Page text={oubliette.text} links={oubliette.links} commandMatches={oubliette.commands} />} />
        </div>
    );
};

export default PortfolioPage;