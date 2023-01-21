import React, { useState, useEffect } from 'react';
import Table from '../components/Table';
import SearchOption from '../components/SearchOption';
import FilterConfig from '../config/filter';
import { optionsToStrings } from '../utils/array-utils';
import { fetchDataCompareProducts, fetchShops } from '../utils/api';

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
  const [productFilter, setProductFilter] = useState(FilterConfig.productFilter);
  const [languageFilter, setLanguageFilter] = useState(FilterConfig.languageFilter);
  const [typeFilter, setTypeFilter] = useState(FilterConfig.typeFilter);

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

  const filterItems = allItems.filter((item) => {
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
  });

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
      <Table items={allItems} shops={shops} filterItems={filterItems} />
    </div>
  );
}

export default CompareProducts;
