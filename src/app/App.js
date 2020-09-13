import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './App.scss';
import AppRoutes from './AppRoutes';
import AppRoute from './AppRoute';
import Navbar from './shared/Navbar';
import Sidebar from './shared/Sidebar';
import User_Sidebar from './shared/User_Sidebar';
import Footer from './shared/Footer';
import factory from '../ethereum/factory';
import web3 from '../ethereum/web3';

class App extends Component {
  state = {
    owner: false
  };
  async componentDidMount() {
    window.ethereum.enable();
    const accounts = await web3.eth.getAccounts();
    const curOwner = await factory.methods.owner().call();
    if(curOwner === accounts[0]){
      this.setState({owner:true});
    }
    this.onRouteChanged();
  }
  render() {
    let navbarComponent = !this.state.isFullPageLayout ? <Navbar /> : '';
    let sidebarComponent;
    let appRoute
    if (!this.state.owner) {
      appRoute = <AppRoutes /> ;
      sidebarComponent = !this.state.isFullPageLayout ? <User_Sidebar /> : '';
    } else {
      appRoute = <AppRoute />;
      sidebarComponent = !this.state.isFullPageLayout ? <Sidebar /> : '';

    }

    let footerComponent = !this.state.isFullPageLayout ? <Footer /> : '';
    return (
      <div className="container-scroller">
        {navbarComponent}
        <div className="container-fluid page-body-wrapper">
          {sidebarComponent}
          <div className="main-panel">
            <div className="content-wrapper">
              {appRoute}
            </div>
            {footerComponent}
          </div>
        </div>
      </div>
    );
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  onRouteChanged() {
    console.log('ROUTE CHANGED');
    window.scrollTo(0, 0);
    const fullPageLayoutRoutes = [
      '/user-pages/login',
      '/user-pages/login-2',
      '/user-pages/register',
      '/user-pages/register-2',
      '/user-pages/lockscreen',
      '/error-pages/error-404',
      '/error-pages/error-500',
      '/general-pages/landing-page',
    ];
    for (let i = 0; i < fullPageLayoutRoutes.length; i++) {
      if (this.props.location.pathname === fullPageLayoutRoutes[i]) {
        this.setState({
          isFullPageLayout: true,
        });
        document
          .querySelector('.page-body-wrapper')
          .classList.add('full-page-wrapper');
        break;
      } else {
        this.setState({
          isFullPageLayout: false,
        });
        document
          .querySelector('.page-body-wrapper')
          .classList.remove('full-page-wrapper');
      }
    }
  }
}

export default withRouter(App);
