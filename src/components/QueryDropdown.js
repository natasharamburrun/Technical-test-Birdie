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
      <section className="section">
        <h1 className="option-title">Select An Option:</h1>
        <div className="control">
          <div className="select is-rounded">
            <select onChange={this.onChange}>
              {this.props.options && this.props.options.map(option => {
                return ( <option key={option} value={option}>{option}</option> );
              })}
            </select>
          </div>
        </div>
      </section>
    );
  }
}
