import React, { Component } from "react";
import { withGoogleMap, GoogleMap } from "react-google-maps";

class Map extends Component {
  render() {
    return (
      <GoogleMap
        defaultZoom={12}
        defaultCenter={{
          lat: this.props.center.lat,
          lng: this.props.center.lng
        }}
      />
    );
  }
}

export default withGoogleMap(Map);
