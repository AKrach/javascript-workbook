import React, { Component } from 'react';
import './App.css';

class NewsCard extends Component {
  render() {
    return (
      <div className=''>
        <h2>
          <a href={this.props.url} target="_blank">
            {this.props.title}
          </a>
        </h2>
      </div>
    )
  }
}

export default NewsCard;
