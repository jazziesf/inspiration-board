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
    const { text, emoji } = this.state;
    console.log(event)

    if ( text === '' ) return;
    console.log()
    this.props.addCardCallback(this.state);
    this.resetState();
  }

  render() {
    return (
      <form
        onSubmit={this.onSubmit}
        name="new-card-form"
        id="new-card-form"
        className="new-card-form"
        >

        <div>
        <label>
           Pick your Emoji:
           <select className="new-card-form__form-select" name="emoji" value={this.state.emoji} onChange={this.onFormChange}>
            {this.renderEmoji()}
          </select>
        </label>
        </div>

        <div>
          <label className="new-card-form__form-label " htmlFor="text">Your Inspiration Quote
          <textarea className="new-card-form__form-textarea" name="text" onChange={this.onFormChange} value={this.state.text}>
          </textarea>
          </label>
        </div>

        <input className="new-card-form__form-button" type="submit" name="submit" value="Add a Card" />
      </form>
    );
  }


}

NewCardForm.propTypes = {
  addCardCallback: PropTypes.func
};

export default NewCardForm;
