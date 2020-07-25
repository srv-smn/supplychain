import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import {Card} from 'reactstrap';

export class BasicElements extends Component {
  state = {
    startDate: new Date()
  };
 
  handleChange = date => {
    this.setState({
      startDate: date
    });
  };
  render() {
    return (
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

    )
  }
}

export default BasicElements
