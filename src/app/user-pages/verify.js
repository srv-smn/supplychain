import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import { Badge, Card, CardBody, CardTitle, Row, Col } from 'reactstrap';
import { Modal } from 'react-bootstrap';
import { Button, Form } from 'react-bootstrap';

export class Verification extends Component {
  state = {
    show: false,
  };
  handleClose = (event) => {
    // event.preventDefault();
    this.setState({ show: false });
  };
  handleShow = (event) => {
    // event.preventDefault();
    this.setState({ show: true });
  };

  render() {
    return (
      <div>
        <Card>
          <CardBody>
            <div className="row">
              <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                <div className="white-box">
                  <h3 className="box-title">User Verification</h3>
                  <div className="table-responsive">
                    <table className="table product-overview">
                      <thead>
                        <tr>
                          <th>User Address</th>
                          <th>Name</th>
                          {/* <th>Contact No.</th>
                      <th>Role</th> */}
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <td text-align="center">100m</td>
                        <td text-align="center">5 kg</td>
                        <td text-align="center">Verified</td>
                        <td>
                          {/*
                      <Button variant="primary">
                        <i className="fas fa-angle-double-right"></i>Revoke
                      </Button> */}
                          <>
                            <Button
                              variant="primary btn-rounded"
                              onClick={this.handleShow}
                            >
                              <i className="fa fa-angle-double-right"></i>
                              Click to Verify
                            </Button>

                            <Modal
                              show={this.state.show}
                              onHide={this.handleClose}
                            >
                              <Modal.Header closeButton>
                                <Modal.Title>User Validation</Modal.Title>
                              </Modal.Header>
                              <Modal.Body>
                                <Form>
                                  <Form.Group
                                    as={Row}
                                    controlId="formPlaintextEmail"
                                  >
                                    <Form.Label column sm="2">
                                      User Address
                                    </Form.Label>
                                    <Col sm="10">
                                      <Form.Control
                                        plaintext
                                        readOnly
                                        defaultValue="923dhddhhdhd"
                                      />
                                    </Col>
                                  </Form.Group>
                                </Form>
                              </Modal.Body>
                              <Modal.Footer>
                                <Button
                                  variant="secondary"
                                  onClick={this.handleClose}
                                >
                                  Ignore
                                </Button>
                                <Button
                                  variant="primary"
                                  onClick={this.handleClose}
                                >
                                  Verify
                                </Button>
                              </Modal.Footer>
                            </Modal>
                          </>
                        </td>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
        <br></br>

        <Card>
          <CardBody>
            <div className="row">
              <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                <div className="white-box">
                  <h3 className="box-title">Verified Users</h3>
                  <div className="table-responsive">
                    <table className="table product-overview">
                      <thead>
                        <tr>
                          <th>User Address</th>
                          <th>Name</th>
                          {/* <th>Contact No.</th>
                <th>Role</th> */}
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <td text-align="center">100m</td>
                        <td text-align="center">5 kg</td>
                        <td text-align="center">Verified</td>
                        <td>
                          <Button variant="primary">
                            <i className="fa fa-angle-double-right"></i>Revoke
                          </Button>
                        </td>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Verification;
