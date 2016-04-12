import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyCDT0KOS16H4kJm7Duza1gqVGz4zqGiUL8';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: 'surfboards'}, (data) => {
      this.setState({videos: data}); // if videos: videos, it can just be videos
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
};

// Put component into the DOM
ReactDOM.render(<App />, document.getElementById('main'));