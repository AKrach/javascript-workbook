import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NewsCard from './NewsCard';


/* parent Component
    fetches Api

child Component: article card
    display all top stories cards
    each story will have a title, url, upvotes, posted time, and number of comments.

child component: upvote controller
    control the the upvote count which moves storys up or down based on amount of points
*/
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      stories: []
    };
  }

  componentWillMount() {
    fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty').then((res) => {
    res.json().then((storyIds) => {
      storyIds.slice(0, 20).forEach((storyId) => {
        fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json?print=pretty`).then((res) => {
          res.json().then((story) => {
            this.setState({stories: [...this.state.stories, story]})

          });
        });
      });
    });
  });
  }
  renderStories(){
    if(this.state.stories){
      return this.state.stories.map((story, index) =>{
        return <NewsCard key={index} title={story.title} by={story.by} />
      });
    }
  }


  render() {

    return (
      <div className="App">
        {this.renderStories()}
      </div>
    );
  }
}

export default App;
