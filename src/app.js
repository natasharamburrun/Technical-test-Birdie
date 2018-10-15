import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import './scss/style.scss';
import 'bulma';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      demographicData: []
    };
  }

  handleSelectOptionsFilter = (e) => {
    if(e.target.value) this.setState({ optionFilter: e.target.value });
    else this.setState({ optionFilter: false });
  }

  componentDidMount() {
    axios.get('http://localhost:4000')

      .then(res => {



        // {this.state.demographicData.data && Object.values(this.state.demographicData.data).map((demographicData, i) =>
        //   <option key={i}>{demographicData.data}</option>
        // );
        // }

        this.setState({ demographicData: res.data});
        // console.log(res.data);

      })
      .catch(err => console.log(err));
  }

  render() {

    // const select = this.state.demographicData.data && Object.keys(this.state.demographicData.data).map((demographicData, i) =>
    //   <option key={i}>{demographicData.data}</option>

    console.log(this.state);

    return (
      <main>
        <section>
          <div className="control">
            <h2>DEMOGRAPHIC OPTIONS:</h2>
            <div className="select">
              <select onChange={this.handleSelectOptionsFilter}>
                <option value="">All</option>
                <option value="education">education</option>
                <option value="sex">sex</option>
                <option value="citizenship">citizenship</option>
              </select>
            </div>
          </div>

          <table className="table">

          </table>

        </section>
      </main>
    );
  }
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
