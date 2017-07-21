import fetch from 'isomorphic-fetch'
import { API_URL } from '../../../constants'

const status = response => (
  response.ok ? 
    Promise.resolve(response) : 
    Promise.reject(new Error(response.statusText))
)

function json(response) {
  return response.json()
}

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
    })
    .then(status)
    .then(json)
    .then((data) => {
      if (data.errors) {
        return Promise.reject(data.errors);
      } else {
        return Promise.resolve(data);
      }
    })
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
  },

    delete(url, jwt) {
    const headers =  {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer: ${jwt}`
    }
    return fetch(`${API_URL}${url}`, {
      method: 'DELETE',
      headers: headers,
    }).then(response => (response.json()));
  }

}
