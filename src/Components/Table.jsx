// O userContext funciona como um CONSUMER*****
import React, { useContext } from 'react';
import issContent from '../Content/ISSContent';
// Essa parte da tabela eu tive a ajudado meu colega Gabriel Miranda. Link do PR dele: https://github.com/tryber/sd-010-b-project-starwars-planets-search/pull/67/commits/e0cbd69ca01e7156ec04e1383035be84c44a3ff2

function CriarTabela() { // ESSAS FUNCTION DEVEM COMEÇAR COM LETRA MAÍUSCULA, senão dá erro.
  const { data } = useContext(issContent); // OBRIGATÓRIO. isso aqui me faz não precisar usar o issContent. Consumer. Fazendo isso aqui, eu estou pegando(consumindo) as informações de DATA que vieram lá do FETCHPROVEDOR, só que não precisei cobrir tudo com o consumer.

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
    );
  }
  function conteudoTabela() { // cria o resto da tabela. IMPORTANTE: Os do map logo abaixo  PRECISAM ser em Inglês, porque são nomes que estão no data pela requisição que fiz pra aquela API. Então precisa ser IDÊNTICO, todas letras minúsculas tb
    return (
      <tbody>
        {
          data.map((planeta, index) => (
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
    );
  }
  return (
    <table>
      {cabecalhoTabela()}
      {conteudoTabela()}
    </table>
  );
}
export default CriarTabela;
