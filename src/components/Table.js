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
  const { shops, filterItems } = props;

  return (
    <table className="tableContent">
      <thead>
        <tr className="inscriptions">
          <th> </th>
          <th>Name</th>
          <th>Preis</th>
          <th>Versand</th>
          <th>Shop</th>
          <th> </th>
        </tr>
      </thead>
      <tbody>
        {filterItems.map((item) => (
          <ProductRow
            // eslint-disable-next-line no-underscore-dangle
            key={item._id}
            set={item.name}
            productType={item.type}
            language={item.lang}
            price={item.price}
            shop={item.shop}
            shipping={getShopShippingForItem(item, shops)}
            url={getShopUrlForItem(item, shops)}
            code={item.code}
          />
        ))}
      </tbody>
    </table>
  );
}

export default Table;
