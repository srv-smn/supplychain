import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import { Badge, Card, CardBody, CardTitle, Row, Col } from 'reactstrap';
import { Modal,Button, Form } from 'react-bootstrap';
import factory from '../../ethereum/factory';
import Campaign from '../../ethereum/campaign';
import web3 from '../../ethereum/web3';

export class Error404 extends Component {
  state = {
    list: [],
    add: '',
    camp: [],
    validated: []
  };

  onSubmit = async (event,contractAdd) =>{
    try {
    const campaign = await Campaign(contractAdd);
    await campaign.methods.conformValidity().send({ from: this.state.add});
    window.location.reload();
  }
   catch(err){

  }
  };

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
        let temp = [...this.state.camp, summary];
        await this.setState({ camp: temp });
        let fortemp = [...this.state.validated, res];
        await this.setState({ validated: fortemp });
      });
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
  }

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

  deal(index) {//details
    let dd = this.state.camp[index];
    if (dd != null) {
      return dd['0'];
    }
  }
   ifValidated(index) {// if bales is validated
    let dd = this.state.validated[index]
     return dd;
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

  render() {
    return (
      <div>

      <Card>
        <CardBody>
          <div className="row">
            <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
              <div className="white-box">
                <h3 className="box-title">New Batch</h3>
                <div className="table-responsive">
                  <table className="table product-overview">
                    <thead>
                      <tr>
                        <th>Details</th>
                        <th>Date of Creation</th>
                        {/* <th>Contact No.</th>
              <th>Role</th> */}
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                    {this.state.list.map((listValue, index) => {
                      if(!this.ifValidated(index))
                      return (
                        <tr>
                        <td text-align="center">{listValue}</td>
                        <td text-align="center">{this.deal(index)}</td>
                        <td text-align="center">{this.dte(index)}</td>
                        <td>
                          <Button variant="primary" onClick={(e) =>this.onSubmit(e,listValue)}>
                            <i className="fa fa-angle-double-right"></i>Validate
                          </Button>
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
        </CardBody>
      </Card>
    </div>
    );
  }
}

export default Error404;
