import fetch from 'isomorphic-fetch'
import { API_URL, FACEBOOK_AUTHORIZATION_PATH } from '../../../constants'

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}

const headersWithAuthorization = () => {
  const jwt = sessionStorage.getItem('jwt');
  return {
    ...headers,
    'Authorization': `Bearer: ${jwt}`
  }
}

const parseToJson = response => response.json()

const checkForErrors = data => (
  data.errors ?
    Promise.reject(data.errors) :
    Promise.resolve(data)
)

const parseResponse = response => {
  return (response.ok ? 
            Promise.resolve(response) : 
            Promise.reject(new Error(response.statusText)))
    .then(parseToJson)
    .then(checkForErrors);
}

export default {

  exchangeFbTokenForJWT(data) {
    return fetch(`${API_URL}${FACEBOOK_AUTHORIZATION_PATH}`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(data)
    })
    .then(parseResponse)
  },

  get(url) {
    return fetch(`${API_URL}${url}`, {
      method: 'GET',
      headers: headersWithAuthorization()
    })
    .then(parseResponse)
  },

  patch(url, data) {
    return fetch(`${API_URL}${url}`, {
      method: 'PATCH',
      headers: headersWithAuthorization(),
      body: JSON.stringify(data)
    })
    .then(parseResponse)
  },

  post(url, data) {
    return fetch(`${API_URL}${url}`, {
      method: 'POST',
      headers: headersWithAuthorization(),
      body: JSON.stringify(data)
    })
    .then(parseResponse)
  },

  delete(url) {
    return fetch(`${API_URL}${url}`, {
      method: 'DELETE',
      headers: headersWithAuthorization(),
    })
    .then(parseResponse)
  }

}
