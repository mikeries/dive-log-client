import fetch from 'isomorphic-fetch'
import { API_URL } from '../../../constants'

// TODO: refactor to eliminate duplicate for for callbacks and headers

const defaultHeaders =  {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
};

const status = response => (
  response.ok ? 
    Promise.resolve(response) : 
    Promise.reject(new Error(response.statusText))
)

export default {

  exchangeFbTokenForJWT(data) {
    const headers =  defaultHeaders;
    return fetch(`${API_URL}/auth/facebook_user`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(data)
    }).then(response => response.json())
    .then(data => (
      data.errors ?
        Promise.reject(data.errors) :
        Promise.resolve(data)
    ));
  },

  get(url) {
    const jwt = sessionStorage.getItem('jwt');
    const headers =  {...defaultHeaders,
      'Authorization': `Bearer: ${jwt}`
    };
    return fetch(`${API_URL}${url}`, {
      method: 'GET',
      headers: headers
    })
    .then(status)
    .then(response => response.json())
    .then(data => 
      data.errors ?
        Promise.reject(data.errors) :
        Promise.resolve(data)
    );
  },

  patch(url, data) {
    const jwt = sessionStorage.getItem('jwt');
    const headers =  {...defaultHeaders,
      'Authorization': `Bearer: ${jwt}`
    };
    return fetch(`${API_URL}${url}`, {
      method: 'PATCH',
      headers: headers,
      body: JSON.stringify(data)
    }).then(response => response.json())
    .then(data => 
      data.errors ?
        Promise.reject(data.errors) :
        Promise.resolve(data)
    );
  },

  post(url, data) {
    const jwt = sessionStorage.getItem('jwt');
    const headers =  {...defaultHeaders,
      'Authorization': `Bearer: ${jwt}`
    };
    return fetch(`${API_URL}${url}`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(data)
    }).then(response => response.json())
    .then(data => (
      data.errors ?
        Promise.reject(data.errors) :
        Promise.resolve(data)
    ));
  },

    delete(url) {
    const jwt = sessionStorage.getItem('jwt');
    const headers =  {...defaultHeaders,
      'Authorization': `Bearer: ${jwt}`
    };
    return fetch(`${API_URL}${url}`, {
      method: 'DELETE',
      headers: headers,
    }).then(response => response.json())
    .then(data => 
      data.errors ?
        Promise.reject(data.errors) :
        Promise.resolve(data)
    );
  }

}
