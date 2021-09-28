import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer--container">
          <hr />
          <div className="footer--copyright">
            <p>
             Made with <span>❤</span> by <a href="https://www.ichicodes.com">Ezequiel Migueles</a>
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
