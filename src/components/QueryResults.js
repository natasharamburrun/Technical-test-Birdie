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
        {/* {this.props.results && this.props.results.map((row , i) =>
          <div key= {i}> */}
        <div className="columns">
          <div className="column is-full">
            <table className="table is-bordered">
              <thead>
                <tr>
                  {/* <h2 className="value-title">{row.value}</h2> */}
                  <th>Value</th>
                  <th>Count</th>
                  <th>Average Age</th>
                </tr>
              </thead>
            </table>
            {this.props.results && this.props.results.map((row , i) =>
              <div key= {i}>
                <table className="table is-bordered">
                  <tbody>
                    <tr>
                      <td>{row.value}</td>
                      <td>{row.count}</td>
                      <td>{row.average_age}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
