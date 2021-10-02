import React, { Component } from "react";
import Card from "../Card";
class ListNews extends Component {
  constructor(props) {
    super(props);

    this.state = {
      news: [],
    };
  }

  componentDidMount() {
    this.setState({
      news: this.props.info,
    });
  }

  paintNews = () => {
    return this.state.news.map((record, index) => (
      <Card
        info={record}
        key={index}
        remove={() => this.removeOneRecord(index)}
      />
    ));
  };

  removeOneRecord = (index) => {
    const remainingNews = this.state.news.filter(
      (current, currentIndex) => currentIndex !== index
    );
    this.setState({ news: remainingNews });
  };

  render() {
    return <>{this.paintNews()}</>;
  }
}

export default ListNews;
