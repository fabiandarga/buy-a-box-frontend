import React from 'react';
import Button from './general/Button';
import LanguageFlag from './general/LanguageFlag';
import './produktRow.css';

function ProduktRow(props) {
  const { edition, produkt, language, preis, versand, shop } = props;
  return (
    <tr>
      <td> @ </td>
      <td className="editionProductLanguage">
        <a href="https://www.trader-online.de/startseite/">
          <div>{edition}</div>
          <div className="productLanguage">
            {produkt}-<LanguageFlag language={language} />
          </div>
        </a>
      </td>
      <td className="price">
        <a href="https://www.trader-online.de/startseite/">{preis}</a>
      </td>
      <td className="shipping">
        {versand.map((item) => (
          <li>{item}</li>
        ))}
      </td>
      <td className="shop">
        <a href="https://www.trader-online.de/startseite/">{shop}</a>
      </td>
      <td>
        <a href="https://www.trader-online.de/startseite/">
          <Button text="Jetzt kaufen" variant="outline" size="small" />
        </a>
      </td>
    </tr>
  );
}

export default ProduktRow;
