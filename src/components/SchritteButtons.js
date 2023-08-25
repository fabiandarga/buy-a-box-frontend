/* eslint-disable react/no-array-index-key */
/* eslint-disable react/button-has-type */
import React from 'react';
import Button from './general/Button';
import './SchritteButtons.css';

function SchritteButtons(props) {
  const { setFrom, setTo } = props;
  const dateThisWeek = new Date(Date.now() - 604800000).toISOString().slice(0, 10);
  const dateThisMonth = new Date(Date.now() - 2628000000).toISOString().slice(0, 10);
  const dateThisYear = new Date(Date.now() - 31536000000).toISOString().slice(0, 10);

  const onChangeDateHandler = (value) => {
    setFrom(value);
    setTo(new Date().toISOString().slice(0, 10));
  };

  const SchritteOption = [
    { value: dateThisWeek, label: 'Eine Woche' },
    { value: dateThisMonth, label: 'Ein Monat' },
    { value: dateThisYear, label: 'Ein Jahr' },
  ];

  return (
    <div className="schritteButtonsContent">
      {SchritteOption.map((schritte) => (
        <Button
          key={schritte.value}
          onClick={() => {
            onChangeDateHandler(schritte.value);
          }}
          variant="outline"
          size="small"
          text={schritte.label}
        />
      ))}
    </div>
  );
}

export default SchritteButtons;
