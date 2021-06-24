export default async function fetchMovieTitle(url) {
  const filmdata = await fetch(url).then((response) => response.json());
  console.log(filmdata.title);
  return filmdata.title;
}
