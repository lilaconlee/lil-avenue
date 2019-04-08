import React, { Component } from 'react'
import _ from 'lodash'
import classNames from 'classnames'

import './RoadCards.scss'

class RoadCards extends Component {
  constructor(props) {
    super(props)
    this.state = {
      grayRoads: [],
      yellowRoads: [],
      queuedRoads: props.roadCards
    }
  }

  onNewCard = () => {
    const grayRoads = [] 
    const yellowRoads = [] 
    let queuedRoads = _.clone(this.state.queuedRoads)
    let count = 4

    while (count !== 0) {
      const card = _.head(queuedRoads)

      if (card.color === 'yellow') {
        yellowRoads.push(card)
        count--
      } else {
        grayRoads.push(card)
      }

      queuedRoads = _.drop(queuedRoads)
    }

    this.setState({
      grayRoads,
      yellowRoads,
      queuedRoads
    })
  }

  render() {
     const yellowRoads = this.state.yellowRoads.map((road) => {
       let classname = classNames({
         hidden: false,
         'card': true,
         'road': true,
         'yellow': true
       })

       classname += ` ${road.type}`

       return <div key={_.uniqueId()} className={classname}>{road.type}</div>
     })

     const grayRoads = this.state.grayRoads.map((road) => {
       let classname = classNames({
         hidden: false,
         'card': true,
         'road': true
       })

       classname += ` ${road.type}`

       return <div key={_.uniqueId()} className={classname}>{road.type}</div>
     })

    return (
      <div className="road-cards-wrapper">
        <div className="road-cards">
          <div className="gray-road-cards">{grayRoads}</div>
          <div className="yellow-road-cards">{yellowRoads}</div>
        </div>
        <div className="road-controls">
            <button type="button" onClick={this.onNewCard}>New Road Card</button>
            <button type="button" className="new-game" onClick={this.onNewGame}>New Game</button>
        </div>
      </div>
    )
  }
}

export default RoadCards
