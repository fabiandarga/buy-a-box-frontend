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
      <div className="inscriptions">
        <div> </div>
        <div>Preis</div>
        <div>Versand</div>
        <div>Shop</div>
        <div> </div>
      </div>
      {items.map((item, index) => (
        <>
          {index > 0 && <hr />}
          <ProductRow
            // eslint-disable-next-line no-underscore-dangle
            key={item._id}
            language={item.lang}
            price={item.price}
            shop={item.shop}
            shipping={getShopShippingForItem(item, shops)}
            url={getShopUrlForItem(item, shops)}
          />
        </>
      ))}
    </section>
  );
}

export default Table;
