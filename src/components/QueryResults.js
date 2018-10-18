import React from 'react';

export default class QueryResults extends React.Component {
  constructor() {
    super();
    this.state = {
      results: []
    };
  }

  render() {
    return (
      <div className='filteredItems'>
        {this.props.results && this.props.results.map((row , i) =>
          <div key= {i}>
            <h2>{row.value}</h2>
            <h2>{row.count}</h2>
            <h2>{row.average_age}</h2>
          </div>
        )}
      </div>
    );
  }
}
