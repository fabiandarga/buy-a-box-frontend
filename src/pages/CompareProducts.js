import React, { useState, useEffect } from 'react';
import Table from '../components/Table';
import SearchOption from '../components/SearchOption';
import { comparisonFilter } from '../config/filter';
import { optionsToStrings } from '../utils/array-utils';
import { fetchDataCompareProducts, fetchShops } from '../utils/api';

import './compareProducts.css';

function CompareProducts(props) {
  const {
    selectedProducts,
    selectedLanguage,
    selectedType,
    productOptions,
    languageOptions,
    typeOptions,
  } = props;
  const [allItems, setAllItems] = useState([]);
  const [shops, setShops] = useState([]);
  const [productFilter, setProductFilter] = useState(comparisonFilter.productFilter);
  const [languageFilter, setLanguageFilter] = useState(comparisonFilter.languageFilter);
  const [typeFilter, setTypeFilter] = useState(comparisonFilter.typeFilter);

  useEffect(() => {
    fetchDataCompareProducts().then((data) => {
      setAllItems(data);
    });
    fetchShops().then((data) => {
      setShops(data);
    });
  }, []);

  const handleProductsSelected = (selected) => {
    setProductFilter(optionsToStrings(Array.isArray(selected) ? selected : [selected]));
  };

  const handleLanguagesSelected = (selected) => {
    setLanguageFilter(optionsToStrings(Array.isArray(selected) ? selected : [selected]));
  };

  const handleTypeSelected = (selected) => {
    setTypeFilter(optionsToStrings(Array.isArray(selected) ? selected : [selected]));
  };

  const title = productFilter.length
    ? allItems.find((item) => item.code === productFilter[0])?.name
    : '';

  const iconClassname = `ss ss-${productFilter[0].toLowerCase()}`;

  const filterItems = allItems
    .filter((item) => {
      if (productFilter.length > 0 && !productFilter.includes(item.code)) {
        return false;
      }
      if (typeFilter.length > 0 && !typeFilter.includes(item.type)) {
        return false;
      }
      if (languageFilter.length > 0 && !languageFilter.includes(item.lang)) {
        return false;
      }
      return true;
    })
    .sort((itemA, itemB) => itemA.price - itemB.price);

  return (
    <div>
      <div>
        <SearchOption
          selectedProducts={selectedProducts}
          selectedLanguage={selectedLanguage}
          selectedType={selectedType}
          onProductsChange={handleProductsSelected}
          onLanguageChange={handleLanguagesSelected}
          onTypeChange={handleTypeSelected}
          productOptions={productOptions}
          languageOptions={languageOptions}
          typeOptions={typeOptions}
        />
      </div>
      <h2 className="compareTitle">
        <i className={iconClassname} />
        <span className="product">{title}</span>
        <span> - </span>
        <span className="type">{typeFilter} Display</span>
      </h2>
      <Table shops={shops} items={filterItems} />
    </div>
  );
}

export default CompareProducts;
