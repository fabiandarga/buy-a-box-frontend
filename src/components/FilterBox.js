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
        <div className="filter-examples">
          <h3>Beispiel #1: Booster Display Preisvergleich</h3>
          Wenn du die Preise zu einem bestimmten Produkt vergleichen möchtest, stelle in dem
          Filter-Popup einfach die gewünschte Erweiterung, Sprache und Produkttyp ein. Am besten
          wählst u jeweils nur eine Sache aus. Das Feld für &quot;Shops&quot; lässt du einfach leer
          um die Preise in allen shops zu sehen. Bei der Zeitspanne reicht es aus &quot;letzte
          Woche&quot; auszuwählen.
          <h3>Beispiel #2: Preisentwicklung bei Collector Displays</h3>
          Um zu sehen, wie sich die Preisentwicklung bei Collector Displays entwickeln und wann
          diese nach einem release ausverkauft sind kannst du folgende Filter benutzen: Wähle z.B.
          die letzten 4 Erweiterung aus. Bei Produkttyp musst du natürlich &quot;Collector&quot;
          einstellen. Damit es übersichtlich bleibt wähle nur eine Sprache aus. Das Feld für
          &quot;Shops&quot; lässt du auch hier leer. Bei der Zeitspanne wähle &quot;letztes
          Jahr&quot; aus oder sogar länger.
        </div>
      </div>
    </Card>
  );
}

export default FilterBox;
