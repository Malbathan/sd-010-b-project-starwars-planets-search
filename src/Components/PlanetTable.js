import React from 'react';

export default function PlanetTable() {
  return (
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Período de Rotação</th>
          <th>Perpiodo Orbital</th>
          <th>Diâmetro</th>
          <th>Clima</th>
          <th>Gravidade</th>
          <th>Terreno</th>
          <th>Superfície da Água</th>
          <th>População</th>
          <th>Filmes</th>
          <th>Criado</th>
          <th>Editado</th>
          <th>Url</th>
        </tr>
      </thead>
      <tbody>
        {allExpenses.map((expense, idx) => (
          <tr key={ idx }>
            <td>{ expense.name }</td>
            <td>{ expense.rotation_period }</td>
            <td>{ expense.orbital_period }</td>
            <td>{ expense.diameter }</td>
            <td>{ expense.climate }</td>
            <td>{ expense.gravity }</td>
            <td>{ expense.terrain }</td>
            <td>{ expense.surface_water }</td>
            <td>{ expense.population }</td>
            <td>{ expense.films }</td>
            {/* array de strings */}
            <td>{ expense.created }</td>
            <td>{ expense.edited }</td>
            <td>{ expense.url }</td>
            <td>
              <button
                type="button"
                data-testid="delete-btn"
                onClick={ () => this.handleDelete(expense.id) }
              >
                Deletar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>

  );
}
