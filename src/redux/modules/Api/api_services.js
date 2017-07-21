import fetch from 'isomorphic-fetch'
import { API_URL } from '../../../constants'

const status = response => (
  response.ok ? 
    Promise.resolve(response) : 
    Promise.reject(new Error(response.statusText))
)

export default {
  get(url) {
    const jwt = sessionStorage.getItem('jwt');
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
    .then(response => (response.json()))
    .then((data) => (
      data.errors ?
        Promise.reject(data.errors) :
        Promise.resolve(data)
    ))
  },

  patch(url, data) {
    const jwt = sessionStorage.getItem('jwt');
    const headers =  {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer: ${jwt}`
    }
    return fetch(`${API_URL}${url}`, {
      method: 'PATCH',
      headers: headers,
      body: JSON.stringify(data)
    }).then(response => (response.json()))
    .then((data) => (
      data.errors ?
        Promise.reject(data.errors) :
        Promise.resolve(data)
    ))
  },

  post(url, data) {
    const jwt = sessionStorage.getItem('jwt');
    const headers =  {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer: ${jwt}`
    }
    return fetch(`${API_URL}${url}`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(data)
    }).then(response => (response.json()))
    .then((data) => (
      data.errors ?
        Promise.reject(data.errors) :
        Promise.resolve(data)
    ))
  },

    delete(url) {
    const jwt = sessionStorage.getItem('jwt');
    const headers =  {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer: ${jwt}`
    }
    return fetch(`${API_URL}${url}`, {
      method: 'DELETE',
      headers: headers,
    }).then(response => (response.json()))
    .then((data) => (
      data.errors ?
        Promise.reject(data.errors) :
        Promise.resolve(data)
    ))
  }

}
