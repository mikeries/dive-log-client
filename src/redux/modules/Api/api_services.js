import fetch from 'isomorphic-fetch'

const API_URL = 'https://localhost:3000'

export default {

  get(url, jwt) {
    const headers =  {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer: ${jwt}`
    }
    return fetch(`${API_URL + url}`, {
      method: 'GET',
      headers: headers
    })
    .then(response => {response.json()})
  }

}