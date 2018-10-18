import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import './scss/style.scss';
import 'bulma';

import QueryDropdown from './components/QueryDropdown';
import QueryResults from './components/QueryResults';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      results: []
    };
  }

  getResults = (column) => {
    axios({
      url: ('http://localhost:4000'),
      method: 'GET',
      params: {
        column
      }
    })
      .then(res => this.setState({ results: res.data }));
    console.log(this.state);
  }


  //   });
  //   const req = {
  //     params: {
  //       column
  //     }
  //   };
  //   // axios
  //   //   .get('http://localhost:4000', req)
  //     .then(res => {
  //       this.setState({ results: res.data});
  //       console.log(this.state);
  //     })
  //     .catch(err => console.log(err));
  // }

  onQueryChange = (option) => {
    this.getResults(option);
  }

  render() {

    const options = [
      '',
      'education',
      'marital status'
    ];

    return (
      <main>
        <section>
          <h1 className="title">DEMOGRAPHIC DATA</h1>

          <QueryDropdown options={options} onChange={this.onQueryChange}/>
          <QueryResults results={this.state.results}/>

        </section>
      </main>
    );
  }
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
