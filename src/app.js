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

  getResults (column) {
    const results = [{'value':'10th grade','count':6672,'average_age':38.4441},{'value':'11th grade','count':6114,'average_age':35.4045},{'value':'12th grade no diploma','count':1884,'average_age':37.9427},{'value':'1st 2nd 3rd or 4th grade','count':1575,'average_age':56.6997},{'value':'5th or 6th grade','count':2915,'average_age':52.5242},{'value':'7th and 8th grade','count':7080,'average_age':52.0922},{'value':'9th grade','count':5436,'average_age':35.1508},{'value':'Associates degree-academic program','count':3841,'average_age':40.9862},{'value':'Associates degree-occup /vocational','count':4778,'average_age':41.8194},{'value':'Bachelors degree(BA AB BS)','count':17593,'average_age':41.9513},{'value':'Children','count':41904,'average_age':6.981},{'value':'Doctorate degree(PhD EdD)','count':1084,'average_age':49.7528},{'value':'High school graduate','count':42809,'average_age':45.0525},{'value':'Less than 1st grade','count':724,'average_age':54.2831},{'value':'Masters degree(MA MS MEng MEd MSW MBA)','count':5796,'average_age':46.4917},{'value':'Prof school degree (MD DDS DVM LLB JD)','count':1562,'average_age':46.9731},{'value':'Some college but no degree','count':24624,'average_age':40.0483}]

    this.setState({
      results
    })

    console.log(this.state);

    // return

    const req = {
      params: {
        column
      }
    };
    axios
      .get('http://localhost:4000', req)
      .then(res => {
        this.setState({ results: res.data});
        console.log(this.state);
      })
      .catch(err => console.log(err));
  }

  onQueryChange = (option) => {
    this.getResults(option);
  }

  render() {

    // console.table(this.state.demographicData);

    const options = [
      'age',
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
