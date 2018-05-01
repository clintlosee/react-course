import React, { Component } from 'react';
import _ from 'lodash';
import YTSearch from 'youtube-api-search';

import { SearchBar } from './components/inputs';
import { VideoDetail, VideoList } from './components/video';

import './App.css';

const API_KEY = 'AIzaSyCDT0KOS16H4kJm7Duza1gqVGz4zqGiUL8';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('fly fishing');
    }

    videoSearch(term) {
        YTSearch({ key: API_KEY, term: term}, (data) => {
            this.setState({
                videos: data,
                selectedVideo: data[0]
            });
        });
    }

  render() {
      const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 500);

    return (
      <div className="App container">
        <div className="row">
            <SearchBar onSearchTermChange={videoSearch} />
            <VideoDetail video={this.state.selectedVideo} />
            <VideoList onVideoSelect={selectedVideo => this.setState({selectedVideo})} videos={this.state.videos} />
        </div>
      </div>
    );
  }
}

export default App;
