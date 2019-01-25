import React, { Component } from "react";
import "./footer.scss";

class Footer extends Component {
  render() {
    return (
      <footer className="app__footer">
        <small className="footer__copyright">
          Made with{" "}
          <span>
            <i className="fas fa-hat-wizard" />
          </span>{" "}
          by{" "}
          <a
            className="copyright__link"
            href="https://github.com/lauraferrandof"
            target="_blank"
            rel="noopener noreferrer"
          >
            laus
          </a>
        </small>
      </footer>
    );
  }
}

export default Footer;
