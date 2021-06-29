// O userContext funciona como um CONSUMER*****
import React, { useContext } from 'react';
import issContent from '../Content/ISSContent';
// Essa parte da tabela eu tive a ajudado meu colega Gabriel Miranda. Link do PR dele: https://github.com/tryber/sd-010-b-project-starwars-planets-search/pull/67/commits/e0cbd69ca01e7156ec04e1383035be84c44a3ff2

function CriarTabela() { // ESSAS FUNCTION DEVEM COMEÇAR COM LETRA MAÍUSCULA, senão dá erro.
  const { data, filterGeral:
    { filters: { filterByName, filterByNumericValues } } } = useContext(issContent);

  // OBRIGATÓRIO. isso aqui me faz não precisar usar o issContent. Consumer. Fazendo isso aqui, eu estou pegando(consumindo) as informações de DATA que vieram lá do FETCHPROVEDOR, só que não precisei cobrir tudo com o consumer.

  // na minha função abaixo, irei colocar dentro dela mais duas funções.
  function cabecalhoTabela() { // . Essas funções de dentro começam com letra minúscula, senão dá erro também.        Essa aqui cria o cabeçalho(header)
    return ( // aqui tanto faz colocar os nomes em portugues ou Inglês, porque é o que vai aparecer no header da tabela.
      <thead>
        <tr>
          <th>nome</th>
          <th>período_de_Rotação</th>
          <th>período_Orbital</th>
          <th>diâmetro</th>
          <th>clima</th>
          <th>gravidade</th>
          <th>terreno</th>
          <th>população</th>
          <th>água_na_superfície</th>
          <th>filmes</th>
          <th>criação</th>
          <th>edição</th>
          <th>url</th>
        </tr>
      </thead>
    ); // o requisito 1 pede pra não colocar residentes na tabela *****
  }
  function conteudoTabela() {
    // cria o resto da tabela. IMPORTANTE: Os do map logo abaixo  PRECISAM ser em Inglês, porque são nomes que estão no data pela requisição que fiz pra aquela API. Então precisa ser IDÊNTICO sobre como vem da API, todas letras minúsculas também

    function filtragem() {
      // let novosDados = data;
      let novosDados = data.filter(({ name }) => name.includes(filterByName));
      console.log(filterByName);
      filterByNumericValues.forEach(({ column, comparison, value }) => {
        const filtro = novosDados
          .filter((planeta) => {
            if (comparison === 'maior que') {
              return parseInt(planeta[column], 10) > parseInt(value, 10);
            }
            if (comparison === 'menor que') {
              return parseInt(planeta[column], 10) < parseInt(value, 10);
            }
            if (comparison === 'igual a') {
              return parseInt(planeta[column], 10) === parseInt(value, 10);
            }
            return planeta;
          });
        novosDados = filtro;
      });
      return (novosDados);
    }
    return (
      <tbody>
        {
          filtragem().map((planeta, index) => (
            <tr key={ index }>
              <td>{planeta.name}</td>
              <td>{planeta.rotation_period}</td>
              <td>{planeta.orbital_period}</td>
              <td>{planeta.diameter}</td>
              <td>{planeta.climate}</td>
              <td>{planeta.gravity}</td>
              <td>{planeta.terrain}</td>
              <td>{planeta.population}</td>
              <td>{planeta.surface_water}</td>
              <td>{planeta.films}</td>
              <td>{planeta.created}</td>
              <td>{planeta.edited}</td>
              <td>{planeta.url}</td>
            </tr>
          ))
        }
      </tbody>
    ); // ****** OBS MUITO IMPORTANTE:  a lógica do FILTER e MAP: eu vou pegar os planetas pelo data(vieram pela API), aí faço uma FILTRAGEM(uso o filter), e ai terei retorno de um ou mais planetas que passarem pelo filtro. Usei o NAME(nome de planetas) porque é o name que vem da API.
    // o filter me retorna um name(que veio da API), ou seja, planetas que passem pelo seguinte critério: o nome precisa conter o que está escrito no input, ou seja, no filterByName(o name precisa incluir o que tá escrito no input/filterByName). Depois que atender esse critério, aí faz um MAP pra esses planetas que passaram no critério, aí o map vai rodar o data e vai rolar todos esses TD's que botei na tabela, e então será feita a tabela preenchida todinha somente com os planetas depois do filtro.
  }
  return (
    <table>
      {cabecalhoTabela()}
      {conteudoTabela()}
    </table>
  );
}
export default CriarTabela;
