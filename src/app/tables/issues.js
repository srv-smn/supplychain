import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

import axios from 'axios';

export class Error404 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comp: [],
      a: null,
      b: '',
      status: 'resolve',
    };
  }

  removeMovie = (e, comp) => {
    e.preventDefault();

    if (this.props.removeClick) {
      this.props.removeClick(comp);
    }
  };

  componentDidMount() {
    axios
      .get('http://localhost:3009/comp/')

      .then((res) => {
        const comp = res.data;
        this.setState({ comp });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  update() {
    if (this.state.a != null) return this.state.a.name;
  }

  deleteRow(d, e) {
    // const emp = {
    //   id1: d.id1,
    //   name: d.name,
    //   email: d.email,
    //   date: d.date,
    //   complain: d.complain,
    //   status: 'resolved',
    // };

    axios
      .put(`http://localhost:3009/comp/${d.id}`, {
        id1: d.id1,
        name: d.name,
        email: d.email,
        date: d.date,
        complain: d.complain,
        status: 'resolved',
      })

      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
    window.location.reload();
  }
  render() {
    const { comp } = this.state;
    return (
      <div>
        <div className="col-lg-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">
                <span>
                  <h1>Complain Overview</h1>
                </span>
              </h2>
              {/* <p className="card-description">
                {' '}
                Add className <code>.table-striped</code>
              </p> */}
              <div className="table-responsive">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th> ID</th>
                      <th> Name </th>
                      <th> Email </th>
                      <th> Complain </th>
                      {/* <th> Date of Creation </th>
                      <th> Destination </th> */}
                    </tr>
                  </thead>

                  <tbody>
                    {this.state.comp.map((listValue, index) => {
                      if (listValue.status == 'unresolved')
                        return (
                          <tr>
                            <td>{listValue.id1}</td>
                            <td>{listValue.name} </td>
                            <td>{listValue.email}</td>
                            <td>{listValue.complain}</td>
                            <td>
                              {' '}
                              <Button
                                variant="primary"
                                onClick={(e) => this.deleteRow(listValue, e)}
                              >
                                Resolved
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
      </div>
    );
  }
}

export default Error404;
