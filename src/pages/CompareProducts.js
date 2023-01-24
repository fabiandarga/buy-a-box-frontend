import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Table from '../components/Table';
import SetSymbol from '../components/SetSymbol';
import SearchOption from '../components/SearchOption';
import { comparisonFilter } from '../config/filter';
import { optionsToStrings } from '../utils/array-utils';
import { fetchDataCompareProducts, fetchShops } from '../utils/api';

import './compareProducts.css';

function CompareProducts(props) {
  const { productOptions, languageOptions, typeOptions } = props;
  const [items, setItems] = useState([]);
  const [shops, setShops] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(comparisonFilter.productFilter);
  const [selectedLanguages, setSelectedLanguages] = useState(comparisonFilter.languageFilter);
  const [selectedType, setSelectedType] = useState(comparisonFilter.typeFilter);
  const navigate = useNavigate();

  useEffect(() => {
    const path = `product=${selectedProduct.toLowerCase()}&type=${selectedType}&lang=${selectedLanguages
      .slice(',')
      .join('&lang=')}`;
    navigate({
      search: path,
    });
  }, [selectedProduct, selectedType, selectedLanguages]);

  useEffect(() => {
    fetchShops().then(setShops);
  }, []);

  useEffect(() => {
    fetchDataCompareProducts(selectedProduct, selectedType).then(setItems);
  }, [selectedProduct, selectedType]);

  const title = items.find((item) => item.code === selectedProduct)?.name;
  const itemsSorted = items.sort((itemA, itemB) => itemA.price - itemB.price);

  const selectedProductOption = productOptions.find((opt) => opt.code === selectedProduct);
  if (!selectedProductOption) {
    return null;
  }

  return (
    <div>
      <div>
        <SearchOption
          productValue={selectedProductOption}
          languageValues={selectedLanguages}
          typeValue={selectedType}
          onProductChange={(selected) => setSelectedProduct(selected.value)}
          onLanguageChange={(selected) => setSelectedLanguages(optionsToStrings(selected))}
          onTypeChange={(selected) => setSelectedType(selected.value)}
          productOptions={productOptions}
          languageOptions={languageOptions}
          typeOptions={typeOptions}
        />
      </div>
      <h2 className="compareTitle">
        <SetSymbol code={selectedProduct} />
        <span className="product">{title}</span>
        <span> - </span>
        <span className="type">{selectedType} Display</span>
      </h2>
      <Table shops={shops} items={itemsSorted} />
    </div>
  );
}

export default CompareProducts;
