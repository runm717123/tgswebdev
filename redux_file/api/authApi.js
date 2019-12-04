const apiUrl = 'http://rstall.tifuniwa17.com';

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
