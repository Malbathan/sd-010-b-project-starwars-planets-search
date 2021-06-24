import React from 'react';

const Trow = ({ planet }) => Object.values(planet).map((row, idx) => {
  const checkTestid = idx === 0 ? { 'data-testid': 'planet-name' } : null;
  return (
    <td
      { ...checkTestid }
      key={ `${idx} - ${row}` }
    >
      {row}
    </td>
  );
});

export default Trow;
