//  {this.state.ownerships.map((listValue, index) => {
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
);
  })}
