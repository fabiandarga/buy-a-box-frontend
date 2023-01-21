/* eslint-disable prefer-const */
import React from 'react';
import Button from './general/Button';
import LanguageFlag from './general/LanguageFlag';
import './productRow.css';

function ProduktRow(props) {
  const { set, productType, language, price, shipping, shop, code, url } = props;

  const iconClassname = `ss ss-${code}`;
  const shopHref = url;

  return (
    <tr className="comparisonTable">
      <td className="icon">
        {' '}
        <i className={iconClassname} />{' '}
      </td>
      <td className="editionProductLanguage">
        <a href={shopHref}>
          <div>{set}</div>
          <div className="productLanguage">
            {productType}-<LanguageFlag language={language} />
          </div>
        </a>
      </td>
      <td className="price">
        <a href={shopHref}>{`${price.replace('.', ',')}€`}</a>
      </td>
      <td className="shipping">
        <div className="shippingHeadlineForMobile">LieferKosten</div>
        <li>{shipping}</li>
      </td>
      <td className="shop">
        <a href={shopHref}>{shop}</a>
      </td>
      <td className="btnToShop">
        <a href={shopHref}>
          <Button text="Jetzt kaufen" variant="outline" size="small" />
        </a>
      </td>
    </tr>
  );
}

export default ProduktRow;
