import React from 'react';
import { components } from 'react-select';

const { Option } = components;

export function ProductOption(props) {
  const { data } = props;
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Option {...props}>
      <i className={`ss ss-${data.value.toLowerCase()}`} /> {data.label}
    </Option>
  );
}

export function ValueOption(props) {
  const { data } = props;
  return (
    <div>
      <i className={`ss ss-${data.value.toLowerCase()}`} /> {data.value}
    </div>
  );
}

export default {
  ProductOption,
  ValueOption,
};
