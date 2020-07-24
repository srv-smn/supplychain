import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

export class BlankPage extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Default form</h4>
                <p className="card-description"> Basic form layout </p>
                <form className="forms-sample">
                  <Form.Group>
                    <label htmlFor="exampleInputUsername1">Username</label>
                    <Form.Control
                      type="text"
                      id="exampleInputUsername1"
                      placeholder="Username"
                      size="lg"
                    />
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <Form.Control
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      placeholder="Email"
                    />
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <Form.Control
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Password"
                    />
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="exampleInputConfirmPassword1">
                      Confirm Password
                    </label>
                    <Form.Control
                      type="password"
                      className="form-control"
                      id="exampleInputConfirmPassword1"
                      placeholder="Password"
                    />
                  </Form.Group>
                  <div className="form-check">
                    <label className="form-check-label text-muted">
                      <input type="checkbox" className="form-check-input" />
                      <i className="input-helper"></i>
                      Remember me
                    </label>
                  </div>
                  <button type="submit" className="btn btn-primary mr-2">
                    Submit
                  </button>
                  <button className="btn btn-light">Cancel</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BlankPage;
