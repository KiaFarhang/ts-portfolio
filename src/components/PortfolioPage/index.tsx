import * as React from 'react';

import Page from '../Page';

import data from './data';

import tceq from './Projects/tceq';
import template from './Projects/template';
import spursNation from './Projects/spurs';
import bracket from './Projects/bracket';
import sapd from './Projects/sapd';

import { RouteComponentProps, Route, Router } from 'react-router-dom';

const PortfolioPage = ({ match, location, history }: RouteComponentProps<{}>) => {
    return (
        <div>
            <Route exact={true} path={match.url} render={() => <Page text={data.text} links={data.links} commandMatches={data.commands} />} />
            <Route path={`${match.url}/tceq`} render={() => <Page text={tceq.text} links={tceq.links} commandMatches={tceq.commands} />} />
            <Route path={`${match.url}/template`} render={() => <Page text={template.text} links={template.links} commandMatches={template.commands} />} />
            <Route path={`${match.url}/spurs-nation`} render={() => <Page text={spursNation.text} links={spursNation.links} commandMatches={spursNation.commands} />} />
            <Route path={`${match.url}/football-bracket`} render={() => <Page text={bracket.text} links={bracket.links} commandMatches={bracket.commands} />} />
            <Route path={`${match.url}/sapd-scraper`} render={() => <Page text={sapd.text} links={sapd.links} commandMatches={sapd.commands} />} />
        </div>
    );
};

export default PortfolioPage;