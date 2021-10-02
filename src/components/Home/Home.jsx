import React, { Component } from "react";
import "../../styles/components/_home.scss";
import { userContext } from "../../Contexts/newsContext";
import { Link } from "react-router-dom";
class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
    };

    this.name = React.createRef();
  }
  // Handle submit
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ name: this.name.current.value });
    localStorage.setItem("name", this.name.current.value);
  };

  // Save name on local storage
  componentDidMount() {
    const name = localStorage.getItem("name");
    if (name) {
      this.setState({ name: name });
    }
  }

  // Delete name from local storage
  handleLocalStorage = () => {
    localStorage.removeItem("name");
    this.setState({ name: "" });
  };

  render() {
    return this.state.name === "" ? (
      <section className="home">
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref={this.name} />
          <userContext.Consumer>
            {({ newName }) => (
              <button
                onClick={() => {
                  newName(this.name.current.value);
                }}
              >
                Submit
              </button>
            )}
          </userContext.Consumer>
        </form>
      </section>
    ) : (
      <section className="home">
        <h1>Welcome, {this.state.name}</h1>
        <div className='button__container'>
        <Link to="/news">
          <button className='button'>Go to News</button>
        </Link>
        <button className='button' onClick={this.handleLocalStorage}>Change Your Name</button>
        </div>
      </section>
    );
  }
}

export default Home;
