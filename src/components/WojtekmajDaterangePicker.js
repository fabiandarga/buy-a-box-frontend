import React from 'react';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';

function formatDate(date) {
  let result = `${date.getFullYear()}`;
  const month = date.getMonth() + 1;
  const day = date.getDate();
  result += `-${`0${month}`.slice(-2)}`;
  result += `-${`0${day}`.slice(-2)}`;
  return result;
}

function WojtekmajDaterangePicker(props) {
  const { setFrom, setTo, from, to } = props;

  const onChangeDateRangePickerHandler = (event) => {
    setFrom(formatDate(new Date(event[0])));
    setTo(formatDate(new Date(event[1])));
  };
  const valueDate = [new Date(from), new Date(to)];

  return (
    <div>
      <h3>Zeitrahmen</h3>
      <DateRangePicker onChange={onChangeDateRangePickerHandler} value={valueDate} />
    </div>
  );
}

export default WojtekmajDaterangePicker;
