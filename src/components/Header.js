import React, { Component } from "react";
import PropTypes from "prop-types";
import { Route, Switch } from "react-router-dom";
import Filter from "./Filter";
import "./header.scss";

class Header extends Component {
  render() {
    const { userQuery, handleInputChange, userQueryHouse, handleHouseChange } = this.props;
    return (
      <header className="app__header">
        <div className="app__title-wrapper">
          <h1 className="app__title">Harry Potter Characters</h1>
        </div>

        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Filter
                userQuery={userQuery}
                userQueryHouse={userQueryHouse}
                handleInputChange={handleInputChange}
                handleHouseChange={handleHouseChange}
              />
            )}
          />
        </Switch>
      </header>
    );
  }
}

Header.propTypes = {
  userQuery: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  userQueryHouse: PropTypes.string.isRequired,
  handleHouseChange: PropTypes.func.isRequired
};

export default Header;
