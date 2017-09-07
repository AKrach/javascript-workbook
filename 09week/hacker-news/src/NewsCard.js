import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class NewsCard extends Component {
  render() {
    return (
      <div className=''>
        <h2>{this.props.title}</h2>
      </div>
    )
  }
}

export default NewsCard;
