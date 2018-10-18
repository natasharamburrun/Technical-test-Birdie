import React from 'react';

export default class QueryDropdown extends React.Component {
  constructor() {
    super();
    this.state = {
      options: []
    };
  }

  onChange = (event) => {
    this.props.onChange(event.target.value);
  }

  render() {

    return (
      <div className="control">
        <div className="select">
          <h2>Options:</h2>
          <select onChange={this.onChange}>
            {this.props.options && this.props.options.map(option => {
              return ( <option key={option} value={option}>{option}</option> );
            })}
          </select>
        </div>
      </div>
    );
  }
}
