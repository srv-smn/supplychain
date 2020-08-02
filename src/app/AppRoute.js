import React, { Component, Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Spinner from '../app/shared/Spinner';


const Dashboard2 = lazy(() => import('./dashboard/Dashboard2'));
const Demo = lazy(() => import('./form-elements/batch'));
const Register = lazy(() => import('./user-pages/create-stk'));
const AdToU = lazy(() => import('./user-pages/admin_to_user'));
const BasicElements = lazy(() => import('./form-elements/batch'));

const BasicTable = lazy(() => import('./tables/overview'));
const Verification = lazy(() => import('./user-pages/verify'));

const FontAwesome = lazy(() => import('./icons/FontAwesome'));

const ChartJs = lazy(() => import('./charts/ChartJs'));

const Fetch = lazy(() => import('./user-pages/fetch'));
const Search = lazy(() => import('./user-pages/search'));
const Reject = lazy(() => import('./user-pages/reject'));

const Newbatch = lazy(() => import('./user-pages/create-batch'));
// Admin Routing
class AppRoutes extends Component {
  render() {
    return (
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route path="/user-pages/rej" component={Reject} />
          <Route exact path="/dashboard2" component={Dashboard2} />

          <Route path="/form-Elements/batch" component={BasicElements} />

          <Route path="/tables/overview" component={BasicTable} />

          <Route path="/icons/font-awesome" component={FontAwesome} />

          <Route path="/charts/chart-js" component={ChartJs} />

          <Route path="/user-pages/fetch" component={Fetch} />



          <Route path="/user-pages/register" component={Register} />

          <Route path="/user-pages/search" component={Search} />

          <Route path="/user-pages/create-batch" component={Newbatch} />
          <Route path="/user-pages/verify" component={Verification} />
          <Route exact path="/adtu/:id" component={AdToU} />
          <Route exact path="/:id" component={Demo} />

          <Redirect to="/dashboard2" />
        </Switch>
      </Suspense>
    );
  }
}

export default AppRoutes;
