import React from 'react';
import './SearchBar.css';


// Create the SearchBar Component
class SearchBar extends React.Component {

//Add a constructor in the SearchBar Component
  constructor(props) {
    super(props);
    this.state = {
      term: ' ',
      location: ' ',
      sortBy: 'best_match'
    };
//bind methods in the constructor
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
//Create an Object with keys and values that conform to what the API expects to reecieve
    this.sortByOptions = {
      'Best Match': 'best_match',
      'Highest Rated': 'rating',
      'Most Reviewed': 'review_count'
    };
  }
//Add a method that returns the current CSS class of the sort Options
  getSortByClass(sortByOption) {
    if (this.state.sortBy === sortByOption) {
      return 'active';
      } else {
        return '';
      }
    };
//Add a method that sets the state of a sorting option
  handleSortByChange(sortByOption) {
    this.setState({sortBy: sortByOption});
  }
//Add two methods to handle changes in two input elements, Terms and Location
  handleTermChange(event){
    this.setState({term: event.target.value});
  }
  handleLocationChange(event) {
    this.setState({location: event.target.value});
  }
//Build GO button functionality
  handleSearch(event) {
    this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
    event.preventDefault();
  }

  renderSortByOptions(){
    return Object.keys(this.sortByOptions).map(sortByOption => {
      let sortByOptionValue = this.sortByOptions[sortByOption];
      return
        <li
//The following line will conditionally stly each sort by option, displaying to the user which osrting option is currently selected
          className={this.getSortByClass(sortByOption)}
          key={sortByOptionValue}>{sortByOption}
//The following line will allow us to both bind to the current value of this, and bind the current sortByOptionValue as the first argument to the method call, ensuring the method is called with the appropriate value when clicked
          onClick=handleSortByChange.bind(this, sortByOptionValue)
        </li>;
    });
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
          <input placeholder="Search Businesses" onChange={this.handleTermChange}/>
          <input placeholder="Where?" onChange={this.handleLocationChange}/>
        </div>
        <div className="SearchBar-submit">
          <a onClick={this.handleSearch}>Go</a>
        </div>
      </div>
    );
  }
}

export default SearchBar;
