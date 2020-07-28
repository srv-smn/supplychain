import React, { Component, Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Spinner from '../app/shared/Spinner';

const Dashboard = lazy(() => import('./dashboard/Dashboard'));

const BasicElements = lazy(() => import('./form-elements/batch'));

const BasicTable = lazy(() => import('./tables/overview'));

const FontAwesome = lazy(() => import('./icons/FontAwesome'));

const Login = lazy(() => import('./user-pages/Login'));
const ChartJs = lazy(() => import('./charts/ChartJs'));
const History = lazy(() => import('./user-pages/history'));
const Newbatch = lazy(() => import('./user-pages/new-batch'));
const Cbatch = lazy(() => import('./user-pages/create-batch'));
const Register = lazy(() => import('./user-pages/Register'));
const Demo = lazy(() => import('./form-elements/batch'));
//User routing
class AppRoutes extends Component {
  render() {
    return (
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route path="/dashboard" component={Dashboard} />

          <Route path="/form-Elements/batch" component={BasicElements} />

          <Route path="/tables/overview" component={BasicTable} />

          <Route path="/icons/font-awesome" component={FontAwesome} />

          <Route path="/charts/chart-js" component={ChartJs} />

          <Route path="/user-pages/create-batch" component={Cbatch} />

          <Route path="/user-pages/register" component={Register} />


          <Route path="/user-pages/login" component={Login} />

          <Route path="/user-pages/history" component={History} />

          <Route path="/user-pages/new-batch" component={Newbatch} />
          <Route exact path="/:id" component={Demo} />

          <Redirect to="/dashboard" />
        </Switch>
      </Suspense>
    );
  }
}

export default AppRoutes;
