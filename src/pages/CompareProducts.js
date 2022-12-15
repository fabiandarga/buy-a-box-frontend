import React from 'react';
import Table from '../components/Table';
import iconGermany from '../images/icon-germany.png';
import iconGreatBritain from '../images/icon-great-britain.png';
import iconJapan from '../images/icon-japan.png';

const items = [
  {
    edition: 'Dominare Remastered',
    produkt: 'Collector-Booster',
    sprache: iconGreatBritain,
    shop: 'Trader-online.de',
    versand: [
      'Deutschland: 2-3 Tage / 3,99€',
      'Osterreich: 4-5 Tage / 5,99€',
      'Schweiz: 4-5 Tage /6,99€',
    ],
    preis: '284,99€',
  },
  {
    edition: 'Dominare Remastered',
    produkt: 'Collector-Booster',
    sprache: iconGermany,
    shop: 'Trader-online.de',
    versand: [
      'Deutschland: 2-3 Tage / 3,99€',
      'Osterreich: 4-5 Tage / 5,99€',
      'Schweiz: 4-5 Tage /6,99€',
    ],
    preis: '284,99€',
  },
  {
    edition: 'Dominare Remastered',
    produkt: 'Collector-Booster',
    sprache: iconJapan,
    shop: 'Trader-online.de',
    versand: [
      'Deutschland: 2-3 Tage / 3,99€',
      'Osterreich: 4-5 Tage / 5,99€',
      'Schweiz: 4-5 Tage /6,99€',
    ],
    preis: '284,99€',
  },
];

function CompareProducts() {
  return (
    <div>
      <h1>Compare Products</h1>
      <Table items={items} />
    </div>
  );
}

export default CompareProducts;
