import React, { Component } from "react";
import shortid from "shortid";

class Form extends Component {
  state = {
    name: "",
    tag: "",
    experience: "junior",
    licence: false,
  };

  nameInputId = shortid.generate();
  tagInputId = shortid.generate();

  handleChange = (e) => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: "",
      tag: "",
    });
  };

  handleCheckbox = (e) => {
    console.log(this.state.licence);
    this.setState({ licence: e.currentTarget.checked });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId}>
          Имя
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            id={this.nameInputId}
          ></input>
        </label>
        <label htmlFor={this.tagInputId}>
          Прозвище
          <input
            type="text"
            name="tag"
            value={this.state.tag}
            onChange={this.handleChange}
            id={this.tagInputId}
          ></input>
        </label>
        <p>Ваш уровень:</p>
        <label>
          <input
            type="radio"
            name="experience"
            value="junior"
            onChange={this.handleChange}
            checked={this.state.experience === "junior"}
          />
          junior
        </label>
        <label>
          <input
            type="radio"
            name="experience"
            value="middle"
            onChange={this.handleChange}
            checked={this.state.experience === "middle"}
          />
          middle
        </label>
        <label>
          <input
            type="radio"
            name="experience"
            value="senior"
            onChange={this.handleChange}
            checked={this.state.experience === "senior"}
          />
          senior
        </label>
        <label>
          <input
            type="checkbox"
            name="licence"
            checked={this.state.licence}
            onChange={this.handleCheckbox}
          />
          Согласен с условиями
        </label>

        <button type="submit" disabled={!this.state.licence}>
          Отправить
        </button>
      </form>
    );
  }
}

// handleNameChange = (event) => {
//   this.setState({ name: event.currentTarget.value });
// };

// handleTagChange = (event) => {
//   this.setState({ tag: event.currentTarget.value });
// };

export default Form;
