import React, { Component } from "react";
import Hero from "./Hero";
import Navbar from "./Navbar";
import SearchBar from "../containers/SearchBar";
import WeatherList from "../containers/WeatherList";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Hero />
        <div className="section">
          <div className="container">
            <SearchBar />
            <WeatherList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
