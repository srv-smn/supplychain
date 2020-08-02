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
        <div className="d-flex align-items-center auth px-0">
          <div className="row w-100 mx-0">
            <div className="col-lg-4 mx-auto">
              <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                <div className="brand-logo">
                  <img src={require("../../assets/images/logo.PNG")} alt="logo" />
                </div>
                <h4>New here?</h4>
                <h6 className="font-weight-light">Signing up is easy. It only takes a few steps</h6>
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


                  <div className="mb-4">
                    <div className="form-check">
                      <label className="form-check-label text-muted">
                        <input type="checkbox" className="form-check-input" />
                        <i className="input-helper"></i>
                        I agree to all Terms & Conditions
                      </label>
                    </div>
                  </div>
                  <div className="mt-3">
                  <button type="submit" className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn">
                                      Submit
                                    </button>                  </div>
                  <div className="text-center mt-4 font-weight-light">
                    Already have an account? <Link to="/user-pages/login" className="text-primary">Login</Link>
                  </div>
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
