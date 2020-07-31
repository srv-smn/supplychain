import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import factory from '../../ethereum/factory';
import Campaign from '../../ethereum/campaign';
import web3 from '../../ethereum/web3';
import { DropdownButton, Dropdown } from 'react-bootstrap';

export class BlankPage extends Component {
  state = {
    size: '',
    grade: '',
    no: '',
    mainadd: '0xBFe09d37486C4De47d839717FCF16197b4C80CCA', // change this before deploying to rinkeby,
    types: '',
  };
  handleSelectGrade=(e)=>{
    console.log(e);
    this.setState({grade:e})
  }
  handleSelectTypes=(e)=>{
    console.log(e);
    this.setState({types:e})
  }
  onSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log('or bhai ');
      const details =
        this.state.size +
        ' ' +
        this.state.no +
        ' ' +
        this.state.grade +' '+
        this.state.types ;
      console.log('@@', details);
      const accounts = await web3.eth.getAccounts();
      console.log('acc', accounts[0]);
      await factory.methods
        .createBales(details, this.state.mainadd)
        .send({ from: accounts[0] });
    } catch (err) {
      //this.setState({errorMessage: err.message});
    }
    //this.setState({loading: false});
  };
  clearField = () => {
    this.setState({ size: '', grade: '', types: '', no: '' });
    const details =
      this.state.size +
      ' ' +
      this.state.grade +
      ' ' +
      this.state.types +
      ' ' +
      this.state.no;
    console.log(details);
  };

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Create New Batch</h4>
                <p className="card-description"> Bales Details </p>
                <form className="forms-sample" id="del">
                  <Form.Group>
                    <label htmlFor="exampleInputUsername1">Size</label>
                    <Form.Control
                      type="text"
                      id="exampleInputUsername1"
                      placeholder="Size Of Bales"
                      size="lg"
                      value={this.state.size}
                      onChange={(event) =>
                        this.setState({ size: event.target.value })
                      }
                    />
                  </Form.Group>

                  <Form.Group>
                    <label htmlFor="exampleInputPassword1">
                      Number of bales
                    </label>
                    <Form.Control
                      type="text"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Number of Bales"
                      value={this.state.no}
                      onChange={(event) =>
                        this.setState({ no: event.target.value })
                      }
                    />
                  </Form.Group>

                  <Form.Group>
                    <label htmlFor="exampleInputPassword1">
                      Grade Of Bales
                    </label>
                    <DropdownButton onSelect={this.handleSelectGrade}>
                        <Dropdown.Item eventKey="TD-1">TD-1</Dropdown.Item>
                        <Dropdown.Item eventKey="TD-2">TD-2</Dropdown.Item>
                        <Dropdown.Item eventKey="TD-3">TD-3</Dropdown.Item>
                        <Dropdown.Item eventKey="TD-4">TD-4</Dropdown.Item>
                        <Dropdown.Item eventKey="TD-5">TD-5</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="M1">M1</Dropdown.Item>
                        <Dropdown.Item eventKey="M2">M2</Dropdown.Item>
                        <Dropdown.Item eventKey="M3">M3</Dropdown.Item>
                        <Dropdown.Item eventKey="M4">M4</Dropdown.Item>
                        <Dropdown.Item eventKey="M5">M5</Dropdown.Item>
                        <Dropdown.Item eventKey="M6">M6</Dropdown.Item>
                    </DropdownButton>
                    <h4>You selected {this.state.grade}</h4>

                    </Form.Group>

                  {/* </Form.Group>
                  <Form.Group>
                    <label htmlFor="exampleInputEmail1">Grade</label>
                    <Form.Control
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      placeholder="Grade of Bales"
                      value={this.state.grade}
                      onChange={(event) =>
                        this.setState({ grade: event.target.value })
                      }
                    />
                  </Form.Group> */}

                  <Form.Group>
                    <label htmlFor="exampleInputPassword1">
                      Types of Bales
                    </label>
                    <DropdownButton onSelect={this.handleSelectTypes}>
                        <Dropdown.Item eventKey="White">White</Dropdown.Item>
                        <Dropdown.Item eventKey="Tossa">Tossa</Dropdown.Item>
                        <Dropdown.Item eventKey="Mesta">Mesta</Dropdown.Item>
                        <Dropdown.Item eventKey="Bimli">Bimli</Dropdown.Item>
                    </DropdownButton>
                    <h4>You selected {this.state.types}</h4>
                  </Form.Group>

                  {/* <Form.Group>
                    <label htmlFor="exampleInputPassword1">Type</label>
                    <Form.Control
                      type="text"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Color of Bales"
                      value={this.state.color}
                      onChange={(event) =>
                        this.setState({ color: event.target.value })
                      }
                    />
                  </Form.Group> */}
                  <br></br>

                  <button
                    type="submit"
                    className="btn btn-primary mr-2"
                    onClick={this.onSubmit}
                  >
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

export default BlankPage;
