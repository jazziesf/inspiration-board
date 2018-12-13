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
    console.log(newCard);
    console.log(URL);
    axios.post(URL, newCard)
    .then((response) => {
      const addCard = response.data;
      console.log(addCard)

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
      return <Card key={i} text={card.text} emoji={card.emoji} />
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
