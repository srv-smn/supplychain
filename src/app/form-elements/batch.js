import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import { Card } from 'reactstrap';
import Campaign from '../../ethereum/campaign';
import web3 from '../../ethereum/web3';
import factory from '../../ethereum/factory';
import { Modal } from 'react-bootstrap';

export class BasicElements extends Component {
  state = {
    balesAddr: '',
    startDate: new Date(),
    details:'',
    owner:'',
    origin:'',
    destination:false,
    ownerships:[],
    dates:[],
    ownersdet:[],
  };


  dte(index) {
    let dd = this.state.dates[index];
    if (dd != null) {
      const milliseconds = dd * 1000; // 1575909015000
      const dateObject = new Date(milliseconds);
      const humanDateFormat = dateObject.toLocaleString();
      const ret = humanDateFormat;
      return ret;
    }
  }
   location(addr) {
     const stakeholder = this.state.ownersdet[addr]
      console.log("ye dekho",stakeholder)
      if (stakeholder != null){
      const dt = stakeholder[1];
      return dt;
    }
  }
constructor(props){
  super(props);
}

  handleChange = (date) => {
    this.setState({
      startDate: date
    });
  };

  async componentDidMount() {
    try {
      const {match: {params}} = this.props
      this.setState({balesAddr: params.id})
      await window.ethereum.enable();
      const campaign = await Campaign(params.id);
      const summary = await campaign.methods.getSummary().call();
      console.log("Summary",summary);
      await this.setState({ details: summary[0] ,owner: summary[1],origin: summary[2] ,destination: summary[3],ownerships: summary[4] ,dates: summary[5]});

       this.state.ownerships.map(async (listValue, index) => {
        let det = await factory.methods.stakeholders(listValue).call();
        console.log("owners det",det);
        let temp = [...this.state.ownersdet, det];
        await this.setState({ ownersdet: temp });
      });


    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
  }

  render() {
    return (
      <div>

      <h1>{}</h1>
        <div className="row proBanner"></div>
        <div className="row">
          <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 grid-margin stretch-card">
            <div className="card card-statistics">
              <div className="card-body">
                <div className="clearfix">
                  <div className="float-left">
                    <i className="mdi mdi-cube text-danger icon-lg"></i>
                  </div>
                  <div className="float-right">
                    <p className="mb-0 text-right text-dark">Batch Address</p>
                    <div className="fluid-container">
                      <h3 className="font-weight-medium text-right mb-0 text-dark">
                        {this.state.balesAddr}
                      </h3>
                    </div>
                  </div>
                </div>
                <p className="text-muted mt-3 mb-0">
                  <i
                    className="mdi mdi-alert-octagon mr-1"
                    aria-hidden="true"
                  ></i>{' '}
                  65% lower growth{' '}
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 grid-margin stretch-card">
            <div className="card card-statistics">
              <div className="card-body">
                <div className="clearfix">
                  <div className="float-left">
                    <i className="mdi mdi-receipt text-warning icon-lg"></i>
                  </div>
                  <div className="float-right">
                    <p className="mb-0 text-right text-dark">Details</p>
                    <div className="fluid-container">
                      <h3 className="font-weight-medium text-right mb-0 text-dark">
                        {this.state.details}
                      </h3>
                    </div>
                  </div>
                </div>
                <p className="text-muted mt-3 mb-0">
                  <i
                    className="mdi mdi-bookmark-outline mr-1"
                    aria-hidden="true"
                  ></i>{' '}
                  Product-wise sales{' '}
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 grid-margin stretch-card">
            <div className="card card-statistics">
              <div className="card-body">
                <div className="clearfix">
                  <div className="float-left">
                    <i className="mdi mdi-poll-box text-success icon-lg"></i>
                  </div>
                  <div className="float-right">
                    <p className="mb-0 text-right text-dark">Owner</p>
                    <div className="fluid-container">
                      <h3 className="font-weight-medium text-right mb-0 text-dark">
                        {this.state.owner}
                      </h3>
                    </div>
                  </div>
                </div>
                <p className="text-muted mt-3 mb-0">
                  <i className="mdi mdi-calendar mr-1" aria-hidden="true"></i>{' '}
                  Weekly Sales{' '}
                </p>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 grid-margin stretch-card">
            <div className="card card-statistics">
              <div className="card-body">
                <div className="clearfix">
                  <div className="float-left">
                    <i className="mdi mdi-account-box-multiple text-info icon-lg"></i>
                  </div>
                  <div className="float-right">
                    <p className="mb-0 text-right text-dark">Origin</p>
                    <div className="fluid-container">
                      <h3 className="font-weight-medium text-right mb-0 text-dark">
                        {this.state.origin}
                      </h3>
                    </div>
                  </div>
                </div>
                <p className="text-muted mt-3 mb-0">
                  <i className="mdi mdi-reload mr-1" aria-hidden="true"></i>{' '}
                  Product-wise sales{' '}
                </p>
              </div>
            </div>
          </div>
        </div>


          {this.state.ownerships.map((listValue, index) => {
            return(
          <div class="row">
            <div class="col-md-12">
              <div class="white-box">
                <ul class="timeline">
                  <li>
                    <div class="timeline-badge danger">
                      <i class="fa fa-check"></i>
                    </div>
                    <div class="timeline-panel" id="cultivationSection">
                      <div class="timeline-heading">
                        <h4 class="timeline-title">Destination</h4>
                        <p>
                          <small class="text-muted text-success activityDateTime"></small>{' '}
                        </p>
                        <span class="activityQrCode"></span>
                      </div>
                      <Card>
                        <div class="timeline-body">
                          <table class="table activityData table-responsive">
                            <tr>
                              <td colspan="2">
                                <p>Current Owner: {listValue}</p>
                              </td>
                            </tr>
                            <tr>
                              <td colspan="2">
                                <p>Origin:{this.state.origin}</p>
                              </td>
                            </tr>

                            <tr>
                              <td colspan="2">
                                <p>Date and Time: {this.dte(index)}</p>
                              </td>
                            </tr>
                            <tr>
                              <td colspan="2">
                                <p>Location: {this.location(index)}</p>
                              </td>
                            </tr>
                          </table>
                        </div>
                      </Card>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );
          })}


      </div>
    );
  }
}

export default BasicElements;
