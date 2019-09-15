import React from 'react';
import PropTypes from 'prop-types';
import { Component } from 'react';
import { StaticMap } from 'react-map-gl';
import DeckGL, { ArcLayer } from 'deck.gl';

import 'mapbox-gl/dist/mapbox-gl.css';
import WebMercatorViewport from 'viewport-mercator-project';

const warsaw = [21.0122, 52.2297];
let animation = null;
let animation_previous = 0;

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = { color: 40, isBouncing: false, isLoaded: false };
  }
  componentDidMount() {
    animation = window.requestAnimationFrame(this._animatePoint);
  }

  componentWillUnmount() {
    window.cancelAnimationFrame(animation);
  }

  mapDidLoad() {
    this.state.setState({ ...this.state, isLoaded: true });
  }

  _animatePoint = value => {
    const animation_value = (value - animation_previous) / 6;
    animation_previous = value;
    animation = window.requestAnimationFrame(this._animatePoint);

    this.setState(this._animate_opacity(animation_value, this.state));
  };

  _animate_opacity(animation_value, state) {
    let isBouncing = state.isBouncing;
    let new_value;
    if (isBouncing) new_value = state.color - animation_value;
    else new_value = state.color + animation_value;

    if (new_value >= 255) {
      new_value = 255;
      isBouncing = true;
    }

    if (new_value <= 40) {
      new_value = 40;
      isBouncing = false;
    }

    return {
      ...this.state,
      color: new_value,
      isBouncing: isBouncing
    };
  }

  render() {
    const data = [
      { source: warsaw, target: [this.props.longitude, this.props.latitude] }
    ];
    const { longitude, latitude, zoom } = new WebMercatorViewport({
      width: 300,
      height: 300
    }).fitBounds([warsaw, data[0].target], {
      padding: 50,
      offset: [0, -0]
    });

    const viewState = {
      longitude: longitude,
      latitude: latitude,
      zoom: zoom,
      pitch: 25
    };

    const layers = [
      new ArcLayer({
        id: 'line-layer',
        data: data,
        getSourcePosition: d => d.source,
        getTargetPosition: d => d.target,
        getSourceColor: () => [51, 80, 141, this.state.color],
        getTargetColor: () => [51, 80, 141, this.state.color],
        getStrokeWidth: () => 6
      })
    ];

    return (
      <div
        style={{
          WebkitClipPath: 'circle(50% at 50% 50%)',
          clipPath: 'circle(50% at 50% 50%)',
          width: 300,
          height: 300,
          cursor: 'pointer',
          pointerEvents: 'none'
        }}
      >
        <DeckGL
          width={300}
          height={300}
          initialViewState={viewState}
          layers={layers}
        >
          <StaticMap
            on_load={this.mapDidLoad}
            mapboxApiAccessToken="pk.eyJ1IjoiYm9tYmFzYXJrYWRpYW4iLCJhIjoiY2swazA5cTRqMDY1NTNjbnU4aHE4MHR2OCJ9.AdcMo2ewAlg4ToY1ZXDWPQ"
            mapStyle="mapbox://styles/mapbox/light-v9"
          />
        </DeckGL>
      </div>
    );
  }
}

Map.propTypes = {
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired
};

export default Map;
