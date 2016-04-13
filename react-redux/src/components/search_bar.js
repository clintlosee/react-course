 import React, { Component } from 'react';

// Functional Component --------------
// const SearchBar = () => {
//   return <input />;
// };

class SearchBar extends Component {
  constructor(props) {
    super(props); // calls parent Component method

    this.state = { term: '' }; // only use this.state in constructor function
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

  render() {
    return (
      <div className="search-bar">
        <input 
          onChange={e => this.onInputChange(e.target.value)}
          value={this.state.term} />
      </div>
    );
  }
}

export default SearchBar; // same as module.exports = SearchBar;