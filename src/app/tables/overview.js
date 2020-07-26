import React, { Component, useState } from 'react';
import { ProgressBar } from 'react-bootstrap';
import factory from '../../ethereum/factory';
import Campaign from '../../ethereum/campaign';
import web3 from '../../ethereum/web3';
import { Modal } from 'react-bootstrap';
import { Button, Form, FormControl,  InputGroup } from 'react-bootstrap';
import { Badge, Card, CardBody, CardTitle, Row, Col } from 'reactstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import {Link} from 'react-router-dom';

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
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
const CustomMenu = React.forwardRef(
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

export class BasicTable extends Component {
  state = {
    list: [],
    add: '',
    camp: [],
    show: false,
    validated: [],
    transfer: ''
  };

  onSubmit = async (event,contractAdd) =>{
    try {
    const campaign = await Campaign(contractAdd);
    await campaign.methods.transfer_ownership(this.state.transfer).send({ from: this.state.add});
    window.location.reload();
  }
   catch(err){

  }
  };



  handleClose = (event) => {
    this.setState({ show: false });
  };
  handleShow = (event) => {
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
  ifValidated(index) {// if bales is validated
   let dd = this.state.validated[index]
    return dd;
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
      await window.ethereum.enable();
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
        const res = await campaign.methods.validated(this.state.add).call();
        const summary = await campaign.methods.getSummary().call();
        console.log('summary', listValue, summary); //add
        let temp = [summary, ...this.state.camp];
        await this.setState({ camp: temp });
        let fortemp = [res, ...this.state.validated];
        await this.setState({ validated: fortemp });
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
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.list.map((listValue, index) => {
                      if(this.ifValidated(index))
                      return (
                        <tr>
                        <Link to = {`/${listValue}`}>
                          <td className="py-1">{listValue}</td>
                        </Link>
                          <td>{this.owner(index)} </td>
                          <td>{this.deal(index)}</td>
                          <td> {this.dte(index)} </td>
                          <td> {'' + this.dest(index)} </td>
                          <td>
                            <Button variant="primary" onClick={this.handleShow}>
                              Transfer
                            </Button>

                            <Modal
                              show={this.state.show}
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
                              <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                  <InputGroup.Text id="basic-addon1">
                                    User-ID
                                  </InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                  placeholder="User"
                                  aria-label="Username"
                                  aria-describedby="basic-addon1"
                                  value = {this.state.transfer}
                                  onChange = {event =>
                                    this.setState({transfer: event.target.value})}
                                />
                              </InputGroup>
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
                                  onClick={(e) =>this.onSubmit(e,listValue)}
                                >
                                  Save Changes
                                </Button>
                              </Modal.Footer>
                            </Modal>
                          </td>
                        </tr>
                      );
                    })}
                    <tr>
                      <td className="py-1">
                        <img
                          src={require('../../assets/images/faces/face2.jpg')}
                          alt="user icon"
                        />
                      </td>
                      <td> Messsy Adam </td>
                      <td>
                        <ProgressBar variant="danger" now={75} />
                      </td>
                      <td> $245.30 </td>
                      <td> July 1, 2015 </td>
                    </tr>

                    {/* <tr>
                      <td className="py-1">
                        <img
                          src={require('../../assets/images/faces/face3.jpg')}
                          alt="user icon"
                        />
                      </td>
                      <td> John Richards </td>
                      <td>
                        <ProgressBar variant="warning" now={90} />
                      </td>
                      <td> $138.00 </td>
                      <td> Apr 12, 2015 </td>
                    </tr>
                    <tr>
                      <td className="py-1">
                        <img
                          src={require('../../assets/images/faces/face4.jpg')}
                          alt="user icon"
                        />
                      </td>
                      <td> Peter Meggik </td>
                      <td>
                        <ProgressBar variant="primary" now={50} />
                      </td>
                      <td> $ 77.99 </td>
                      <td> May 15, 2015 </td>
                    </tr>
                    <tr>
                      <td className="py-1">
                        <img
                          src={require('../../assets/images/faces/face5.jpg')}
                          alt="user icon"
                        />
                      </td>
                      <td> Edward </td>
                      <td>
                        <ProgressBar variant="danger" now={60} />
                      </td>
                      <td> $ 160.25 </td>
                      <td> May 03, 2015 </td>
                    </tr>
                    <tr>
                      <td className="py-1">
                        <img
                          src={require('../../assets/images/faces/face6.jpg')}
                          alt="user icon"
                        />
                      </td>
                      <td> John Doe </td>
                      <td>
                        <ProgressBar variant="info" now={65} />
                      </td>
                      <td> $ 123.21 </td>
                      <td> April 05, 2015 </td>
                    </tr>
                    {this.deal()}
                    <tr>
                      <td className="py-1">
                        <img
                          src={require('../../assets/images/faces/face7.jpg')}
                          alt="user icon"
                        />
                      </td>
                      <td> Henry Tom </td>
                      <td>
                        <ProgressBar variant="warning" now={20} />
                      </td>
                      <td> $ 150.00 </td>
                      <td> June 16, 2015 </td>
                    </tr>  */}
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
