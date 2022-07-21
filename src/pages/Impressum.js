import React from 'react';
import './impressum.css';

function Impressum() {
  return (
    <div className="impressum">
      <h1>Impressum</h1>
      <h3>Angaben gemäß § 5 TMG</h3>
      <div>Fabian Darga</div>
      <div>Am Langberg 54a</div>
      <div>21033 Hamburg</div>
      <h5>Kontakt:</h5>
      <div>Telefon: 0176-41877728</div>
      <div>
        E-Mail: <a href="mailto:kontakt@fabiandarga.de">kontakt@fabiandarga.de</a>{' '}
      </div>
      <h3>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</h3>
      <div>Fabian Darga</div>
      <div>Am Langberg 54a</div>
      <div>21033 Hamburg</div>

      <h5>Haftungsausschluss: </h5>
      <h5>Datenschutz</h5>
      <p>
        Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich.
        Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder
        eMail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis.
        Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben.
      </p>
      <p>
        Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per
        E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff
        durch Dritte ist nicht möglich.
      </p>
      <p>
        Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch Dritte
        zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien
        wird hiermit ausdrücklich widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich
        rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch
        Spam-Mails, vor.
      </p>
      <div>
        Impressum vom <a href="https://www.impressum-generator.de">Impressum Generator</a> der{' '}
        <a href="https://www.kanzlei-hasselbach.de/standorte/frankfurt/" rel="nofollow">
          Kanzlei Hasselbach, Frankfurt
        </a>
      </div>
    </div>
  );
}

export default Impressum;
