export const GET_DATA = 'GET_DATA'

export function data() {
  return async function(dispatch) {
    const res = await fetch('https://api.covid19api.com/summary')
    const info = await res.json()

    console.log('info', info.Countries[232])
    return dispatch({
      type: 'GET_DATA',
      response: info.Countries[232],
    })
  }
}

export default data
