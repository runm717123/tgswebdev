const apiUrl = 'http://rstall.tifuniwa17.com/api/';
// const apiUrl = 'http://localhost:8000/api/';

export async function requestToken(payload) {
  try {
    let response = await fetch(apiUrl + 'token/request', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error(error);
  }
}

export async function push(payload) {
  try {
    let response = await fetch(`${apiUrl}user/${payload.segment}`, {
      method: payload.method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload.body),
    });
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error(error);
  }
}
