import React from 'react';
import DropDownSelect from './DropDownSelect';
import { stringsToOptions } from '../utils/array-utils';
import { productCodeToOption } from '../utils/options-utils';
import './searchOption.css';

function SearchOption({
  productValue,
  languageValues,
  typeValue,
  onProductChange,
  onLanguageChange,
  onTypeChange,
  productOptions,
  languageOptions,
  typeOptions,
}) {
  return (
    <div className="searchOption">
      <div className="searchOptionProduct">
        <span>Erweiterungen</span>
        <DropDownSelect
          variant="product"
          options={productOptions.map(productCodeToOption)}
          value={productCodeToOption(productValue)}
          onChange={onProductChange}
        />
      </div>
      <div className="searchOptionLanguage">
        <span>Sprache</span>
        <DropDownSelect
          multi
          options={stringsToOptions(languageOptions)}
          value={stringsToOptions(languageValues)}
          onChange={onLanguageChange}
        />
      </div>
      <div className="searchOptionType">
        <span>Produkttyp</span>
        <DropDownSelect
          options={stringsToOptions(typeOptions)}
          value={{ label: typeValue, value: typeValue }}
          onChange={onTypeChange}
        />
      </div>
    </div>
  );
}

export default SearchOption;
