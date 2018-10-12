import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import './scss/style.scss';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: {}
    };
  }

  componentDidMount() {
    axios.get('http://localhost:4000');

  }

  render() {
    return (
      <main>
        <section>
          <h1>Tech test</h1>
        </section>
      </main>



    );
  }
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
