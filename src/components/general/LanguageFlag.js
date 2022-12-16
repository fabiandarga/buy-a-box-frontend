import React from 'react';
import iconGermany from '../../images/icon-germany.png';
import iconGreatBritain from '../../images/icon-great-britain.png';
import iconJapan from '../../images/icon-japan.png';

function LanguageFlag(props) {
  const { language } = props;

  let languageFlag = ' ';
  if (language === 'deu') {
    languageFlag = iconGermany;
  }
  if (language === 'eng') {
    languageFlag = iconGreatBritain;
  }
  if (language === 'jap') {
    languageFlag = iconJapan;
  }

  return (
    <div>
      <img src={languageFlag} alt="Language" language={language} />
    </div>
  );
}

export default LanguageFlag;
