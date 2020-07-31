import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import web3 from '../../ethereum/web3';

import axios from 'axios';

export class Error404 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // persons: [],
      // users: [],
      addr:'',
      id1: '',
      name: '',
      loc: '',
    };
  }

  // this.handleNameChange = this.handleNameChange.bind(this);

  // this.handlePhoneChange = this.handlePhoneChange.bind(this);

  changeHandler = async (e) => {this.setState({ [e.target.name]: e.target.value });
  const accounts =await web3.eth.getAccounts();
  this.setState({addr:accounts[0]});
}

  // handleNameChange(e) {
  //   this.setState({ name: e.target.value });
  // }
  // handlePhoneChange(e) {
  //   this.setState({ phone: e.target.value });
  // }

  // componentDidMount() {
  //   axios.get('/user').then((res) => {
  //     const persons = res.data;
  //     this.setState({ persons });
  //   });
  // }

  submitHandler = (e) => {
    e.preventDefault();

    console.log(this.state);
    // const employee = {
    //   name: this.state.name,
    //   phone: this.state.phone,

    // };

    axios
      .post('http://localhost:3009/posts', this.state)
      .then((response) => {
        console.log(response);
        // const persons = res.data;
        // this.setState({ persons });
      })
      .catch((error) => {
        console.log(error);
      });
      window.location.reload(false);
  };

  clearField = () => {
    this.setState({ id1: '', name: '', loc: '' });
    const details =
      this.state.id + ' ' + this.state.name + ' ' + this.state.loc;
    console.log(details);
  };

  render() {
    const { id1, name, loc } = this.state;

    return (
      <div>
        {/* <form onSubmit={this.submitHandler}> */}
        {/* <div>
            <input
              type="text"
              name="userId"
              value={userId}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <input
              type="text"
              name="title"
              value={title}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <input
              type="text"
              name="body"
              value={body}
              onChange={this.changeHandler}
            />
          </div>

          <button type="submit">Submit</button> */}
        {/* </form> */}

        <div className="row">
          <div className="col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Create Stakeholder</h4>

                <form
                  className="forms-sample"
                  id="del"
                  onSubmit={this.submitHandler}
                >
                  <Form.Group>
                    <label htmlFor="exampleInputUsername1">Id</label>
                    <Form.Control
                      type="text"
                      id="exampleInputUsername1"
                      name="id1"
                      placeholder="Id"
                      size="lg"
                      value={id1}
                      onChange={this.changeHandler}
                    />
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="exampleInputEmail1">Name</label>
                    <Form.Control
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      placeholder="Name"
                      name="name"
                      value={name}
                      onChange={this.changeHandler}
                    />
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="exampleInputPassword1">Location</label>
                    <Form.Control
                      type="text"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Location"
                      name="loc"
                      value={loc}
                      onChange={this.changeHandler}
                    />
                  </Form.Group>

                  <button type="submit" className="btn btn-primary mr-2">
                    Submit
                  </button>
                  <button className="btn btn-light" onClick={this.clearField}>
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Error404;
