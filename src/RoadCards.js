import React, { Component } from 'react'
import _ from 'lodash'
import classNames from 'classnames'

import './RoadCards.scss'

class RoadCards extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { grayCards, yellowCards, onNewRoadCard, onNewGame } = this.props
    const yellowRoads = yellowCards.map((card) => {
      let classname = `card road yellow ${card.type}`

      return <div key={_.uniqueId()} className={classname}>{card.type}</div>
    })
    const grayRoads = grayCards.map((card) => {
      let classname = `card road ${card.type}`

      return <div key={_.uniqueId()} className={classname}>{card.type}</div>
    })


    return (
      <div className="road-cards-wrapper">
        <div className="road-cards">
          <div className="gray-road-cards">{grayRoads}</div>
          <div className="yellow-road-cards">{yellowRoads}</div>
        </div>
        <div className="road-controls">
            <button type="button" onClick={onNewRoadCard}>New Road Card</button>
            <button type="button" className="new-game" onClick={onNewGame}>New Game</button>
        </div>
      </div>
    )
  }
}

export default RoadCards
