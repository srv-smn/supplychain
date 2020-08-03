import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { Button, FormControl, InputGroup } from 'react-bootstrap';

import axios from 'axios';

export class Error404 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // persons: [],
      // users: [],
      id1: '',
      name: '',
      email: '',
      date: '',
      complain: '',
      status: 'unresolved',
    };
  }

  changeHandler = (e) => this.setState({ [e.target.name]: e.target.value });

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    // const employee = {
    //   name: this.state.name,
    //   phone: this.state.phone,

    // };

    axios
      .post('http://localhost:3009/comp', this.state)
      .then((response) => {
        console.log(response);
        // const persons = res.data;
        // this.setState({ persons });

      })
      .catch((error) => {
        console.log(error);
      });
      window.location.reload();
  };

  clearField = () => {
    this.setState({
      id1: '',
      name: '',
      email: '',
      date: '',
      complain: '',
      status: '',
    });
    const details =
      this.state.id +
      ' ' +
      this.state.name +
      ' ' +
      this.state.email +
      ' ' +
      this.state.date +
      ' ' +
      this.state.complain +
      '' +
      this.state.status;
    console.log(details);
  };

  render() {
    const { id1, name, email, date, complain, unresolved } = this.state;

    return (
      <div>
        <div className="row">
          <div className="col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Raise Ticket</h4>

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
                    <label htmlFor="exampleInputPassword1">E-mail</label>
                    <Form.Control
                      type="email"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Email"
                      name="email"
                      value={email}
                      onChange={this.changeHandler}
                    />
                  </Form.Group>

                  <Form.Group>
                    <label htmlFor="exampleInputEmail1">
                      Date of Complaint
                    </label>
                    <Form.Control
                      type="date"
                      className="form-control fas fa-calendar-alt"
                      id="exampleInputEmail1"
                      placeholder="Name"
                      name="date"
                      value={date}
                      onChange={this.changeHandler}
                    />
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="exampleInputEmail1">Complain</label>
                    <Form.Control
                      type="textarea"
                      className="form-control"
                      id="exampleInputEmail1"
                      placeholder="Name"
                      name="complain"
                      value={complain}
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
