import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Filter from "./Filter";

class Header extends Component {
  render() {
    const { userQuery, handleInputChange } = this.props;
    return (
      <header className="app__header">
        <h1 className="app__title">Harry Potter Characters</h1>

        <Filter
          userQuery={userQuery}
          handleInputChange={handleInputChange}
        />
      </header>
    );
  }
}

Header.propTypes = {
  userQuery: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired
}

export default Header;