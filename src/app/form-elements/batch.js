import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import { Card } from 'reactstrap';

export class BasicElements extends Component {
  state = {
    startDate: new Date(),
  };

  handleChange = (date) => {
    this.setState({
      startDate: date,
    });
  };
  render() {
    return (
      <div>
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
                    <p className="mb-0 text-right text-dark">My Address</p>
                    <div className="fluid-container">
                      <h3 className="font-weight-medium text-right mb-0 text-dark">
                        {this.state.addr}
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
                    <p className="mb-0 text-right text-dark">ID</p>
                    <div className="fluid-container">
                      <h3 className="font-weight-medium text-right mb-0 text-dark">
                        {this.state.uid}
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
                    <p className="mb-0 text-right text-dark">Name</p>
                    <div className="fluid-container">
                      <h3 className="font-weight-medium text-right mb-0 text-dark">
                        {this.state.name}
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
                    <p className="mb-0 text-right text-dark">Location</p>
                    <div className="fluid-container">
                      <h3 className="font-weight-medium text-right mb-0 text-dark">
                        {this.state.location}
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
                              <p>Current Owner:</p>
                            </td>
                          </tr>
                          <tr>
                            <td colspan="2">
                              <p>Origin:</p>
                            </td>
                          </tr>
                          <tr>
                            <td colspan="2">
                              <p>Destination:</p>
                            </td>
                          </tr>
                          <tr>
                            <td colspan="2">
                              <p>Date and Time:</p>
                            </td>
                          </tr>
                          <tr>
                            <td colspan="2">
                              <p>Location:</p>
                            </td>
                          </tr>
                        </table>
                      </div>
                    </Card>
                  </div>
                </li>
                <li class="timeline-inverted">
                  <div class="timeline-badge danger">
                    <i class="fa fa-times"></i>
                  </div>
                  <div className="timeline-panel" id="farmInspectionSection">
                    <div className="timeline-heading">
                      <p>
                        <small className="text-muted text-success activityDateTime"></small>{' '}
                      </p>
                      <span className="activityQrCode"></span>
                    </div>
                    <Card>
                      <div class="timeline-body">
                        <table class="table activityData table-responsive">
                          <tr>
                            <td colspan="2">
                              <p>Current Owner:</p>
                            </td>
                          </tr>
                          <tr>
                            <td colspan="2">
                              <p>Origin:</p>
                            </td>
                          </tr>
                          <tr>
                            <td colspan="2">
                              <p>Destination:</p>
                            </td>
                          </tr>
                          <tr>
                            <td colspan="2">
                              <p>Date and Time:</p>
                            </td>
                          </tr>
                          <tr>
                            <td colspan="2">
                              <p>Location:</p>
                            </td>
                          </tr>
                        </table>
                      </div>
                    </Card>
                  </div>
                </li>
                <li>
                  <div class="timeline-badge danger">
                    <i class="fa fa-times"></i>
                  </div>
                  <div class="timeline-panel" id="harvesterSection">
                    <div class="timeline-heading">
                      {/* <h4 class="timeline-title">Harvester</h4> */}
                      <p>
                        <small class="text-success activityDateTime"></small>{' '}
                      </p>
                      <span class="activityQrCode"></span>
                    </div>
                    <Card>
                      <div class="timeline-body">
                        <table class="table activityData table-responsive">
                          <tr>
                            <td colspan="2">
                              <p>Current Owner:</p>
                            </td>
                          </tr>
                          <tr>
                            <td colspan="2">
                              <p>Origin:</p>
                            </td>
                          </tr>
                          <tr>
                            <td colspan="2">
                              <p>Destination:</p>
                            </td>
                          </tr>
                          <tr>
                            <td colspan="2">
                              <p>Date and Time:</p>
                            </td>
                          </tr>
                          <tr>
                            <td colspan="2">
                              <p>Location:</p>
                            </td>
                          </tr>
                        </table>
                      </div>
                    </Card>
                  </div>
                </li>
                <li class="timeline-inverted">
                  <div class="timeline-badge danger">
                    <i class="fa fa-times"></i>
                  </div>
                  <div class="timeline-panel" id="exporterSection">
                    <div class="timeline-heading">
                      <h4 class="timeline-title">Exporter</h4>
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
                              <p>Current Owner:</p>
                            </td>
                          </tr>
                          <tr>
                            <td colspan="2">
                              <p>Origin:</p>
                            </td>
                          </tr>
                          <tr>
                            <td colspan="2">
                              <p>Destination:</p>
                            </td>
                          </tr>
                          <tr>
                            <td colspan="2">
                              <p>Date and Time:</p>
                            </td>
                          </tr>
                          <tr>
                            <td colspan="2">
                              <p>Location:</p>
                            </td>
                          </tr>
                        </table>
                      </div>
                    </Card>
                  </div>
                </li>
                <li>
                  <div class="timeline-badge danger">
                    <i class="fa fa-times"></i>
                  </div>
                  <div class="timeline-panel" id="importerSection">
                    <div class="timeline-heading">
                      {/* <h4 class="timeline-title">Importer</h4> */}
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
                              <p>Current Owner:</p>
                            </td>
                          </tr>
                          <tr>
                            <td colspan="2">
                              <p>Origin:</p>
                            </td>
                          </tr>
                          <tr>
                            <td colspan="2">
                              <p>Destination:</p>
                            </td>
                          </tr>
                          <tr>
                            <td colspan="2">
                              <p>Date and Time:</p>
                            </td>
                          </tr>
                          <tr>
                            <td colspan="2">
                              <p>Location:</p>
                            </td>
                          </tr>
                        </table>
                      </div>
                    </Card>
                  </div>
                </li>
                <li class="timeline-inverted">
                  <div class="timeline-badge danger">
                    <i class="fa fa-times"></i>
                  </div>
                  <div class="timeline-panel" id="processorSection">
                    <div class="timeline-heading">
                      <h4 class="timeline-title">Origin</h4>
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
                              <p>Current Owner:</p>
                            </td>
                          </tr>
                          <tr>
                            <td colspan="2">
                              <p>Origin:</p>
                            </td>
                          </tr>
                          <tr>
                            <td colspan="2">
                              <p>Destination:</p>
                            </td>
                          </tr>
                          <tr>
                            <td colspan="2">
                              <p>Date and Time:</p>
                            </td>
                          </tr>
                          <tr>
                            <td colspan="2">
                              <p>Location:</p>
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
      </div>
    );
  }
}

export default BasicElements;
