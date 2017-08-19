import React, { Component } from "react";
import { connect } from "react-redux";

import Map from "../components/GoogleMap";
import { Chart } from "../components/Chart";

class WeatherList extends Component {
  renderWeather = cityData => {
    const { name, id, coord } = cityData.city;
    const temps = cityData.list
      .map(weather => weather.main.temp)
      .map(weather => (weather - 273.15) * 9 / 5 + 32);
    const humidity = cityData.list.map(weather => weather.main.humidity);
    const pressure = cityData.list.map(weather => weather.main.pressure);
    const location = {
      lat: coord.lat,
      lng: coord.lon
    };
    return (
      <tr key={id}>
        <td style={{ width: "100%", height: "100%" }}>
          <Map
            center={location}
            containerElement={<div style={{ height: 100 + "%" }} />}
            mapElement={<div style={{ height: 100 + "%" }} />}
          />
        </td>
        <td>
          <Chart data={temps} color="#F7B2B7" units="F" />
        </td>
        <td>
          <Chart data={pressure} color="#F7717D" units="hPa" />
        </td>
        <td>
          <Chart data={humidity} color="#DE639A" units="%" />
        </td>
      </tr>
    );
  };

  render() {
    return (
      <table className="table is-fullwidth">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature(F)</th>
            <th>Pressure(hPa)</th>
            <th>Humidity(%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return {
    weather
  };
}

export default connect(mapStateToProps)(WeatherList);
