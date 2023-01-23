/* eslint-disable no-underscore-dangle */
import React from 'react';
import ProductRow from './ProductRow';
import './table.css';

function findShopForId(id, shops) {
  return shops.find((shop) => shop.id === id);
}

function Table(props) {
  const { shops, items } = props;
  return (
    <section className="tableContent">
      {items
        .map((item) => {
          const shop = findShopForId(item.shop, shops);
          return {
            ...item,
            shipping: shop?.shipping || '',
            url: shop?.url || '',
            logoUrl: shop?.logoUrl || '',
          };
        })
        .map((item, index) => (
          <React.Fragment key={`hr-${item._id}`}>
            {index > 0 && <hr />}
            <ProductRow
              language={item.lang}
              price={item.price}
              shop={item.shop}
              logoUrl={item.logoUrl}
              shopLogo={item.shopUrl}
              shipping={item.shipping}
              url={item.url}
            />
          </React.Fragment>
        ))}
    </section>
  );
}

export default Table;
