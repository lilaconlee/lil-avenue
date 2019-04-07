import React, { Component } from 'react'
import _ from 'lodash'
import classNames from 'classnames'

import './FarmCards.scss'

class FarmCards extends Component {
  constructor(props) {
    super(props)
    this.peekRef = React.createRef()
    this.state = {
      visibleFarms: [props.farmCards[0]],
      hiddenFarms: _.drop(props.farmCards),
      peek: false
    }
  }

  onNewCard = () => {
    const visible = this.state.visibleFarms.concat(this.state.hiddenFarms[0])
    const hidden = _.drop(this.state.hiddenFarms)

    this.setState({
      visibleFarms: visible,
      hiddenFarms: hidden,
      peek: false
    })
  }

  onPeek = () => {
    const noHiddenFarms = this.state.hiddenFarms.length !== 0

    this.setState({
      peek: noHiddenFarms ? !this.state.peek : false
    })
  }

  render() {
    const farmCards = this.props.farmCards.map((card) => {
      let classname = classNames({
        hidden: this.state.hiddenFarms.includes(card),
        'card': true,
        'farm': true
      })

      classname += ` ${card}`

      return <div key={card} className={classname}>{card}</div>
    })
    const peekClassName = classNames({
      hidden: !this.state.peek,
      'peek': true,
      'card': true,
      'farm': true
    })

    return (
      <div className="farm-cards-wrapper">
        <div className="farm-cards">{farmCards}</div>
        <div className="farm-controls">
          <div className={peekClassName}>{this.state.hiddenFarms[0]}</div>
          <div className="farm-controls-buttons">
            <button type="button" onClick={this.onPeek}>Peek</button>
            <button type="button" onClick={this.onNewCard}>New Farm Card</button>
          </div>
        </div>
      </div>
    )
  }
}

export default FarmCards
