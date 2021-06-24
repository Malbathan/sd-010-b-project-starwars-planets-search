import React from 'react';

export default function Table() {
  const THeaders = [];
  return (
    <table>
      <tbody>
        <tr>
          {THeaders.map((title, i) => <th key={ i }>{title}</th>)}
        </tr>
        <tr />
      </tbody>
    </table>
  );
}
