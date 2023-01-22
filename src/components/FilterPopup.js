import React from 'react';
import Popup from './general/Popup';
import Button from './general/Button';
import DropDownSelect from './DropDownSelect';
import WojtekmajDaterangePicker from './WojtekmajDaterangePicker';
import SchritteDropDown from './SchritteButtons';

import { stringsToOptions } from '../utils/array-utils';
import { getProductTitle } from '../utils/set-utils';

export default function FilterPopup(props) {
  const {
    show,
    selectedProducts,
    selectedShops,
    onShopsChange,
    onProductsChange,
    shopOptions,
    languageOptions,
    onSave,
    productOptions,
    typeOptions,
    setFrom,
    setTo,
    from,
    to,
    selectedLanguage,
    onLanguageChange,
    selectedType,
    onTypeChange,
    onClose,
  } = props;

  const productFilter = productOptions.map((item) => ({
    label: getProductTitle(item),
    value: item.code,
  }));
  const shopFilter = stringsToOptions(shopOptions);
  const languageFilter = stringsToOptions(languageOptions);
  const typeFilter = stringsToOptions(typeOptions);

  return show ? (
    <Popup
      handleClose={onClose}
      content={
        <div>
          <div className="section-title">Shops</div>
          <DropDownSelect
            multi
            options={shopFilter}
            value={selectedShops}
            onChange={onShopsChange}
          />
          <div className="section-title">Erweiterungen</div>
          <DropDownSelect
            multi
            variant="product"
            options={productFilter}
            value={selectedProducts}
            onChange={onProductsChange}
          />
          <div className="section-title">Sprache</div>
          <DropDownSelect
            multi
            options={languageFilter}
            value={selectedLanguage}
            onChange={onLanguageChange}
          />
          <div className="section-title">Produkttyp</div>
          <DropDownSelect multi options={typeFilter} value={selectedType} onChange={onTypeChange} />

          <h3>Zeitraum</h3>
          <WojtekmajDaterangePicker from={from} to={to} setFrom={setFrom} setTo={setTo} />
          <SchritteDropDown setFrom={setFrom} setTo={setTo} />
          <div className="saveBtnFooter">
            <Button
              onClick={() => {
                onSave();
                onClose();
              }}
              text="Save"
            />
          </div>
        </div>
      }
    />
  ) : null;
}
