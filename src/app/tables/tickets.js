import React, { Component, useState } from 'react';
import axios from 'axios';

export class Ttable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comp: [],
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:3009/comp')
      //   .then((response) => {
      //     console.log(response);
      //     this.setState({ posts: response.data });
      //     // const persons = res.data;
      //     // this.setState({ persons });
      .then((res) => {
        const comp = res.data;
        this.setState({ comp });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="col-lg-12 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <h2 className="card-title">
              <span>
                <h1>Tickets History</h1>
              </span>
            </h2>

            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th> ID </th>
                    <th> Name </th>
                    <th>Complain Date</th>
                    <th> Status </th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.comp.map((listValue, index) => {
                    return (
                      <tr>
                        <td>{listValue.id1}</td>
                        <td>{listValue.name} </td>
                        <td>{listValue.date}</td>
                        <td>{listValue.status}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Ttable;
