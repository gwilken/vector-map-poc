import React, { Component } from 'react'
import mapboxgl from 'mapbox-gl';

import store from '../store/store'
import { updateLayers } from '../store/actions'
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return { 
    mapStyle: state.mapStyle,
    layers: state.layers,
    selectedLayer: state.selectedLayer,
    color: state.color
  }
}

class ReduxMap extends Component {
  constructor() {
    super()
    this.state = {};
  }

  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: this.props.mapStyle,
      center: [-118.243683, 34.052235],
      zoom: 13
    });

    this.map.on('load', () => {  
      this.handleUpdateLayers()
    })
  }


  handleUpdateLayers() {
    // get all layers for this particular style and organize by key so we can select them later based on type
    let layers = this.map.getStyle().layers
    let layersMap = {}
    layers.forEach(layer => {
      layersMap[layer.id] = layer
    })

    store.dispatch(updateLayers(layersMap))
  }


  componentDidUpdate(prevProps) {
    if (this.props.mapStyle !== prevProps.mapStyle) {
      this.map.setStyle(this.props.mapStyle);

      this.map.on('styledata', () => {
        this.handleUpdateLayers()
      })
    }

    if (this.props.color !== prevProps.color) {
      let type = this.props.layers[this.props.selectedLayer].type
      let paintProperty

      switch (type) {
        case 'background':
          paintProperty = 'background-color'
          break;

        case 'line':
          paintProperty = 'line-color'
          break;
        
        case 'fill':
          paintProperty = 'fill-color'
          break;  
      
        case 'symbol':
          paintProperty = 'text-color'
          break;
        
        default:
          paintProperty = ''
          break;
      }
      
      this.map.setPaintProperty(this.props.selectedLayer, paintProperty, this.props.color); 
    }
  }

  componentWillUnmount() {
    this.map.remove();
  }

  handleSaveStyle() {
    const data = JSON.stringify(this.map.getStyle())
    const blob = new Blob([data], {type: 'text/plain'})
    const e = document.createEvent('MouseEvents'),
    a = document.createElement('a');
    a.download = "style.json";
    a.href = window.URL.createObjectURL(blob);
    a.dataset.downloadurl = ['text/json', a.download, a.href].join(':');
    e.initEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    a.dispatchEvent(e);
  }

  render() {
    const style = {
      position: 'absolute',
      top: 0,
      bottom: 0,
      width: '100%'
    };

    return (
      <div style={style} ref={el => this.mapContainer = el}> 
        <div className="button" onClick={() => this.handleSaveStyle() }>Save Current Style</div>
      </div>
    )  
  }
}

const Map = connect(mapStateToProps)(ReduxMap)

export default Map
