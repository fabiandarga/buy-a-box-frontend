import React from 'react';
import DropDownSelect from './DropDownSelect';
import { stringsToOptions } from '../utils/array-utils';
import { getProductTitle } from '../utils/set-utils';
import './searchOption.css';

function SearchOption(props) {
  const {
    selectedProducts,
    selectedLanguage,
    selectedType,
    onProductsChange,
    onLanguageChange,
    onTypeChange,
    productOptions,
    languageOptions,
    typeOptions,
  } = props;

  const productFilter = productOptions.map((item) => ({
    label: getProductTitle(item),
    value: item.code,
  }));
  const languageFilter = stringsToOptions(languageOptions);
  const typeFilter = stringsToOptions(typeOptions);
  return (
    <div className="searchOption">
      <div className="searchOptionProduct">
        <span>Erweiterungen</span>
        <DropDownSelect
          variant="product"
          options={productFilter}
          value={selectedProducts}
          onChange={onProductsChange}
        />
      </div>
      <div className="searchOptionLanguage">
        <span>Sprache</span>
        <DropDownSelect
          options={languageFilter}
          value={selectedLanguage}
          onChange={onLanguageChange}
        />
      </div>
      <div className="searchOptionType">
        <span>Produkttyp</span>
        <DropDownSelect options={typeFilter} value={selectedType} onChange={onTypeChange} />
      </div>
    </div>
  );
}

export default SearchOption;
