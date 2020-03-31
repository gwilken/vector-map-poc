import {
  UPDATE_MAP_STYLE,
  UPDATE_LAYERS,
  UPDATE_SELECTED_LAYER,
  UPDATE_SELECTED_LAYER_TYPE,
  UPDATE_COLOR
} from './constants'

const initialState = {
  mapStyle: 'http://localhost:7777/styles/klok.json',
  layers: [],
  selectedLayer: 'background',
  selectedLayerType: null,
  color: ''
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_MAP_STYLE:
      return { ...state, mapStyle: action.payload }

    case UPDATE_LAYERS:
      return { ...state, layers: action.payload }

    case UPDATE_SELECTED_LAYER:
      return { ...state, selectedLayer: action.payload }

    case UPDATE_SELECTED_LAYER_TYPE:
      return { ...state, selectedLayerType: action.payload }

    case UPDATE_COLOR:
      return { ...state, color: action.payload }

    default:
      return state;
    }
  }
  
export default rootReducer
  