import React, { Component } from 'react';
import MaterialTable from 'material-table';
import Campaign from '../../ethereum/campaign';
import web3 from '../../ethereum/web3';
import factory from '../../ethereum/factory';


export class NewTable extends Component {
  state = {
    list: [],
    add: '',
    camp: [],
    show: false,
  };

  handleClose = (event) => {
    event.preventDefault();
    this.setState({ show: false });
  };
  handleShow = (event) => {
    event.preventDefault();
    this.setState({ show: true });
  };

  dte(index) {
    let dd = this.state.camp[index];
    if (dd != null) {
      const milliseconds = dd['5'][0] * 1000; // 1575909015000
      const dateObject = new Date(milliseconds);
      const humanDateFormat = dateObject.toLocaleString();
      const ret = humanDateFormat.slice(0, 9);
      return ret;
    }
  }

  deal(index) {
    let dd = this.state.camp[index];
    if (dd != null) {
      return dd['0'];
    }
  }
  owner(index) {
    let dd = this.state.camp[index];
    if (dd != null) {
      return dd['1'];
    }
  }
  dest(index) {
    let dd = this.state.camp[index];
    if (dd != null) {
      return dd['3'];
    }
  }
  async componentDidMount() {
    try {
      await window.ethereum.enable();
      const accounts = await web3.eth.getAccounts();
      const campaigns = await factory.methods
        .getDeployedBales(accounts[0])
        .call();
      this.setState({ list: campaigns });
      this.setState({ add: accounts[0] });
      console.log('@@@@@@@@@@@@2', campaigns[0]);

      this.state.list.map(async (listValue, index) => {
        console.log('index', listValue);
        const campaign = await Campaign(listValue);
        const summary = await campaign.methods.getSummary().call();
        console.log('summary', listValue, summary); //add
        let temp = [...this.state.camp, summary];
        await this.setState({ camp: temp });
      });
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
  };
  render() {
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

              <div className="table-responsive">
                <MaterialTable

                  columns={[
                    { title: 'Name', field: 'name' },
                    { title: 'Surname', field: 'surname' },
                    { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
                    {
                      title: 'Birth Place',
                      field: 'birthCity',
                      lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
                    },
                  ]}
                  data={[
                    { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
                    { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
                  ]}
                  options={{
                    search: true
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewTable;


// export default function BasicSearch() {
//   return (

//   )
// }
