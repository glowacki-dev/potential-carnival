import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Component } from 'react';
import { StaticMap } from 'react-map-gl';
import DeckGL, { ArcLayer, LineLayer } from 'deck.gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import WebMercatorViewport from 'viewport-mercator-project';

const warsaw = [21.0122, 52.2297];

class Map extends Component {
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
        getSourceColor: () => [51, 80, 141, 60],
        getTargetColor: () => [51, 80, 141, 255],
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
