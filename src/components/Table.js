/* eslint-disable no-underscore-dangle */
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
    <section className="tableContent">
      {items.map((item, index) => (
        <React.Fragment key={`hr-${item._id}`}>
          {index > 0 && <hr />}
          <ProductRow
            language={item.lang}
            price={item.price}
            shop={item.shop}
            shipping={getShopShippingForItem(item, shops)}
            url={getShopUrlForItem(item, shops)}
          />
        </React.Fragment>
      ))}
    </section>
  );
}

export default Table;
