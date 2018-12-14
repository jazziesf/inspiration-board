import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

const URL = "https://inspiration-board.herokuapp.com/boards/jazz/cards"

class Board extends Component {
  constructor() {
    super();

    this.state = {
      cards: CARD_DATA.cards,
    };
  }



  componentDidMount() {
    axios.get(URL)
    .then((response) => {
      const cards = response.data.map((datum) => {
        return datum.card
      })
      this.setState({
        cards: cards
      })
    })
    .catch((error) => {
      console.log(error.message);
      this.setState({
        error: error.message,
        // add error messages buy mapping through check validations??
      })
    })
  }

  onAddCard = (newCard) => {
    axios.post(URL, newCard)
    .then((response) => {
      const addCard = response.data.card;
      const cards = [addCard,...this.state.cards]
      this.setState({
        cards,
      })


    })
    .catch((error) => {
      // What should we do when we know the post request failed?
      this.setState({
        errorMessage: `Failure ${error.message}`,
      })
    });
  }

  onDeleteCallback = (id) => {
    let url = `https://inspiration-board.herokuapp.com/cards/${id}`

    console.log(url)
    axios.delete(url)
    .then((response) => {
      console.log(response)

      const cards = [...this.state.cards]

      const deleteCard = cards.find((card) => card.id === id);
      cards.splice(cards.indexOf(deleteCard), 1);

      this.setState({cards});
    })
    .catch((error) => {
      // What should we do when we know the post request failed?
      this.setState({
        errorMessage: `Failure ${error.message}`,
      })
    });
  }


  render() {

    const cards = this.state.cards.map((card, i) => {
      return <Card key={i} id={card.id} text={card.text} emoji={card.emoji} onDeleteCallback={this.onDeleteCallback} />
    })

    return (
      <div>
        Board
        <NewCardForm addCardCallback={this.onAddCard} />
        {cards}

      </div>
    )
  }

}

Board.propTypes = {

};

export default Board;
