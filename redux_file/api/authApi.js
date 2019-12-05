// const apiUrl = 'http://rstall.tifuniwa17.com/api/';
const apiUrl = 'http://localhost:8000/api/';

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

export function fetchingData(payload) {
  console.log(payload, 'fetchdata payload');
  const segment = payload.segment;
  let additional = {};
  // const header = payload.header;
  if ('method' in payload) {
    additional.method = payload.method;
    additional.headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    additional.body = JSON.stringify(payload.body);
  }

  console.log(additional, 'fetch additional config');

  return fetch(apiUrl + segment, additional)
    .then(response => response.json())
    .then(responseJson => {
      console.log(responseJson, 'response json');
      return responseJson;
    })
    .catch(error => {
      console.error(error);
    });
}
