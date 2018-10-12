import React from 'react';
import ReactDOM from 'react-dom';

import './scss/style.scss';

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentWillMount() {


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
