import React from 'react';
import Card from './general/Card';
import './infoText.css';

function InfoText() {
  return (
    <Card>
      <div className="infoText">
        <h2>Über Buy a Box</h2>
        <h3>Die Mission</h3>
        <p className="infoTextP">
          <span className="highlight">Buy a Box</span> ist ein tool zur Analyse der Preisentwicklung
          bei Magic the Gathering Booster Displays.
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
          über die aktuellen Preise informieren. Wir versuchen alle möglichen Filter anzubieten um
          euch eine individuelle Preisanalyse zu ermöglichen.
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
        <h3>Disclaimer</h3>
        <p className="infoTextP">
          Wir übernehmen keine Garantie für die Richtigkeit der hier angezeigten Daten. Die
          Informationen werden nur einmal pro Tag gesammelt. Änderungen die nach dieser Zeit
          erscheinen werden erst am nächsten Tag erfasst und dann in unseren Daten aufgenommen.
          Zudem können auch Software-Fehler dafür sorgen, dass Preise falsch oder gar nicht erfasst
          oder angezeigt werden.
        </p>
        <p className="infoTextP">
          Die ersten Datensätze stammen vom 11. Juli 2022. Frühere Informationen können wir leider
          nicht anzeigen.
        </p>
        <p className="infoTextP">
          Wir haben leider nicht alle Daten von allen Magic Online-Shops, die es da draußen gibt.
          Die Shops, die wir hier anzeigen sind nicht unsere Favoriten oder unsere Empfehlung für
          einen Kauf. Es ist etwas aufwändig neue shops mit in die Daten auszunehmen, sobald wir die
          Zeit haben, werden wir weitere Shops hinzufügen.{' '}
          <span className="highlight">
            Möchtest du deinen Shop hier auf der Seite wiederfinden oder sogar Werbung bei uns
            einblenden, dann melde dich gerne bei uns.
          </span>
        </p>
      </div>
    </Card>
  );
}

export default InfoText;
