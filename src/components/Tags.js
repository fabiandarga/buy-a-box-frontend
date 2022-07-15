import React from 'react';
import Tag from './Tag';

import './tags.css';

function Tags(props) {
  const { productOptions, shopOptions } = props;
  const productFilter = productOptions.map((item) => item.value);

  const shopFilter = shopOptions.map((item) => item.value);

  return (
    <div>
      <div>
        <div className="tagscategory"> Shops</div>
        <div className="allTags">
          {shopFilter.map((filter) => (
            <Tag>{filter}</Tag>
          ))}
        </div>
      </div>
      <div>
        <div className="tagscategory">Products</div>
        <div className="allTags">
          {productFilter.map((filter) => (
            <Tag>{filter}</Tag>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tags;
