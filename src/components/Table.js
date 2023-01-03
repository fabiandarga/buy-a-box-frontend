import React from 'react';
import ProduktRow from './ProduktRow';
import './table.css';

function findShopForId(id, shops) {
  return shops.find((shop) => shop.id === id);
}

function getShopUrlForItem(item, shops) {
  if (!shops || !item) {
    return '';
  }
  const found = findShopForId(item.shop, shops);
  if (found) {
    return found.url;
  }
  return '';
}

function getShopShippingForItem(item, shops) {
  if (!shops || !item) {
    return '';
  }
  const found = findShopForId(item.shop, shops);
  if (found) {
    return found.shipping;
  }
  return '';
}

function Table(props) {
  const { items, shops } = props;

  return (
    <div className="tableContent">
      <tr>
        <th> </th>
        <th>Name</th>
        <th>Preis</th>
        <th>Versand</th>
        <th>Shop</th>
        <th> </th>
      </tr>
      {items.map((item) => (
        <ProduktRow
          key={item.id}
          edition={item.name}
          produkt={item.type}
          language={item.lang}
          price={item.price}
          shop={item.shop}
          shipping={getShopShippingForItem(item, shops)}
          url={getShopUrlForItem(item, shops)}
          code={item.code}
        />
      ))}
    </div>
  );
}

export default Table;
