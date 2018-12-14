import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { getUnicode } from 'emoji-dictionary';

import './Card.css';

URL =  `https://inspiration-board.herokuapp.com/cards/`

class Card extends Component {

  renderEmoji(emoji) {
    return <p className="card__content-emoji">{getUnicode(emoji)}</p>
  }

  renderText(text) {
    return <p className="card__content-text">{text}</p>
  }

  // onDeleteCallback = (id) => {
  //   let url = URL + id
  //   console.log(url)
  //   axios.delete(url)
  //     .then(response)
  // }




  render() {

    const icon = this.props.emoji ? this.renderEmoji(this.props.emoji) : null
    const text = this.props.text ? this.renderText(this.props.text) : null


    return (
      <div className="card">
        <div className="card__content">

          {text}
          {icon}

        </div>
        <div className="card__delete" onClick={() => this.props.onDeleteCallback(this.props.id)}>X</div>
      </div>
    )
  }
}

Card.propTypes = {
  onDeleteCallback: PropTypes.func,
  text: PropTypes.string,
  id: PropTypes.number,
  emoji: PropTypes.string,
};

export default Card;
