import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

class NewCardForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
    };
  }

  onFormChange = (event) => {
    const field = event.target.name;
    const value = event.target.value;

    const updatedState = {};
    updatedState[field] = value;
    this.setState(updatedState);
  }

  onSubmit = (event) => {
    event.preventDefault();
    const { text } = this.state;

    if (text === '') return;

    console.log(event);
    this.props.addCardCallback(this.state);
    this.setState({
      text: "",
    });
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
          <label className="new-card-form__form-select" htmlFor="Name">
          Pick Your Emoji
          <select multiple={true} value={emoji} />
          </label>
        </div>

        <div>
          <label className="new-card-form__form-label " htmlFor="about">Your Inspiration Quote</label>
          <textarea className="new-card-form__form-textarea" name="about" onChange={this.onFormChange} value={this.state.about}>
          </textarea>
        </div>

        <input className="btn btn-success new-card-form__form-button" type="submit" name="submit" value="Add a Card" />
      </form>
    );
  }


}

NewCardForm.propTypes = {
  addCardCallback: PropTypes.func.isRequired
};

export default NewCardForm;
