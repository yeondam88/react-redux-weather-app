import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchWeather } from "../actions";

class SearchBar extends Component {
  state = {
    term: ""
  };

  onInputChange = e => {
    let term = e.target.value;
    this.setState(() => ({
      term
    }));
  };

  onSubmit = e => {
    e.preventDefault();
    const { term } = this.state;
    this.props.fetchWeather(term);
    this.setState(() => ({
      term: ""
    }));
  };

  render() {
    const { term } = this.state;
    return (
      <form className="field is-grouped" onSubmit={this.onSubmit}>
        <input
          value={term}
          onChange={this.onInputChange}
          className="input"
          type="text"
          placeholder="Search City name..."
        />
        <div className="control">
          <button type="submit" className="button is-info">
            Search
          </button>
        </div>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
