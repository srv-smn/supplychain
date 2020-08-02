import React, { Component } from 'react';
import { Button, Form, FormControl, InputGroup,Card } from 'react-bootstrap';
import factory from '../../ethereum/factory';
import Campaign from '../../ethereum/campaign';
import web3 from '../../ethereum/web3';
import  { Link } from 'react-router-dom'

export class BlankPage extends Component {
  state = {
    id:'',
    ctr:'',

  };

  onSubmit = async (event) => {
    event.preventDefault();
    try {
      const accounts = await web3.eth.getAccounts();
      await factory.methods
        .notEligible(this.state.id)
        .send({ from: accounts[0] });

      const addr = await factory.methods
          .addFrmUid(this.state.id)
          .call();
      await factory.methods.createStakeholders(addr,'Account Rejected','Account Rejected','Account Rejected').send({ from: accounts[0]});

    } catch (err) {
      //this.setState({errorMessage: err.message});
    }
    //this.setState({loading: false});
  };

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Block Users</h4>
                <InputGroup className="mb-3" value = {this.state.id}
                onChange = {event =>
                  this.setState({id: event.target.value})}>
                  <FormControl
                    placeholder="Recipient's userID"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                  <InputGroup.Append>
                    <Button variant="outline-secondary" onClick={this.onSubmit}>Reject</Button>
                  </InputGroup.Append>
                </InputGroup>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BlankPage;
