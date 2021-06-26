const api = async () => {
  const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/'; // variável que guardará o link da api
  // fetch() - fornece uma maneira fácil e lógica para buscar recursos de forma assíncrona através da rede.
  // .then() - pega a informação e transforma para json()
  const { results } = await fetch(endpoint).then((value) => value.json());
  // para não pegar o 'result.residents' de reults na api
  results.map((result) => delete result.residents);
  return results;
};

export default api;
