import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import './scss/style.scss';
import 'bulma';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      demographicData: [],
      data: []
    };
  }

  handleSelectOptionsFilter = (e) => {
    if(e.target.value) this.setState({ optionFilter: e.target.value });
    else this.setState({ optionFilter: false });
  }


  componentDidMount() {
    axios.get('http://localhost:4000')
      .then(res => {
        this.setState({ demographicData: res.data});
        // .catch(err => console.log(err));
        // console.log(res.data);
      });
  }

  render() {
    console.log(this.state);
    return (
      <main>
        <section>
          <div className="columns is-multiline">
            {this.state.data.demographicData && this.state.data.demographicData.map(data =>
              <h2 key={data.i}>{data.employee}</h2>
            )}
          </div>
        </section>
      </main>
    );
  }
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
