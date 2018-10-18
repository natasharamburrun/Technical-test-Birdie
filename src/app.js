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
      results: [],
      isLoading: false
    };
  }

  getResults = (column) => {
    this.setState({ isLoading: true });
    axios({
      url: ('http://localhost:4000'),
      method: 'GET',
      params: {
        column
      }
    })
      .then(res => this.setState({
        results: res.data,
        isLoading: false
      }));
    console.log(this.state);

  }

  onQueryChange = (option) => {
    this.getResults(option);
  }

  render() {


    const options = [
      '',
      'education',
      'marital status',
      'citizenship'
    ];

    if (this.state.isLoading) {
      return <p> Please wait while data is Loading ...</p>;
    }

    console.log(this.state.isLoading);
    return (
      <main>
        <section>
          <h1 className="title">DEMOGRAPHIC DATA</h1>
          <p className="title">Please select a value on the dropdown to get information on that data</p>
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
