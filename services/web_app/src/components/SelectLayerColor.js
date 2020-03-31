import React, { Component } from 'react'
import store from '../store/store'
import { connect } from 'react-redux'
import { updateSelectedLayer, updateColor } from '../store/actions'

import colors from '../constants/colors.js'

import '../styles/SelectLayerColor.css'


const mapStateToProps = state => {
  return { 
    layers: state.layers,
    selectedLayer: state.selectedLayer,
  }
}

class ReduxSelectLayerColor extends Component {
  constructor() {
    super()

    this.state = {
      options: []
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.layers !== prevProps.layers) {
      this.updateOptions()
    }
  }

  updateOptions() {
    let options = []
    for (const layer in this.props.layers) {
      options.push(
        <option key={ layer } value={ layer }>{ layer }</option>
      )
    }
    this.setState({options})
  }

  handleChange(event) {
    store.dispatch(updateSelectedLayer(event.target.value))
  }
  
  handleSwatchClick(color) {
    store.dispatch(updateColor(color))
  }

  render () {
    return (
      <div className="select-layer-color">
        <form>
          <label>
            Layer Color:
            <select value={this.props.selectedLayer} onChange={this.handleChange}>
              { this.state.options }
            </select>
          </label>
        </form>
        
        <div className="swatch-container">
            { 
              colors.map(color => {
                return (
                  <div 
                    key={ color }
                    className="swatch" 
                    style={{backgroundColor: color }}
                    onClick={ () => this.handleSwatchClick(color) }>
                  </div>
                )
              })
            }
        </div>
      </div>
    )
  }
}

const SelectLayerColor = connect(mapStateToProps)(ReduxSelectLayerColor)

export default SelectLayerColor
