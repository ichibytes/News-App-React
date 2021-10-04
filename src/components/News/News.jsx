import React, { Component } from "react";
import axios from "axios";
import ListNews from "../ListNews";
import { Spinner } from "react-bootstrap";
class News extends Component {
  constructor(props) {
    super(props);

    this.state = {
      news: [],
    };
  }

  getNews = async () => {
    const API_KEY = process.env.REACT_APP_API_KEY
    const resp = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=gb&category=technology&sortBy=popularity&apiKey=${API_KEY}`
    );
    // use only the first 5 news + the articles created by user
    const result = await resp.data.articles.slice(0, 5);
    this.setState({
      news: [...result, ...this.props.record],
    });
  };
  
  componentDidMount() {
    this.getNews();
    console.log(process.env.REACT_APP_API_KEY)
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
        </section>
      );
    }
  }
}

export default News;
