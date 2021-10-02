import React, { Component } from "react";
import axios from "axios";
import ListNews from "../ListNews";

class News extends Component {
  constructor(props) {
    super(props);

    this.state = {
      news: [],
    };
  }

  getNews = async () => {
    const resp = await axios.get(
      "https://newsapi.org/v2/top-headlines?country=gb&category=technology&sortBy=popularity&apiKey=ff9bee2e53de421897bf8f64963f39c2"
    );
    // use only the first 5 news
    const result = await resp.data.articles.slice(0, 5);
    this.setState({
      news: [...result, ...this.props.record],
    });
  };
// Todo: Add load more button

  componentDidMount() {
    this.getNews();
  }

// TODO: add a spinner

  render() {
    const news = this.state.news;
    const record = this.props.record;
    console.log(record, "report");
    if (news.length === 0) {
      return (
        <section className="news-spinner">
          Cargando...
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
