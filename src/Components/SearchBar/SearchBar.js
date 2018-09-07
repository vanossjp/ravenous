import React from 'react';
import './SearchBar.css';

// Create an Object with keys and values that conform to what the API expects to reecieve
const sortByOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'highest_rated',
  'Most Reviewed': 'most_reviewed'
};
//Add a method that returns the current CSS class of the sort Options
function getSortByClass(sortByOption) {
  if (sortBy === sortByOption) {
    return 'active';
  } else {
    return ' ';
  }
};

// Create the SearchBar Component
class SearchBar extends React.Component {
  renderSortByOptions(){
    return Object.keys(sortByOptions).map(sortByOption => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return <li key={sortByOptionValue}>{sortByOption}</li>;
    });
  }
//Add a constructor in the SearchBar Component
  constructor(props) {
    super(props);
    this.state = {
      term: ' ',
      location: ' ',
      sortBy: 'best_match'
    };
  }
//Render the SearchBar Component
  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            {this.renderSortByOptions()}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Search Businesses" />
          <input placeholder="Where?" />
        </div>
        <div className="SearchBar-submit">
          <a>Go</a>
        </div>
      </div>
    );
  }
}

export default SearchBar;
