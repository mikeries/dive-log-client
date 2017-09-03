import fetch from 'isomorphic-fetch'
import { FACEBOOK_AUTHORIZATION_PATH } from '../../../constants'

const API_URL = process.env.REACT_APP_API_URL

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

// TODO: clarify error structure -- differentiate between handled and unhandled errors

const parseToJson = response => response.json()

const checkForApiErrors = data => (
  data.errors ?
    Promise.reject(data.errors) :
    Promise.resolve(data)
)

const parseResponse = response => {
  let result = response.status === 422 || response.ok ? 
            Promise.resolve(response) : 
            Promise.reject(new Error(response.statusText))
  return result
    .then(parseToJson)
    .then(checkForApiErrors);
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

  postWithoutAuthorization(url) {
    return fetch(`${API_URL}${url}`, {
      method: 'POST',
      headers: headers,
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
