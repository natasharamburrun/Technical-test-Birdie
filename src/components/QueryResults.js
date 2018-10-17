import React from 'react';

export default class QueryResults extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='filteredItems'>
        {this.props.results && this.props.results.map((row , i) =>
          <div key= {i}>

            <h2>{row.value}</h2>
            {/* <table className="table">
              <td>
                <h2 className="title is-education">{results.education}</h2>
              </td>
              <td>
                <h2 className="title is-age">{results.age}</h2>
              </td>
            </table> */}
          </div>
        )}
      </div>
    );
  }
}
