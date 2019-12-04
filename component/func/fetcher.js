import {apiUrl} from '../../config';

// work with async caller too ..
export async function _get(s) {
  let response = await fetch(apiUrl + s);
  let responseJson = await response.json();
  return responseJson;
}

export async function _pull(url, param, token = '') {
  let response = await fetch(apiUrl + url, {
    method: param.method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
    body: JSON.stringify(param.body),
  });
  let responseJson = await response.json();
  return responseJson;
}
