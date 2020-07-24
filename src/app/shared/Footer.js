import React, { Component } from 'react';
import ReactCountryFlag from 'react-country-flag';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container-fluid">
          <div className="d-sm-flex justify-content-center justify-content-sm-between">
            <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">
              Copyright © 2020{' '}
              <a href="#" target="_blank" rel="noopener noreferrer">
                Team Connected
              </a>
              . All rights reserved.
            </span>
            <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">
              Hand-crafted & made in{' '}
              <ReactCountryFlag
                countryCode="IN"
                style={{ width: '2em', height: '2em' }}
                svg
              />
            </span>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
