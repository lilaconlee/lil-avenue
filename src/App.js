import React, { Component } from 'react';
import _ from 'lodash';
import './App.scss';

import FarmCards from './FarmCards';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      farmCards: _.drop(_.shuffle(['A', 'B', 'C', 'D', 'E', 'F'])),
    }
  }

  generateRoadCards() {
  }
  
  render() {
    return (
      <div className="App">
        <FarmCards farmCards={this.state.farmCards} />
      </div>
    );
  }
}

export default App;
