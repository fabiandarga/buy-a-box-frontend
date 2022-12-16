import React from 'react';
import Table from '../components/Table';

const items = [
  {
    edition: 'Dominare Remastered',
    produkt: 'Collector-Booster',
    language: 'deu',
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
    language: 'eng',
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
    language: 'jap',
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
