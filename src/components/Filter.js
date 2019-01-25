import React, { Component } from "react";
import PropTypes from "prop-types";
import "./filter.scss";

class Filter extends Component {
  render() {
    const { userQuery, handleInputChange } = this.props;
    return (
      <form className="app__form">
        <label htmlFor="character-name" className="character-name__label">
          Write your favourite character's name!
          <input
            type="text"
            name="character-name"
            id="character-name"
            value={userQuery}
            className="character-name__input"
            placeholder="Ex. Sirius Black"
            onChange={handleInputChange}
          />
        </label>
      </form>
    );
  }
}

Filter.propTypes = {
  userQuery: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired
};

export default Filter;
