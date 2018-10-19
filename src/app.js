import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { MoonLoader } from 'react-spinners';

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

  }

  onQueryChange = (option) => {
    this.getResults(option);
  }

  render() {


    const options = [
      'Select an option:',
      'age',
      'class of worker',
      'occupation code',
      'education',
      'wage per hour',
      'last education',
      'marital status',
      'major industry code',
      'major occupation code',
      'mace',
      'hispanice',
      'sex',
      'member of labor',
      'reason for unemployment',
      'fulltime',
      'capital gain',
      'capital loss',
      'dividends',
      'income tax liability',
      'previous residence region',
      'previous residence state',
      'household-with-family',
      'household-simple',
      'weight',
      'msa-change',
      'reg-change',
      'within-reg-change',
      'lived-here',
      'migration prev res in sunbelt',
      'num persons worked for employer',
      'family members under 118',
      'father birth country',
      'mother birth country',
      'birth country',
      'citizenship',
      'own business or self employed',
      'fill questionnaire for veteran\'s admin',
      'veterans benefits',
      'weeks worked in year',
      'year',
      'salary range'
    ];

    return (
      <main>
        <section>
          <h1 className="title">DEMOGRAPHIC DATA</h1>
          <p className="title is-5">Please select a value on the dropdown to get information on that data:</p>
          <div className='sweet-loading'>
            <MoonLoader
              color={'#9ccccd'}
              loading={this.state.isLoading}
              height={60}
              width={60}
            />
          </div>
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
