import React, { Component } from 'react'
import _ from 'lodash'
import './App.scss'

import FarmCards from './FarmCards'
import RoadCards from './RoadCards'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = this.generateNewGame()
  }

  generateNewGame() {
    let farmCardsQueue = _.drop(_.shuffle(['A', 'B', 'C', 'D', 'E', 'F']))
    const farmCards = [_.head(farmCardsQueue)]

    farmCardsQueue = _.drop(farmCardsQueue)

    return {
      farmCards,
      farmCardsQueue,
      roadCards: this.generateRoadCards(),
      yellowCards: [],
      grayCards: [],
      nextCardType: 'road'
    }
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

  onNewFarmCard = () => {
    let farmCards = this.state.farmCards
    let farmCardsQueue = this.state.farmCardsQueue
    let nextCardType = 'road'

    if (farmCards.length === 5) { 
      return
    }

    farmCards.push(_.head(farmCardsQueue))
    farmCardsQueue = _.drop(farmCardsQueue)

    this.setState({
      farmCards,
      farmCardsQueue,
      yellowCards: [],
      grayCards: [],
      nextCardType
    })
  }

  onNewRoadCard = () => {
    const nextCard = _.head(this.state.roadCards)
    let { yellowCards, grayCards, farmCards } = this.state
    let nextCardType = 'road'

    if (nextCard.color === 'yellow') {
      yellowCards.push(nextCard)

      if (yellowCards.length === 4) { 
        nextCardType = 'farm'
        if (farmCards.length === 5) {
          nextCardType = 'none'
        }
      }
    } else {
      grayCards.push(nextCard)
    }

    this.setState({
      roadCards: _.drop(this.state.roadCards),
      yellowCards,
      grayCards,
      nextCardType
    })
  }

  onNewGame = () => {
    this.setState(this.generateNewGame())
  }
  
  render() {
    return (
      <div className="App">
        <FarmCards farmCards={this.state.farmCards} nextFarmCard={_.head(this.state.farmCardsQueue)} nextCardType={this.state.nextCardType} onNewFarmCard={this.onNewFarmCard}/>
        <RoadCards yellowCards={this.state.yellowCards} grayCards={this.state.grayCards} nextCardType={this.state.nextCardType} onNewRoadCard={this.onNewRoadCard} onNewGame={this.onNewGame} />
      </div>
    )
  }
}

export default App
