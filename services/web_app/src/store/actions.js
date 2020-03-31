import { 
  UPDATE_MAP_STYLE,
  UPDATE_LAYERS,
  UPDATE_SELECTED_LAYER,
  UPDATE_SELECTED_LAYER_TYPE,
  UPDATE_COLOR
} from './constants'

  
export const updateMapStyle = (style) => (
  {
    type: UPDATE_MAP_STYLE,
    payload: style
  }
)
  
export const updateLayers = (layers) => (
  {
    type: UPDATE_LAYERS,
    payload: layers
  }
)

export const updateSelectedLayer = (layer) => (
  {
    type: UPDATE_SELECTED_LAYER,
    payload: layer
  }
)

export const updateSelectedLayerType = (layer) => (
  {
    type: UPDATE_SELECTED_LAYER_TYPE,
    payload: layer
  }
)
  
export const updateColor = (color) => (
  {
    type: UPDATE_COLOR,
    payload: color
  }
)
