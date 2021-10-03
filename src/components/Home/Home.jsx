import React, { Component } from "react";
import "../../styles/components/_home.scss";
import { userContext } from "../../Contexts/newsContext";
import { Link } from "react-router-dom";
import { FloatingLabel, Form, Button } from "react-bootstrap";
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
        <Form className="input__card" onSubmit={this.handleSubmit}>
          <h1>Welcome to News App</h1>
          <h2>Please enter your name</h2>
          <FloatingLabel>
            <Form.Control
              type="text"
              placeholder="Insert the article content"
              ref={this.name}
            />
          </FloatingLabel>
          <userContext.Consumer>
            {({ newName }) => (
              <Button
                variant="primary"
                type="submit"
                onClick={() => {
                  newName(this.name.current.value);
                }}
              >
                Add Name
              </Button>
            )}
          </userContext.Consumer>
        </Form>
      </section>
    ) : (
      <section className="home">
        <h1>Welcome, {this.state.name}</h1>
        <div className="button__container">
          <Link to="/news">
            <button className="button">Go to News</button>
          </Link>
          <button className="button" onClick={this.handleLocalStorage}>
            Change Your Name
          </button>
        </div>
      </section>
    );
  }
}

export default Home;
