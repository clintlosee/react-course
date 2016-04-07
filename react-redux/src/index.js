import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCDT0KOS16H4kJm7Duza1gqVGz4zqGiUL8';

// Create new component. Produces HTML
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};

// Put component into the DOM
ReactDOM.render(<App />, document.getElementById('main'));