class SessionApi {
  static login(loginType) {
    console.log('logging in')
    const request = new Request(`http://localhost:3000/authenticate`, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer: '
      }), 
      body: JSON.stringify({type: loginType})
    });


    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  } 
}

export default SessionApi;