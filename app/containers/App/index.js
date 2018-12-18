/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from 'containers/Header/Loadable';
import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import ChallengesPage from 'containers/ChallengesPage/Loadable';
import ChallengePage from 'containers/ChallengePage/Loadable';
import DashboardPage from 'containers/DashboardPage/Loadable';

export default function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/challenges" component={ChallengesPage} />
        <Route exact path="/challenge" component={ChallengePage} />
        <Route exact path="/dashboard" component={DashboardPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}
