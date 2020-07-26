import React, { Component, Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Spinner from '../app/shared/Spinner';

const Dashboard2 = lazy(() => import('./dashboard/Dashboard2'));

const BasicElements = lazy(() => import('./form-elements/batch'));

const BasicTable = lazy(() => import('./tables/overview'));
const Verification = lazy(() => import('./user-pages/verify'));

const FontAwesome = lazy(() => import('./icons/FontAwesome'));

const ChartJs = lazy(() => import('./charts/ChartJs'));

const Newbatch = lazy(() => import('./user-pages/create-batch'));
const CreateStk = lazy(() => import('./user-pages/create-stk'));
// Admin Routing
class AppRoutes extends Component {
  render() {
    return (
      <Suspense fallback={<Spinner />}>
        <Switch>
    
          <Route exact path="/dashboard2" component={Dashboard2} />

          <Route path="/form-Elements/batch" component={BasicElements} />

          <Route path="/tables/overview" component={BasicTable} />

          <Route path="/icons/font-awesome" component={FontAwesome} />

          <Route path="/charts/chart-js" component={ChartJs} />

          <Route path="/user-pages/create-stk" component={CreateStk} />

          <Route path="/user-pages/create-batch" component={Newbatch} />
          <Route path="/user-pages/verify" component={Verification} />

          <Redirect to="/dashboard2" />
        </Switch>
      </Suspense>
    );
  }
}

export default AppRoutes;
