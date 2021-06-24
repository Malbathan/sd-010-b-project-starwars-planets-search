import { useState, useEffect } from 'react';

function Table() {
  const [data, setData] = useState([]);

  return (
    <table>
      <thead>
        <tr>
          <td>Planeta</td>
        </tr>
      </thead>
    </table>
  );
}
