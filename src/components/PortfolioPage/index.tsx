import * as React from 'react';

import Page from '../Page';

import data from './data';

import tceq from './Projects/tceq';
import template from './Projects/template';
import spursNation from './Projects/spurs';
import bracket from './Projects/bracket';
import sapd from './Projects/sapd';
import top100 from './Projects/top100';
import primaries from './Projects/primaries';
import podcastWidget from './Projects/podcastWidget';
import graphicQuiz from './Projects/graphicQuiz';
import distillr from './Projects/distillr';

import { RouteComponentProps, Route, Router } from 'react-router-dom';

const PortfolioPage = ({ match, location, history }: RouteComponentProps<{}>) => {
    return (
        <div>
            <Route exact={true} path={match.url} render={() => <Page text={data.text} links={data.links} commandMatches={data.commands} />} />
            <Route path={`${match.url}/top-100`} render={() => <Page text={top100.text} links={top100.links} commandMatches={top100.commands} />} />
            <Route
                path={`${match.url}/primaries`}
                render={() => <Page text={primaries.text} links={primaries.links} commandMatches={primaries.commands} />}
            />
            <Route
                path={`${match.url}/distillr`}
                render={() => <Page text={distillr.text} links={distillr.links} commandMatches={distillr.commands} />}
            />
            <Route
                path={`${match.url}/podcast-widget`}
                render={() => <Page text={podcastWidget.text} links={podcastWidget.links} commandMatches={podcastWidget.commands} />}
            />
            <Route
                path={`${match.url}/graphic-quiz`}
                render={() => <Page text={graphicQuiz.text} links={graphicQuiz.links} commandMatches={graphicQuiz.commands} />}
            />
            <Route path={`${match.url}/tceq`} render={() => <Page text={tceq.text} links={tceq.links} commandMatches={tceq.commands} />} />
            <Route
                path={`${match.url}/template`}
                render={() => <Page text={template.text} links={template.links} commandMatches={template.commands} />}
            />

            <Route
                path={`${match.url}/football-bracket`}
                render={() => <Page text={bracket.text} links={bracket.links} commandMatches={bracket.commands} />}
            />
            <Route path={`${match.url}/sapd-scraper`} render={() => <Page text={sapd.text} links={sapd.links} commandMatches={sapd.commands} />} />
        </div>
    );
};

export default PortfolioPage;