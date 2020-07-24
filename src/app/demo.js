import React, { Component } from 'react';
import { Card, Button, Form, Input, Message } from 'semantic-ui-react';
import factory from '../ethereum/factory';
//import Layout from '../components/Layout' ;
// import {Link} from '../routes' ;
import web3 from '../ethereum/web3';

class CampaignIndex extends Component {
  state = {
    list: [],
    details: '',
    errorMessage: '',
    loading: false,
    addr: '0x2deF15153251DbB9b3C189907c99b44c4BCd13E1', // change this before deploying to rinkeby
  };

  onSubmitt = async (event) => {
    event.preventDefault();
    try {
      const accounts = await web3.eth.getAccounts();
      console.log('@@@@@', accounts[0]);
      const campaigns = await factory.methods
        .getDeployedBales(accounts[0])
        .call();
      console.log('######', campaigns);
      this.setState({ list: campaigns });
      //  Router.pushRoute('/');
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
  };

  onSubmit = async (event) => {
    event.preventDefault();
    this.setState({ loading: true, errorMessage: '' });
    try {
      const accounts = await web3.eth.getAccounts();
      await factory.methods
        .createBales(this.state.details, this.state.addr)
        .send({ from: accounts[0] });

      //Router.pushRoute('/');
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
    this.setState({ loading: false });
  };

  renderCampaigns() {
    const items = this.state.list.map((address) => {
      return {
        header: address,
        fluid: true,
      };
    });
    return <Card.Group items={items} />;
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.onSubmitt}>
          <Button primary>Show Details</Button>
        </Form>

        <a>
          <Button
            floated="right"
            content="Create Bales"
            icon="add circle"
            primary
          />
        </a>

        {this.renderCampaigns()}
        <h3>Create new Bales Batch</h3>
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <label>Details</label>
            <Input
              label="length , color"
              labelPosition="right"
              value={this.state.details}
              onChange={(event) =>
                this.setState({ details: event.target.value })
              }
            />
          </Form.Field>
          <Message error header="Oops" content={this.state.errorMessage} />
          <Button loading={this.state.loading} primary>
            Create
          </Button>
        </Form>
      </div>
    );
  }
}

export default CampaignIndex;
