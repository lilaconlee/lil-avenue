import React from 'react'
import { configure, shallow } from 'enzyme'
import App from './App'

// Move this to global setup file if there are ever multiple files
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

function filterByType(cards, type) {
  return cards.filter((card) => { return card.type === type })
}

function filterByColor(cards, color) {
  return cards.filter((card) => { return card.color === color })
}

describe('game logic', () => {
  it('properly generates farm cards', () => {
    const wrapper = shallow(<App />)
    const farmCards = wrapper.state('farmCards')
    const farmCardsQueue = wrapper.state('farmCardsQueue')
    const nextCardType = wrapper.state('nextCardType')

    expect(farmCards.length).toEqual(1)
    expect(farmCardsQueue.length).toEqual(4)
    expect(nextCardType).toEqual('road')
  })

  it('properly generates road cards', () => {
    const wrapper = shallow(<App />)
    const roadCards = wrapper.state('roadCards')

    const yellowCards = filterByColor(roadCards, 'yellow') 
    const grayCards = filterByColor(roadCards, 'gray') 

    expect(roadCards.length).toEqual(42)

    expect(yellowCards.length).toEqual(22);
    [1, 2, 3, 4].forEach((type) => {
      expect(filterByType(yellowCards, type).length).toEqual(4)
      expect(filterByType(grayCards, type).length).toEqual(3)
    });

    expect(grayCards.length).toEqual(20);
    [5, 6].forEach((type) => {
      expect(filterByType(yellowCards, type).length).toEqual(3)
      expect(filterByType(grayCards, type).length).toEqual(4)
    });
  })
})
