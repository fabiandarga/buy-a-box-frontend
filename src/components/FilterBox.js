import React from 'react';
import Card from './general/Card';
import Button from './general/Button';
import Tags from './general/Tags';
import './filterBox.css';

/**
 * props.selctedShops
 * props.onShopsChange
 * props.selctedProducts
 * props.onProductsChange
 * props.setFrom
 * props.setTo
 * props.onSave()
 */
function FilterBox(props) {
  const { selectedProducts, selectedShops, selectedLanguage, selectedType, onOpenFilter } = props;

  return (
    <Card>
      <div className="content-section filterBox">
        <div className="filterBoxHeader">
          <h2>Preispunkte filtern</h2>
          <Button size="small" onClick={onOpenFilter}>
            Filter öffnen
          </Button>
        </div>
        <Tags
          productOptions={selectedProducts}
          shopOptions={selectedShops}
          langOptions={selectedLanguage}
          typeOptions={selectedType}
        />
        <div>
          <h3>Beispiel #1: Preisvergleich</h3>
        </div>
      </div>
    </Card>
  );
}

export default FilterBox;
