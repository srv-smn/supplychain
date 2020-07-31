import React, { Component } from 'react';
import { Button, Form, FormControl, InputGroup } from 'react-bootstrap';
import factory from '../../ethereum/factory';
import Campaign from '../../ethereum/campaign';
import web3 from '../../ethereum/web3';
import  { Link } from 'react-router-dom'

export class BlankPage extends Component {
  state = {
    uid:'',
    cntrct:'',

  };


  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Search User and contract</h4>
                <InputGroup className="mb-3" value = {this.state.uid}
                onChange = {event =>
                  this.setState({uid: event.target.value})}>
                  <FormControl
                    placeholder="Recipient's userID"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                  <InputGroup.Append>
                  <Link to = {`/adtu/${this.state.uid}`}>
                    <Button variant="outline-secondary" >Search</Button>
                  </Link>
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
