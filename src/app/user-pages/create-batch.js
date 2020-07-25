import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import factory from '../../ethereum/factory';
import Campaign from '../../ethereum/campaign';
import web3 from '../../ethereum/web3';

export class BlankPage extends Component {
  state ={
    size : '',
    grade: '',
    color : '',
    mainadd : '0xdb62207c995AB52391eb6A18633a1b48B3b3FB26' // change this before deploying to rinkeby,
  };
  onSubmit = async (event) =>{
   event.preventDefault();
   try {
   const accounts =await web3.eth.getAccounts();
   const details = this.state.size +" "+this.state.grade+" "+this.state.color
   await factory.methods.createBales(details, this.state.addr).send({ from: accounts[0]});
   console.log(details);

 }
  catch(err){
   //this.setState({errorMessage: err.message});
 }
 //this.setState({loading: false});
 };
 clearField = () => {
   this.setState({size:'', grade:'',color:''})
   const details = this.state.size +" "+this.state.grade+" "+this.state.color
   console.log(details);
 }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Create New Batch</h4>
                <p className="card-description"> Bales Details </p>
                <form className="forms-sample" id ="del">
                  <Form.Group>
                    <label htmlFor="exampleInputUsername1">Size</label>
                    <Form.Control
                      type="text"
                      id="exampleInputUsername1"
                      placeholder="Size Of Bales"
                      size="lg"
                      value = {this.state.size}
                      onChange = {event =>
                        this.setState({size: event.target.value})}
                    />
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="exampleInputEmail1">Grade</label>
                    <Form.Control
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      placeholder="Grade of Bales"
                      value = {this.state.grade}
                      onChange = {event =>
                        this.setState({grade: event.target.value})}
                    />
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="exampleInputPassword1">Color</label>
                    <Form.Control
                      type="text"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Color of Bales"
                      value = {this.state.color}
                      onChange = {event =>
                        this.setState({color: event.target.value})}
                    />
                  </Form.Group>

                  <button type="submit" className="btn btn-primary mr-2" onClick={this.onSubmit}>
                    Submit
                  </button >
                  <button className="btn btn-light" onClick={this.clearField}>Cancel</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BlankPage;
