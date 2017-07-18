import fetch from 'isomorphic-fetch'

const API_URL = 'http://localhost:3000'

export default {

  get(url, jwt) {
    const headers =  {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer: ${jwt}`
    }
    return fetch(`${API_URL}${url}`, {
      method: 'GET',
      headers: headers
    }).then(response => (response.json()));
  },

  patch(url, jwt, data) {
    const headers =  {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer: ${jwt}`
    }
    return fetch(`${API_URL}${url}`, {
      method: 'PATCH',
      headers: headers,
      body: JSON.stringify(data)
    }).then(response => (response.json()));
  },

  post(url, jwt, data) {
    const headers =  {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer: ${jwt}`
    }
    return fetch(`${API_URL}${url}`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(data)
    }).then(response => (response.json()));
  }

}
