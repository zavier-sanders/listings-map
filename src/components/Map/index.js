import React, { Component } from 'react'
import {Map, GoogleApiWrapper} from 'google-maps-react';
import { CONFIG } from '../../config';

export class MapContainer extends Component {
  render() {
    return (
      <Map google={this.props.google} zoom={14}>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: (CONFIG.GOOGLE_API_KEY)
})(MapContainer)