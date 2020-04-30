import { GET_DATA } from '../actions/dataAction'

const initialState = {
  response: 'Press Button to Get Stats',
}

const dataReducer = (state = initialState, action) => {
  const { type, response } = action
  switch (type) {
    case GET_DATA:
      return {
        ...state,
        response: response.Country,
        newConfirmed: response.NewConfirmed,
        newDeaths: response.NewDeaths,
        newRecovered: response.NewRecovered,
      }
    default:
      return state
  }
}

export default dataReducer
