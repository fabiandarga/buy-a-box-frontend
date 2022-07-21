import React from 'react';
import Tag from './Tag';

import './tags.css';

function Tags(props) {
  const { productOptions, shopOptions, langOptions } = props;
  const productFilter = productOptions.map((item) => item.value);
  const shopFilter = shopOptions.map((item) => item.value);
  const languageFilter = langOptions.map((item) => item.value);

  return (
    <div>
      <div>
        <div className="tagscategory"> Shops</div>
        <div className="allTags">
          {shopFilter.map((filter) => (
            <Tag key={filter}>{filter}</Tag>
          ))}
        </div>
      </div>
      <div>
        <div className="tagscategory">Products</div>
        <div className="allTags">
          {productFilter.map((filter) => (
            <Tag key={filter}>{filter}</Tag>
          ))}
        </div>
        <div className="tagscategory">Language</div>
        <div className="allTags">
          {languageFilter.length === 0 && <Tag>Alle Sprachen</Tag>}
          {languageFilter.map((filter) => (
            <Tag key={filter}>{filter}</Tag>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tags;
