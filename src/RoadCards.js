import React, { Component } from 'react'
import _ from 'lodash'
import classNames from 'classnames'
import converter from 'number-to-words'

import './RoadCards.scss'

import corner from './assets/corner.svg'
import straight from './assets/straight.svg'

const cardTypeSvg = {
  one: corner,
  two: corner,
  three: corner,
  four: corner,
  five: straight,
  six: straight
}

class RoadCards extends Component {
  getRoadSvg(cardType) {
    const num = converter.toWords(cardType)
    return <div className="img-wrapper"><img className={num} alt="" src={cardTypeSvg[num]} /></div>
  }

  render() {
    const { grayCards, yellowCards, nextCardType, onNewRoadCard, onNewGame } = this.props
    const newGameClasses = classNames({
      'new-game': true,
      'game-over': nextCardType === 'none'
    })
    const yellowRoads = yellowCards.map((card) => {
      let classname = `card road yellow`

      return <div key={_.uniqueId()} className={classname}><span>{card.type}</span>{this.getRoadSvg(card.type)}</div>
    })
    const grayRoads = grayCards.map((card) => {
      let classname = `card road`

      return <div key={_.uniqueId()} className={classname}><span>{card.type}</span>{this.getRoadSvg(card.type)}</div>
    })


    return (
      <div className="road-cards-wrapper">
        <div className="road-cards">
          <div className="gray-road-cards">{grayRoads}</div>
          <div className="yellow-road-cards">{yellowRoads}</div>
        </div>
        <div className="road-controls">
            <button type="button" disabled={!(nextCardType === 'road')} onClick={onNewRoadCard}>New Road Card</button>
            <button type="button" className={newGameClasses} onClick={onNewGame}>New Game</button>
        </div>
      </div>
    )
  }
}

export default RoadCards
