import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import factory from '../../ethereum/factory';
import Campaign from '../../ethereum/campaign';
import web3 from '../../ethereum/web3';

import axios from 'axios';

export class Error404 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //    persons: [],
      posts: [],
      res: [],
    };
  }
  onSubmit = async (event, addr,id1,loc,name,id) =>{
   event.preventDefault();
   console.log(addr,id,loc,name);
   try {

    const accounts =await web3.eth.getAccounts();
    await factory.methods.createStakeholders(addr,id1,loc,name).send({ from: accounts[0]});
    axios.delete(`http://localhost:3009/posts/${id}`).then((res) => {
      console.log(res);
      console.log(res.data);

      const posts = this.state.posts.filter((item) => item.id !== id);
      this.setState({ posts });
    });
  }
  catch(err){

  }

  };



  async componentDidMount() {
    axios
      .get('http://localhost:3009/posts')
      .then((response) => {
        console.log(response);
        this.setState({ posts: response.data });
        // const persons = res.data;
        // this.setState({ persons });
      })
      .catch((error) => {
        console.log(error);
      });


  }
  render() {
    const { posts } = this.state;
    return (
      <div>
        <div className="col-lg-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">
                <span>
                  <h1>Batch Overview</h1>
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
                      <th> Address</th>
                      <th> ID</th>
                      <th> Name </th>
                      <th> Location </th>
                      {/* <th> Date of Creation </th>
                      <th> Destination </th> */}
                    </tr>
                  </thead>

                  <tbody>
                    {/* {posts.length
                      ? posts.map((post) => (
                          <div key={post.id}>{post.name}</div>
                        ))
                      : null} */}

                    {/* return (
                          <tr>
                            <Link to={`/${listValue}`}>
                              <td className="py-1">{listValue}</td>
                            </Link>
                            <td>{this.owner(index)} </td>
                            <td>{this.deal(index)}</td>
                            <td> {this.dte(index)} </td>
                            <td> {'' + this.dest(index)} </td>

                            </tr>
                         */}
                    {this.state.posts.map((listValue, index) => {
                      if(listValue.name != '' && listValue.id1!=''&& index !=0 )
                      return (
                        <tr>
                        <td>{listValue.addr}</td>
                          <td>{listValue.id1}</td>
                          <td>{listValue.name} </td>
                          <td>{listValue.loc}</td>
                          <td>
                            <Button variant="primary" onClick={(e) =>this.onSubmit(e,listValue.addr,listValue.id1,listValue.loc,listValue.name,listValue.id)}>
                              Confirm
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
        {/*
        {posts.length
          ? posts.map((post) => <div key={post.id}>{post.title}</div>)
          : null} */}
      </div>
    );
  }
}

export default Error404;
