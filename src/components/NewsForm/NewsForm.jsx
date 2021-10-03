import React, { Component } from "react";
import { Redirect } from "react-router";
import { FloatingLabel, Row, Col, Form, Button } from "react-bootstrap";
class NewsForm extends Component {
  constructor(props) {
    super(props);

    this.title = React.createRef();
    this.urlToImage = React.createRef();
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
    const urlToImage = this.urlToImage.current.value;
    const img = this.img.current.value;
    const content = this.content.current.value;
    const source = this.source.current.value;

    if (title && urlToImage && img && content && source) {
      const publishedAt = new Date().toISOString();
      const record = { title, urlToImage, img, content, source, publishedAt };
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
      <div className="input">
        <h2>Add your own Article</h2>
      <Form className="input__card" onSubmit={this.addNews}>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>News Source</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter News Source"
              ref={this.source}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Title"
              ref={this.title}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Link to the Article</Form.Label>
            <Form.Control
              type="url"
              placeholder="https://linktothearticle.com"
              ref={this.urlToImage}
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Image source</Form.Label>
            <Form.Control
              type="url"
              placeholder="https://yourimgurl.com"
              ref={this.img}
            />
          </Form.Group>
        </Row>
        <Form.Label>Article Content</Form.Label>
        <FloatingLabel controlId="floatingTextarea2">
          <Form.Control
            as="textarea"
            placeholder="Insert the article content"
            style={{ height: "100px" }}
            ref={this.content}
          />
        </FloatingLabel>

        <Button variant="primary" type="submit" onClick={this.handleSubmit}>
          Add Record
        </Button>
      </Form>
      </div>
    );
  }
}

export default NewsForm;
