import React, { Component } from "react";

class Card extends Component {
  render() {
    const info = this.props.info;
    // Transform the info from publishedAt to a readable format for design
    const dateTaken = info.publishedAt;
    const yearTaken = dateTaken.substring(0, 4);
    const monthTaken = dateTaken.substring(5, 7) - 1;
    const dayTaken = dateTaken.substring(8, 10);
    const date = new Date(yearTaken, monthTaken, dayTaken);
    const day = date.toString().substring(8, 10);
    const month = date.toString().substring(4, 7);
    return (
      <figure className="card">
        <div className="image">
          <img src={info.urlToImage} alt={info.title} />
        </div>
        <figcaption>
          <div className="date">
            <span className="day">{day}</span>
            <span className="month">{month}</span>
          </div>
          <span className="source">{info.source.name}</span>
          <h3 className="title">{info.title}</h3>
          <p>{info.content}</p>
          <footer>
            <div className="delete">
              <button onClick={this.props.remove}>
                <i className="fas fa-trash-alt" onClick={this.props.remove}></i>{" "}
                Delete
              </button>
            </div>
            <div className="link">
              <a href={info.url}>
                <i className="fas fa-link"></i> Full Article
              </a>
            </div>
          </footer>
        </figcaption>
      </figure>
    );
  }
}

export default Card;
