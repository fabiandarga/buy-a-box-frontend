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
    { value: dateThisWeek, label: 'This Week', name: 'This Week' },
    { value: dateThisMonth, label: 'This Month', name: 'This Month' },
    { value: dateThisYear, label: 'This Year', name: 'This Year' },
  ];

  return (
    <div>
      <div className="tagscategory">Schritte</div>
      <div className="schritteButtonsContent">
        {SchritteOption.map((schritte) => (
          <Button
            key={schritte.value}
            className="button-outline"
            onClick={() => {
              onChangeDateHandler(schritte.value);
            }}
            variant="outline"
            text={schritte.name}
          />
        ))}
      </div>
    </div>
  );
}

export default SchritteButtons;
