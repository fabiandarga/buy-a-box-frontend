import { React, useState, useEffect } from 'react';
import Table from '../components/Table';
import SearchOption from '../components/SearchOption';
import FilterConfig from '../config/filter';
import { optionsToStrings } from '../utils/array-utils';

const SCRAPER_PATH = 'https://buy-a-box-backend.herokuapp.com/data/';
const SHOPS_PATH = 'http://localhost:4000/shops';

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

  const fetchData = async () => {
    const url = new URL(SCRAPER_PATH);
    url.searchParams.append('from', new Date(Date.now() - 86400000).toISOString().slice(0, 10));
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setAllItems(data);
      })
      .catch((err) => err);
  };

  const fetchShops = async () => {
    await fetch(SHOPS_PATH)
      .then((response) => response.json())
      .then((data) => {
        setShops(data);
      })
      .catch((err) => err);
  };

  useEffect(() => {
    fetchData();
    fetchShops();
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
      <h1>Compare Products</h1>
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
