import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import factory from '../../ethereum/factory';
import Campaign from '../../ethereum/campaign';
import web3 from '../../ethereum/web3';


export class Register extends Component {
  state ={
    name : '',
    location: '',
    uid : ''
  };

  onSubmit = async (event) =>{
   event.preventDefault();
   try {
     console.log(this.state.uid, this.state.location, this.state.name);
    const accounts =await web3.eth.getAccounts();
    await factory.methods.createStakeholders(this.state.uid, this.state.location, this.state.name).send({ from: accounts[0]});
  }
  catch(err){

  }

  };

  render() {
    return (
      <div>
        <div className="d-flex align-items-center auth px-0">
          <div className="row w-100 mx-0">
            <div className="col-lg-4 mx-auto">
              <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                <div className="brand-logo">
                  <img src={require("../../assets/images/logo.svg")} alt="logo" />
                </div>
                <h4>New here?</h4>
                <h6 className="font-weight-light">Signing up is easy. It only takes a few steps</h6>
                <form className="pt-3">
                  <div className="form-group">
                    <input type="text" className="form-control form-control-lg" id="exampleInputUsername1" placeholder="Unique Id " value = {this.state.uid}
                    onChange = {event =>
                      this.setState({uid: event.target.value})}/>
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control form-control-lg" id="exampleInputPassword1" placeholder="Name" value = {this.state.name}
                    onChange = {event =>
                      this.setState({name: event.target.value})}/>
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control form-control-lg" id="exampleInputEmail1" placeholder="Location/City"
                    value = {this.state.location}
                    onChange = {event =>
                      this.setState({location: event.target.value})}/>
                  </div>


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
                    <button className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" onClick={this.onSubmit}>SIGN UP</button>
                  </div>
                  <div className="text-center mt-4 font-weight-light">
                    Already have an account? <Link to="/user-pages/login" className="text-primary">Login</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Register
