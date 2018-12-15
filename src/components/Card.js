import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getUnicode } from 'emoji-dictionary';
import './Card.css';


class Card extends Component {

  renderEmoji(emoji) {
    return <p className="card__content-emoji">{getUnicode(emoji)}</p>
  }

  renderText(text) {
    return <p className="card__content-text">{text}</p>
  }


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
