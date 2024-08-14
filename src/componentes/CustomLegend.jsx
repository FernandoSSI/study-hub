import React from 'react';

const CustomLegend = ({ payload }) => {
  return (
    <ul style={{ listStyleType: 'none', padding: 0, margin: '-270px 0 0 20px' }}>
      {payload.map((entry, index) => (
        <li key={`item-${index}`} style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
          <span style={{ display: 'inline-block', width: '12px', height: '12px', backgroundColor: entry.color, marginRight: '10px' }}></span>
          {entry.value}
        </li>
      ))}
    </ul>
  );
};

export default CustomLegend;