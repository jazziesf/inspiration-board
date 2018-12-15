import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getUnicode } from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

class NewCardForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      emoji: EMOJI_LIST,
    };
  }

  onFormChange = (event) => {
    const field = event.target.name;
    const value = event.target.value;

    const updatedState = {};
    updatedState[field] = value;
    this.setState(updatedState);
  }

  resetState = () => {
    this.setState({
      text: '',
      emoji: '',
    });
  }


  renderEmoji = () => {
    return EMOJI_LIST.map((emoji, i) => {
      console.log(getUnicode(emoji))
      return <option value={emoji} key={i}>{getUnicode(emoji)}</option>
    })
  }

  onSubmit = (event) => {

    event.preventDefault();
    const { text } = this.state;
    console.log(event)

    if ( text === '' ) return;
    console.log()
    this.props.addCardCallback(this.state);
    this.resetState();
  }

  render() {
    return (
    <section className="new-card-form">
      <section className="new-card-form__header">Add Your Inspiration Quote</section>

      <form
        onSubmit={this.onSubmit}
        className=".new-card-form__form"
        >

        <div className="card-grid">
          <label className="new-card-form__form-label" htmlFor="text">Your Inspiration Quote</label>
          <textarea className="new-card-form__form-textarea" name="text" onChange={this.onFormChange} value={this.state.text}>
          </textarea>
        </div>

        <div className="card-grid">
        <label className="new-card-form__form-label">Pick your Emoji:</label>
           <select className="new-card-form__form-select" name="emoji" value={this.state.emoji} onChange={this.onFormChange}>
            {this.renderEmoji()}
          </select>
        </div>

        <div className="submit">
          <input className="new-card-form__form-button" type="submit" name="submit" value="Add a Card" />
        </div>
      </form>
    </section>
    );
  }


}

NewCardForm.propTypes = {
  addCardCallback: PropTypes.func
};

export default NewCardForm;
