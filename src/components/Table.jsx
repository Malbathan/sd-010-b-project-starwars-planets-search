import React, { Component } from 'react';
import getPlanets from '../API/GetPlanets';

export default class Table extends Component {
  render() {
    const api = getPlanets();
    console.log(api);
    return (
      <span>eu sou a tabela</span>
    );
  }
}
