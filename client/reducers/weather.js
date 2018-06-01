import {RECEIVE_WEATHER} from '../actions/weather'

function weather (state = [], action) {
    switch (action.type) {
      case RECEIVE_WEATHER:
      return action.weather

      default:
      return state
    }
  }

  export default weather
