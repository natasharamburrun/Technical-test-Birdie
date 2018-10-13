import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import './scss/style.scss';
import 'bulma';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      birdietest: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:4000')
      .then(res => {
        this.setState({ birdietest: res.data});
        console.log(res.data);
      });
  }

  // renderBirdietest = ({ })

  render() {
    // const { birdietest } =this.state;
    // console.log(this.state.data);
    return (
      <main>
        <section>
          {/* { birdietest.map(this.renderBirdietest)} */}
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
