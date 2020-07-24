import React, { Component, useState } from 'react';
import { ProgressBar } from 'react-bootstrap';
import Campaign from '../../ethereum/campaign';
import web3 from '../../ethereum/web3';
import factory from '../../ethereum/factory';
import { Modal } from 'react-bootstrap';
import { Button, Form, FormControl } from 'react-bootstrap';
import { Badge, Card, CardBody, CardTitle, Row, Col } from 'reactstrap';
import Dropdown from 'react-bootstrap/Dropdown';


export class BasicTable extends Component {



   CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
      &#x25bc;
    </a>
  ));

  // forwardRef again here!
  // Dropdown needs access to the DOM of the Menu to measure it
   CustomMenu = React.forwardRef(
    ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
      const [value, setValue] = useState('');

      return (
        <div
          ref={ref}
          style={style}
          className={className}
          aria-labelledby={labeledBy}
        >
          <FormControl
            autoFocus
            className="mx-3 my-2 w-auto"
            placeholder="Type to filter..."
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
          <ul className="list-unstyled">
            {React.Children.toArray(children).filter(
              (child) =>
                !value || child.props.children.toLowerCase().startsWith(value)
            )}
          </ul>
        </div>
      );
    }
  );






  state = {
    list: [],
    add: '',
    camp: [],
    show: false,
  };

  handleClose = (event) => {
    event.preventDefault();
    this.setState({ show: false });
  };
  handleShow = (event) => {
    event.preventDefault();
    this.setState({ show: true });
  };

  dte(index) {
    let dd = this.state.camp[index];
    if (dd != null) {
      const milliseconds = dd['5'][0] * 1000; // 1575909015000
      const dateObject = new Date(milliseconds);
      const humanDateFormat = dateObject.toLocaleString();
      const ret = humanDateFormat.slice(0, 9);
      return ret;
    }
  }

  deal(index) {
    let dd = this.state.camp[index];
    if (dd != null) {
      return dd['0'];
    }
  }
  owner(index) {
    let dd = this.state.camp[index];
    if (dd != null) {
      return dd['1'];
    }
  }
  dest(index) {
    let dd = this.state.camp[index];
    if (dd != null) {
      return dd['3'];
    }
  }
  async componentDidMount() {
    try {
      const accounts = await web3.eth.getAccounts();
      const campaigns = await factory.methods
        .getDeployedBales(accounts[0])
        .call();
      this.setState({ list: campaigns });
      this.setState({ add: accounts[0] });
      console.log('@@@@@@@@@@@@2', campaigns[0]);

      this.state.list.map(async (listValue, index) => {
        console.log('index', listValue);
        const campaign = await Campaign(listValue);
        const summary = await campaign.methods.getSummary().call();
        console.log('summary', listValue, summary); //add
        let temp = [...this.state.camp, summary];
        await this.setState({ camp: temp });
      });
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
  }
  render() {
    return (
      <div>

        <div className="col-lg-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">
                <span>
                  <h1>Batch Overview</h1>
                </span>
              </h2>
              {/* <p className="card-description">
                {' '}
                Add className <code>.table-striped</code>
              </p> */}
              <div className="table-responsive">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th> Contract Address </th>
                      <th> Owner </th>
                      <th> Details </th>
                      <th> Date of Creation </th>
                      <th> Destination </th>
                      <th> Finalize </th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.list.map((listValue, index) => {
                      return (
                        <tr>
                          <td className="py-1">{listValue}</td>
                          <td>{this.owner(index)} </td>
                          <td>{this.deal(index)}</td>
                          <td> {this.dte(index)} </td>
                          <td> {'' + this.dest(index)} </td>
                          <td>
                            <Button variant="primary" onClick={this.handleShow}>
                              Transfer
                            </Button>

                            <Modal
                              show={this.show}
                              onHide={this.handleClose}
                              body
                              outline
                              color="primary"
                              className="border"
                            >
                              <Modal.Header closeButton>
                                <Modal.Title>Transfer Ownerships</Modal.Title>
                              </Modal.Header>
                              <Modal.Body>
                                <Dropdown>
                                  <Dropdown.Toggle
                                    as={this.CustomToggle}
                                    id="dropdown-custom-components"
                                  >
                                    Select address for Transfer Ownerships
                                  </Dropdown.Toggle>

                                  <Dropdown.Menu as={this.CustomMenu}>
                                    <Dropdown.Item eventKey="1">Red</Dropdown.Item>
                                    <Dropdown.Item eventKey="2">Blue</Dropdown.Item>
                                    <Dropdown.Item eventKey="3" active>
                                      Orange
                                    </Dropdown.Item>
                                    <Dropdown.Item eventKey="1">
                                      Red-Orange
                                    </Dropdown.Item>
                                  </Dropdown.Menu>
                                </Dropdown>
                              </Modal.Body>
                              <Modal.Footer>
                                <Button
                                  variant="secondary"
                                  onClick={this.handleClose}
                                >
                                  Close
                                </Button>
                                <Button
                                  variant="primary"
                                  onClick={this.handleClose}
                                >
                                  Save Changes
                                </Button>
                              </Modal.Footer>
                            </Modal>
                          </td>
                        </tr>
                      );
                    })}

                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BasicTable;
