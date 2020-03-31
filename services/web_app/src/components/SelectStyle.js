import React, { Component } from 'react'
import store from '../store/store'
import { connect } from 'react-redux'
import { updateMapStyle } from '../store/actions'

import '../styles/SelectStyle.css'

const mapStateToProps = state => {
  return { 
    mapStyle: state.mapStyle,
  }
}

class ReduxSelectStyle extends Component {
  constructor() {
    super()

    this.state = {}
  }

  handleChange(event) {
    store.dispatch(updateMapStyle(event.target.value))
  }
  
  render () {
    return (
      <form className="select-style">
        <label>
          Style:
          <select value={this.props.mapStyle} onChange={this.handleChange}>
            <option value='http://localhost:7777/styles/dark.json'>Dark Mode</option>
            <option value='http://localhost:7777/styles/positron.json'>Positron</option>
            <option value='http://localhost:7777/styles/bright.json'>Bright</option>
            <option value='http://localhost:7777/styles/klok.json'>Klokantech</option>
          </select>
        </label>
    </form>
    )
  }
}

const SelectStyle = connect(mapStateToProps)(ReduxSelectStyle)

export default SelectStyle
