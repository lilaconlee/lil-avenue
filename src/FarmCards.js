import React, { Component } from 'react'
import classNames from 'classnames'

import './FarmCards.scss'

class FarmCards extends Component {
  constructor(props) {
    super(props)
    this.state = {
      peek: false
    }
  }

  onPeek = () => {
    this.setState({
      peek: this.props.nextFarmCard ? !this.state.peek : false
    })
  }

  render() {
    const farmCards = this.props.farmCards.map((card) => {
      const classname = `card farm ${card}`

      return <div key={card} className={classname}><span>{card}</span></div>
    })
    const peekClassName = classNames({
      hidden: !this.state.peek,
      'peek': true,
      'card': true,
      'farm': true
    })
    const { nextFarmCard, nextCardType, onNewFarmCard } = this.props

    return (
      <div className="farm-cards-wrapper">
        <div className="farm-cards">{farmCards}</div>
        <div className="farm-controls">
          <div className={peekClassName}>{nextFarmCard}</div>
          <div className="farm-controls-buttons">
            <button type="button" disabled={!nextFarmCard} onClick={this.onPeek}>Peek</button>
            <button type="button" disabled={!(nextCardType === 'farm')} onClick={onNewFarmCard}>New Farm Card</button>
          </div>
        </div>
      </div>
    )
  }
}

export default FarmCards
