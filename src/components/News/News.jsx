import React, { Component } from "react";
import axios from "axios";
import ListNews from "../ListNews";
import { Spinner } from "react-bootstrap";
import { Button } from "react-bootstrap";
class News extends Component {
  constructor(props) {
    super(props);

    this.state = {
      news: [],
      articles: 4,
    };
  }

  // Todo: Add load more button
  getNews = async () => {
    const resp = await axios.get(
      "https://newsapi.org/v2/top-headlines?country=gb&category=technology&sortBy=popularity&apiKey=ff9bee2e53de421897bf8f64963f39c2"
    );
    const result = await resp.data.articles.slice(0, this.state.articles);
    this.setState({
      news: [...this.props.record, ...result],
    });
  };

  loadMore = () => {
    this.setState({
      articles: this.state.articles + 4,
    });
  };

  componentDidUpdate(prevState) {
    if (prevState.articles !== this.state.articles) {
      this.getNews();
    }
  }

  componentDidMount() {
    this.getNews();
  }

  render() {
    const news = this.state.news;
    if (news.length === 0) {
      return (
        <section className="news__spinner">
          <Spinner animation="border" variant="primary">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </section>
      );
    } else {
      return (
        <section className="news">
          <ListNews info={news} />
          <Button variant="outline-primary" type="submit" onClick={this.loadMore}>
          Load More...
        </Button>
        </section>
      );
    }
  }
}

export default News;
