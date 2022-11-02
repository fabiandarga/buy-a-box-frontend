import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

function Footer() {
  const onPreferencesClick = () => {
    if (!window || !window.cookieconsent) {
      return;
    }
    window.cookieconsent.openPreferencesCenter();
  };
  return (
    <div className="footer">
      <h3 className="footer-logoName">Buy a Box</h3>
      <div className="footer-content-item">Magic the Gathering Booster Display Presivergleich</div>
      <div className="developer-content">
        <div className="developer">Fabian Darga: Konzept, Planung, Backend-Development</div>
        <div className="developer">Muhanad Al-Musawi: Frontend- / Backend-Development</div>
      </div>
      <div className="Impressum-link">
        <Link to="/Impressum"> Impressum </Link>
        <button className="openPreferencesBTN" type="button" onClick={onPreferencesClick}>
          Update cookies preferences
        </button>
      </div>
    </div>
  );
}

export default Footer;
