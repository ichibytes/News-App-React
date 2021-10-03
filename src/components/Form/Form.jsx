import React, { Component } from "react";
import { Redirect } from "react-router";
class Form extends Component {
  constructor(props) {
    super(props);

    this.title = React.createRef();
    this.url = React.createRef();
    this.img = React.createRef();
    this.content = React.createRef();
    this.source = React.createRef();
    this.publishedAt = React.createRef();

    this.state = {
      isAdded: false,
    };
  }

  addNews = (event) => {
    event.preventDefault();

    const title = this.title.current.value;
    const url = this.url.current.value;
    const img = this.img.current.value;
    const content = this.content.current.value;
    const source = this.source.current.value;

    if (title && url && img && content && source) {
      const publishedAt = new Date().toISOString();
      const record = { title, url, img, content, source, publishedAt };
      this.props.addRecord(record);
    } else {
      // TODO: create modal
      alert("Fill all fields");
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      isAdded: true,
    });
  };

  render() {
    return this.state.isAdded === true ? (
      <Redirect to="/news" />
    ) : (
      <form onSubmit={this.addNews}>
        <h1>Add your Article</h1>
        Author: <input type="text" ref={this.author} />
        Title: <input type="text" ref={this.title} />
        Url: <input type="url" ref={this.url} />
        Img: <input type="url" ref={this.img} />
        Content: <input type="text" ref={this.content} />
        Source: <input type="text" ref={this.source} />
        <button type="submit" onClick={this.handleSubmit}>
          Add news
        </button>
      </form>
    );
  }
}

export default Form;
