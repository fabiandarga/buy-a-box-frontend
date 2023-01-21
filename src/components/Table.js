import React from 'react';
import ProductRow from './ProductRow';
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
  const { shops, items } = props;

  return (
    <table className="tableContent">
      <thead>
        <tr className="inscriptions">
          <th> </th>
          <th>Preis</th>
          <th>Versand</th>
          <th>Shop</th>
          <th> </th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <ProductRow
            // eslint-disable-next-line no-underscore-dangle
            key={item._id}
            language={item.lang}
            price={item.price}
            shop={item.shop}
            shipping={getShopShippingForItem(item, shops)}
            url={getShopUrlForItem(item, shops)}
          />
        ))}
      </tbody>
    </table>
  );
}

export default Table;
