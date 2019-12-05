// const apiUrl = 'http://rstall.tifuniwa17.com/api/';
const apiUrl = 'http://localhost:8000/api/';

export async function getItem(payload) {
  try {
    let response = await fetch(apiUrl + 'item/' + payload.segment, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + payload.token,
      },
    });
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error(error);
  }
}
