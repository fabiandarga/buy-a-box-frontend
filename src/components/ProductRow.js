/* eslint-disable prefer-const */
import React from 'react';
import Button from './general/Button';
import LanguageFlag from './general/LanguageFlag';
import './productRow.css';

function ProduktRow(props) {
  const { language, price, shipping, shop, url } = props;

  const shopHref = url;

  return (
    <article className="productRow">
      <div className="editionProductLanguage">
        <a href={shopHref} target="_blank" rel="noreferrer">
          <LanguageFlag language={language} />
        </a>
      </div>
      <div className="price">
        <a href={shopHref} target="_blank" rel="noreferrer">{`${price.replace('.', ',')}€`}</a>
      </div>
      <div className="shipping">
        <span className="shippingHeadlineForMobile">LieferKosten:</span>
        <span>{shipping}</span>
      </div>
      <div className="shop">
        <a href={shopHref} target="_blank" rel="noreferrer">
          {shop}
        </a>
      </div>
      <div className="btnToShop">
        <a href={shopHref} target="_blank" rel="noreferrer">
          <Button variant="outline" fullWidth size="xs">
            Zum Shop
          </Button>
        </a>
      </div>
    </article>
  );
}

export default ProduktRow;
