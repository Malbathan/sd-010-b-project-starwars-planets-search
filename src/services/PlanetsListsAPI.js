const API_URL_BASE = 'https://swapi-trybe.herokuapp.com/api/planets/';

export default async function getAPIPlanetsInfo() {
  fetch(API_URL_BASE).then((resp) => (
    resp
      .json()
      .then((json) => (resp.ok ? Promise.resolve(json) : Promise.reject(json)))
  ));
}
