import React, { Component } from 'react'
import _ from 'lodash'
import './App.scss'

import FarmCards from './FarmCards'
import RoadCards from './RoadCards'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      farmCards: _.drop(_.shuffle(['A', 'B', 'C', 'D', 'E', 'F'])),
      roadCards: this.generateRoadCards()
    }
  }

   resetGame = () => {
     this.setState({
       farmCards: _.drop(_.shuffle(['A', 'B', 'C', 'D', 'E', 'F'])),
       roadCards: this.generateRoadCards()
     })
   }

  generateRoadCards() {
    let roadCards = [];

    // Add 3 of each road card
    [1, 2, 3, 4, 5, 6].forEach((roadType) => {
      let c = 3

      while (c !== 0) {
        ['yellow', 'gray'].forEach((color) => {
          roadCards.push({
            type: roadType,
            color: color 
          });
        });
        c--
      }
    });

    // Add extra yellow cards (1, 2, 3, and 4) 
    [1, 2, 3, 4].forEach((roadType) => {
      roadCards.push({
        type: roadType,
        color: 'yellow' 
      });
    });

    // Add extra gray cards (5 and 6) 
     [5, 6].forEach((roadType) => {
       roadCards.push({
         type: roadType,
         color: 'gray'
       });
     });

    return _.shuffle(roadCards);
  }
  
  render() {
    return (
      <div className="App">
        <FarmCards farmCards={this.state.farmCards} />
        <RoadCards roadCards={this.state.roadCards} />
      </div>
    )
  }
}

export default App
