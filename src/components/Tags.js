import React from 'react';
import Tag from './Tag';

import './tags.css';

function Tags(props) {
  const { productOptions, shopOptions, langOptions, typeOptions } = props;
  const productFilter = productOptions.map((item) => item.value);
  const shopFilter = shopOptions.map((item) => item.value);
  const languageFilter = langOptions.map((item) => item.value);
  const typeFilter = typeOptions.map((item) => item.value);
  return (
    <div>
      <div>
        <div className="section-title"> Shops</div>
        <div className="allTags">
          {shopFilter.length === 0 && <Tag>Alle Shops</Tag>}
          {shopFilter.map((filter) => (
            <Tag key={filter}>{filter}</Tag>
          ))}
        </div>
      </div>
      <div>
        <div className="section-title">Products</div>
        <div className="allTags">
          {productFilter.length === 0 && <Tag>Alle Produkte</Tag>}
          {productFilter.map((filter) => (
            <Tag key={filter}>
              <i className={`ss ss-${filter}`} /> {filter}
            </Tag>
          ))}
        </div>
        <div className="section-title">Language</div>
        <div className="allTags">
          {languageFilter.length === 0 && <Tag>Alle Sprachen</Tag>}
          {languageFilter.map((filter) => (
            <Tag key={filter}>{filter}</Tag>
          ))}
        </div>
        <div className="section-title">Type</div>
        <div className="allTags">
          {typeFilter.length === 0 && <Tag>Alle Types</Tag>}
          {typeFilter.map((filter) => (
            <Tag key={filter}>{filter}</Tag>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tags;
