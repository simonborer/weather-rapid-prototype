import React, { Component } from 'react'

export default class Geo extends Component {
    constructor(props) {
    super(props);
    this.state = {
      lat: null,
      lng: null,
    }
  }

  componentWillMount() {
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({ lat: position.coords.latitude, lng: position.coords.longitude });
    }, err => {console.log(err)}
    );
  }

  render() {
    return (
      <div>
        <div>Current Position:</div>
        <div>Latitude: {this.state.lat}</div>
        <div>Longitude: {this.state.lng}</div>
      </div>
    );
  }
}
