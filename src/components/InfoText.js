import React from 'react';
import Card from './Card';
import './infoText.css';

function InfoText() {
  return (
    <Card>
      <div className="infoText">
        <h2>Über Buy a Box</h2>
        <h3>Die Mission</h3>
        <p className="infoTextP">
          <span className="highlight">Buy a Box</span> ist ein tool zur Analyse der Preisentwicklung
          bei Magic the gathering the Gathering Booster Displays.
        </p>
        <p className="infoTextP">
          Unsere Mission war und ist es eine einfache Möglich für alle Mtg Fans zu erschaffen, sich
          leicht einen Überblick über alle aktuellen Preise zu verschaffen, so wie die
          Preisentwicklung mitverfolgen zu können.
        </p>
        <p className="infoTextP">
          Wofür ihr diese Informationen benutzen wollt, ist dabei euch überlassen. Ihr könnt
          natürlich vor einem Kauf die Preise der verschiedenen Magic Sets bei den bekanntesten
          Shops vergleichen. Auch wenn ihr selber ein Display verkaufen wollt könnt Ihr euch hier
          über die aktuellen Preise informieren.
        </p>
        <h3>Die Idee</h3>
        <p className="infoTextP">
          Angefangen hatte das ganze als Idee von <span className="highlight">Fabian</span>, der
          selber Magic Karten sammelt. Für die Draft-Runden wurden schon länger immer die
          aktuellsten Sets bestellt. Einige Displays bleiben dann auch mal mehrere Jahre als
          Geldanlage im Schrank liegen. Daher kam dann irgendwann die Idee für dieses Projekt.
        </p>
        <h3>Das Team</h3>
        <h4>Fabian Darga</h4>
        <p className="infoTextP">
          Fabian arbeitet selbstständig als Senior Software Entwickler im Bereich Web- und Mobile.
        </p>
        <p className="infoTextP">
          Fabian ist zuständig für Design, Konzept, Planung und das Daten-Sammeln.
        </p>
        <h4>Muhanad Al-Musawi</h4>
        <p className="infoTextP">Muhanad ist Junior Entwickler im Bereich Web-Development.</p>
        <p className="infoTextP">
          Muhanad ist zuständig für die Entwicklung der Webseite, den Server und die Datenbank.
        </p>
      </div>
    </Card>
  );
}

export default InfoText;
