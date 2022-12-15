import React from 'react';
import ProduktRow from './ProduktRow';
import './table.css';

function Table(props) {
  const { items } = props;
  return (
    <div>
      <table>
        <tr>
          <th>.</th>
          <th>Name</th>
          <th>Preis</th>
          <th>Versand</th>
          <th>Shop</th>
          <th>.</th>
        </tr>
        {items.map((item) => (
          <ProduktRow
            edition={item.edition}
            produkt={item.produkt}
            sprache={item.sprache}
            preis={item.preis}
            shop={item.shop}
            versand={item.versand}
          />
        ))}
      </table>
    </div>
  );
}

export default Table;
